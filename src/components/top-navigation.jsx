import React from "react";
import { Link } from "react-router-dom";
import '../styles/top-navigation.css'

function TopNavigation() {
  return (
    <div className="navbar">

    <ul className="nav-links">
    <li className="nav-item">
        <Link to="/contact-us" className="nav-link">Contact Us</Link>
      </li>

      <li className="nav-item">
        <Link to="/team" className="nav-link">Team</Link>
      </li>

      <li className="nav-item">
        <Link to="/our-product" className="nav-link">Product</Link>
      </li>

      <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
      </li>
    </ul>

  </div>
  )
}

  export default TopNavigation;