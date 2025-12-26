import React, { useState } from "react";
import {
  addProduct,
  deleteProduct as deleteProductAPI,
  updateProduct,
} from "../api";

export default function Products({ products, setProducts, isAdmin }) {
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    imageFile: null,
  });

  const [preview, setPreview] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    setForm((prev) => ({ ...prev, imageFile: file }));
  }

  function fileToBase64(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      let image = preview;
      if (form.imageFile) image = await fileToBase64(form.imageFile);

      const payload = {
        name: form.name,
        category: form.category,
        price: Number(form.price),
        stock: Number(form.stock),
        image,
      };

      let saved;

      if (editId) {
        saved = await updateProduct(editId, payload);
        setProducts((prev) =>
          prev.map((p) => (p._id === editId ? saved : p))
        );
        setMessage("Product updated successfully");
      } else {
        saved = await addProduct(payload);
        setProducts((prev) => [saved, ...prev]);
        setMessage("Product added successfully");
      }

      setEditId(null);
      setShowForm(false);
      setPreview("");
      setForm({
        name: "",
        category: "",
        price: "",
        stock: "",
        imageFile: null,
      });
    } catch (err) {
      setError("Something went wrong");
    }
  }

  async function handleDelete(id) {
    setMessage("");
    setError("");

    try {
      await deleteProductAPI(id);
      setProducts((prev) => prev.filter((p) => p._id !== id));
      setMessage("Product deleted successfully");
    } catch (err) {
      setError("Failed to delete product");
    }
  }

  function stockBadge(stock) {
    if (stock === 0) return "danger";
    if (stock < 5) return "warning";
    return "success";
  }

  return (
    <div>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="d-flex justify-content-between mb-3">
        <h2>Inventory</h2>

        {isAdmin && (
          <button
            className="btn btn-primary"
            onClick={() => {
              setShowForm(!showForm);
              setEditId(null);
            }}
          >
            {showForm ? "Close" : "Add Item"}
          </button>
        )}
      </div>

      {isAdmin && showForm && (
        <form onSubmit={handleSubmit} className="card p-3 mb-4">
          <input
            name="name"
            className="form-control mb-2"
            placeholder="Item Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="category"
            className="form-control mb-2"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
          />

          <div className="d-flex gap-2 mb-2">
            <input
              name="price"
              type="number"
              className="form-control"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
            />
            <input
              name="stock"
              type="number"
              className="form-control"
              placeholder="Stock"
              value={form.stock}
              onChange={handleChange}
            />
          </div>

          <input
            type="file"
            className="form-control mb-2"
            onChange={handleFileChange}
          />

          {preview && <img src={preview} width="120" alt="preview" />}

          <button className="btn btn-success mt-2">
            {editId ? "Update" : "Save"}
          </button>
        </form>
      )}

      <div className="row g-3">
        {products.map((p) => (
          <div className="col-md-4" key={p._id}>
            <div className="card h-100">
              <div className="card-body">
                <h5>{p.name}</h5>
                <p className="text-muted">{p.category}</p>

                {isAdmin && <p>₹{p.price}</p>}

                <span className={`badge bg-${stockBadge(p.stock)}`}>
                  Stock: {p.stock}
                </span>

                {isAdmin && (
                  <div className="d-flex gap-2 mt-2">
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => {
                        setShowForm(true);
                        setEditId(p._id);
                        setForm({
                          name: p.name,
                          category: p.category,
                          price: p.price,
                          stock: p.stock,
                          imageFile: null,
                        });
                        setPreview(p.image || "");
                      }}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(p._id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
