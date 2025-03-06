import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="nav-link">
          <img src="/school logo.png" alt="Logo" className="logo-img" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/students" className="nav-link">
          Students
        </Link>
        <Link to="/teachers" className="nav-link">
          Teachers
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
