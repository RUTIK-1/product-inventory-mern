// Products.jsx
import React, { useState } from "react";

export default function Products({ products, setProducts }) {
  // show/hide form
  const [showForm, setShowForm] = useState(false);
  
  // form state + image file + base64 image
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    imageFile: null,   // raw uploaded file
    imageBase64: ""    // converted base64 string stored in product
  });

  // image preview URL (object URL)
  const [preview, setPreview] = useState("");

  // handle text input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  // when user selects an image file
  function handleFileChange(e) {
    const file = e.target.files?.[0] ?? null;

    if (!file) {
      setPreview("");
      setForm(prev => ({ ...prev, imageFile: null, imageBase64: "" }));
      return;
    }

    // create a preview URL (fast, not stored)
    const url = URL.createObjectURL(file);
    setPreview(url);

    // store file in state (we convert it later in handleSubmit)
    setForm(prev => ({ ...prev, imageFile: file }));
  }

  // convert file → base64 (so it can be stored inside product object)
  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result); // base64 string
      reader.onerror = () => reject("Image read failed");

      reader.readAsDataURL(file); // convert to base64
    });
  }

  // form submission
  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.title.trim() || !form.price) {
      alert("Please provide a title and price.");
      return;
    }

    let finalImageBase64 = "";

    // if user selected an image, convert to base64
    if (form.imageFile) {
      try {
        finalImageBase64 = await fileToBase64(form.imageFile);
      } catch (err) {
        alert("Failed to load image.");
        return;
      }
    }

    // NEW PRODUCT OBJECT
    const newProduct = {
      id: Date.now(),
      title: form.title.trim(),
      price: Number(form.price),
      category: form.category.trim(),
      description: form.description.trim(),
      image: finalImageBase64, // store base64 image
      createdAt: new Date().toISOString()
    };

    // add product to list
    setProducts(prev => [newProduct, ...prev]);

    // reset form
    setForm({
      title: "",
      price: "",
      category: "",
      description: "",
      imageFile: null,
      imageBase64: ""
    });

    // remove preview URL
    if (preview) URL.revokeObjectURL(preview);
    setPreview("");

    setShowForm(false);
  }

  // delete one product
  function deleteProduct(id) {
    setProducts(prev => prev.filter(p => p.id !== id));
  }

  // clear all products
  function clearAll() {
    if (products.length === 0) return;
    if (confirm("Clear all products?")) setProducts([]);
  }

  return (
    <div>
      {/* top bar */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Products</h2>
        <div>
          <button
            className="btn btn-outline-danger me-2"
            onClick={clearAll}
            disabled={products.length === 0}
          >
            Clear All
          </button>

          <button
            className="btn btn-primary"
            onClick={() => setShowForm(s => !s)}
          >
            {showForm ? "Close" : "Create"}
          </button>
        </div>
      </div>

      {/* CREATE FORM */}
      {showForm && (
        <div className="card mb-4">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              
              {/* title */}
              <div className="mb-2">
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Title"
                />
              </div>

              {/* price + category */}
              <div className="mb-2 d-flex gap-2">
                <input
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  type="number"
                  step="0.01"
                  className="form-control"
                  placeholder="Price"
                />

                <input
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Category"
                />
              </div>

              {/* description */}
              <div className="mb-2">
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="form-control"
                  rows="2"
                  placeholder="Description (optional)"
                />
              </div>

              {/* image upload */}
              <div className="mb-3">
                <label className="form-label">Product Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleFileChange}
                />
              </div>

              {/* image preview */}
              {preview && (
                <div className="mb-3">
                  <img
                    src={preview}
                    alt="preview"
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      border: "1px solid #ddd"
                    }}
                  />
                </div>
              )}

              {/* buttons */}
              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>

                <button type="submit" className="btn btn-success">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PRODUCT LIST */}
      {products.length === 0 ? (
        <div className="alert alert-info">No products yet. Create one.</div>
      ) : (
        <div className="row g-3">
          {products.map(p => (
            <div className="col-md-4" key={p.id}>
              <div className="card h-100">

                {/* display image if exists */}
                {p.image && (
                  <div style={{ padding: "12px" }}>
                    <img
                      src={p.image}
                      alt={p.title}
                      style={{
                        width: "100%",
                        height: "180px",
                        objectFit: "cover",
                        borderRadius: "8px"
                      }}
                    />
                  </div>
                )}

                <div className="card-body d-flex flex-column">
                  <div>
                    <h5 className="card-title mb-1">{p.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{p.category || "Uncategorized"}</h6>
                    <p className="card-text mb-2">{p.description || "—"}</p>
                  </div>

                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <div>
                      <strong>₹{Number(p.price).toFixed(2)}</strong>
                      <div>
                        <small className="text-muted">
                          Created: {new Date(p.createdAt).toLocaleString()}
                        </small>
                      </div>
                    </div>

                    <div className="d-flex flex-column align-items-end">
                      <button
                        className="btn btn-sm btn-outline-danger mb-2"
                        onClick={() => deleteProduct(p.id)}
                      >
                        Delete
                      </button>

                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => alert(`Action: ${p.title}`)}
                      >
                        Action
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
