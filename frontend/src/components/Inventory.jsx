import React from "react";

export default function Card({
  title,
  category,
  price,
  stock = 0,
  image,
  onDelete,
}) {
  const status =
    stock === 0 ? "Out of Stock" : stock < 5 ? "Low Stock" : "In Stock";

  const statusColor =
    stock === 0 ? "danger" : stock < 5 ? "warning" : "success";

  return (
    <div
      className="card h-100"
      style={{ borderRadius: "10px" }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="card-img-top"
          style={{ height: "180px", objectFit: "cover" }}
        />
      )}

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="text-muted mb-1">Category: {category}</p>

        <p className="mb-1">
          Price: <strong>₹{price}</strong>
        </p>

        <p className={`badge bg-${statusColor} align-self-start`}>
          {status}
        </p>

        <div className="mt-auto d-flex justify-content-between">
          <button className="btn btn-sm btn-outline-secondary">
            Manage
          </button>

          <button
            className="btn btn-sm btn-outline-danger"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
