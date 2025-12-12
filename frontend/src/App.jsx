import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import "./index.css";

function App() {
  // LIFTED PRODUCTS STATE (shared for whole app)
  const [products, setProducts] = useState([]);

  const [section, setSection] = useState("home");

  return (
    <div
      id="app-root"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar onNavigate={setSection} current={section} />

      <main className="main-content" style={{ flex: 1, padding: "1.25rem" }}>
        {section === "home" && <Home />}
        {section === "about" && <About />}

        {section === "products" && (
          <Products
            products={products}
            setProducts={setProducts} // pass lifted state to Products
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
