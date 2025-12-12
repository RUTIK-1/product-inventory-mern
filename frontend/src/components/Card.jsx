import React, { useState } from "react";

export default function Card({ title, description, category, price, image }) {
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [qty, setQty] = useState(1);

  function toggleLike() {
    setLiked(prev => !prev);
  }

  function toggleExpanded() {
    setExpanded(prev => !prev);
  }

  function incQty() {
    setQty(prev => Math.min(20, prev + 1));
  }

  function decQty() {
    setQty(prev => Math.max(1, prev - 1));
  }

  function handleQtyChange(e) {
    const n = Number(e.target.value);
    if (!Number.isNaN(n)) {
      setQty(Math.max(1, Math.min(10, n)));
    }
  }

  const numericPrice = Number(price) || 0;
  const totalPrice = numericPrice * qty;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "12px",
        borderRadius: "10px",
        width: "260px",
        margin: "10px",
        background: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 420,
        boxSizing: "border-box",
      }}
    >
      <div>
        {/* Image */}
        <img className="card-image"
          src={image}
          alt={title}
         
        />

        {/* Title / Category / Price */}
        <h3 style={{ margin: "6px 0" }}>{title}</h3>
        <p style={{ margin: "6px 0" }}>
          <small style={{ color: "gray" }}>Category: {category}</small>
        </p>
        

        {/* Like + Details buttons */}
        <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
          <button
            onClick={toggleLike}
            aria-pressed={liked}
            style={{
              border: "1px solid #ccc",
              padding: "6px 10px",
              borderRadius: "6px",
              cursor: "pointer",
              background: liked ? "#fee" : "transparent",
            }}
          >
            {liked ? "♥ Liked" : "♡ Like"}
          </button>

          <button
            onClick={toggleExpanded}
            aria-expanded={expanded}
            style={{
              border: "1px solid #ccc",
              padding: "6px 8px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            {expanded ? "Collapse" : "Details"}
          </button>
        </div>

        {/* Expanded Description */}
        {expanded && (
          <div style={{ marginTop: 10, background: "#fff", padding: 8, borderRadius: 6 }}>
            <p style={{ margin: 0 }}>{description}</p>
          </div>
        )}

        {/* Quantity controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}>
          <button
            onClick={decQty}
            disabled={qty <= 1}
            style={{ padding: "6px 8px", borderRadius: 6, cursor: "pointer" }}
          >
            −
          </button>

          <input
            type="number"
            value={qty}
            onChange={handleQtyChange}
            min={1}
            style={{
              width: 60,
              textAlign: "center",
              padding: "6px",
              borderRadius: 6,
              border: "1px solid #ccc",
            }}
          />

          <button
            onClick={incQty}
            style={{ padding: "6px 8px", borderRadius: 6, cursor: "pointer" }}> 
            +
          </button>

          <div style={{ marginLeft: "auto", fontSize: 14, color: "#333" }}>Qty: {qty}</div>
        </div>
      </div>

      {/* Purchase Button (bottom) */}
      <div style={{ marginTop: 14 }}>
        <button
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            background: "#007bff",
            color: "#fff",
            fontWeight: 600,
            fontSize: 16,
          }}
        >
          Purchase ₹{totalPrice}
        </button>
      </div>
    </div>
  );
}
