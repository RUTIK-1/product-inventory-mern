import React from "react";

function Home({ totalProducts, lowStockItems, outOfStockItems }) {
  return (
    <div>
      <h2 className="mb-4">Inventory Dashboard</h2>

      <div className="row g-3">
        <div className="col-md-4">
          <div className="card text-center p-4">
            <h5>Total Products</h5>
            <h2>{totalProducts}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center p-4">
            <h5>Low Stock Items</h5>
            <h2>{lowStockItems}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center p-4">
            <h5>Out of Stock</h5>
            <h2>{outOfStockItems}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
