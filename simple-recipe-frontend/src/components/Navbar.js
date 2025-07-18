// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>🍽️ Simple Recipe Book</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
