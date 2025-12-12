import React from "react";

function Navbar({ onNavigate, current }) {
  const active = (name) => (current === name ? "active" : "");

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a   className="navbar-brand prodex-min" href="#" onClick={(e) => e.preventDefault()}>
          PRODEX
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className={`nav-link btn btn-link ${active("home")}`} onClick={() => onNavigate("home")}>Home</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link btn btn-link ${active("about")}`} onClick={() => onNavigate("about")}>About</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link btn btn-link ${active("products")}`} onClick={() => onNavigate("products")}>Products</button>
            </li>
          </ul>

          <form className="d-flex mx-auto w-50" role="search" onSubmit={(e) => e.preventDefault()}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="button">Search</button>
          </form>

          <div className="d-flex ms-auto">
            <button className="btn btn-outline-primary me-2">Sign Up</button>
            <button className="btn btn-primary">Log In</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
