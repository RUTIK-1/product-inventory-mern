import React, { useState } from "react";

function Navbar({ onNavigate, current, isAdmin, onAdminLogin, onLogout }) {
  const active = (name) => (current === name ? "active" : "");

  const [showAdminForm, setShowAdminForm] = useState(false);
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAdminLogin(password);
    setPassword("");
    setShowAdminForm(false);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="prodex-min">PEODEX</span>

        <div className="collapse navbar-collapse">
          {/* LEFT */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <button className={`nav-link btn ${active("home")}`} onClick={() => onNavigate("home")}>
                Dashboard
              </button>
            </li>

            <li className="nav-item">
              <button className={`nav-link btn ${active("products")}`} onClick={() => onNavigate("products")}>
                Inventory
              </button>
            </li>

            <li className="nav-item">
              <button className={`nav-link btn ${active("about")}`} onClick={() => onNavigate("about")}>
                About
              </button>
            </li>
          </ul>

          {/* RIGHT */}
          <div className="d-flex align-items-center">
            {!isAdmin ? (
              <>
                <button
                  className="btn btn-outline-secondary me-2"
                  onClick={() => setShowAdminForm(!showAdminForm)}
                >
                  Admin
                </button>

                {showAdminForm && (
                  <form onSubmit={handleSubmit} className="d-flex">
                    <input
                      type="password"
                      className="form-control me-2"
                      placeholder="Admin password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ width: 160 }}
                    />
                    <button className="btn btn-success btn-sm">Login</button>
                  </form>
                )}
              </>
            ) : (
              <button className="btn btn-danger" onClick={onLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
