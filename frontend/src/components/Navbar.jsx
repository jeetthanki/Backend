import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../hook/useTheme";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("username");

  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/LoginPage");
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/watchlist" className="nav-link">
          Watchlist
        </Link>
      </div>
      <div className="actions">
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? "Light" : " Dark"}
        </button>

        {user && (
          <span className="user-info">
            <p>Hi, {user}</p>
            <button className="danger" onClick={handleLogout}>
              Logout
            </button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
