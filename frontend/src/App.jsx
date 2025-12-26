import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import { getProducts } from "./api";

function App() {
  const [section, setSection] = useState("home");
  const [products, setProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.error("Failed to load products", err);
    }
  }

  const totalProducts = products.length;
  const lowStockItems = products.filter(p => p.stock > 0 && p.stock < 5).length;
  const outOfStockItems = products.filter(p => p.stock === 0).length;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <Navbar
          current={section}
          onNavigate={setSection}
          isAdmin={isAdmin}
          onAdminLogin={(password) => {
            if (password === "admin123") {
              setIsAdmin(true);
            } else {
              alert("Wrong admin password");
            }
          }}
          onLogout={() => setIsAdmin(false)}
          />


      <main style={{ flex: 1, padding: "1.25rem" }}>
        {section === "home" && (
          <Home
            totalProducts={totalProducts}
            lowStockItems={lowStockItems}
            outOfStockItems={outOfStockItems}
          />
        )}

        {section === "about" && <About />}

        {section === "products" && (
          <Products
            products={products}
            setProducts={setProducts}
            isAdmin={isAdmin}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
