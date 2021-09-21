import React from "react";
import { Link } from "react-router-dom";
// import Logo from './logo'
import '../styles/top-navigation.css'

function TopNavigation() {
  return (
<>
    <div className="navbar">
    <ul className="nav-links">
    <li className="nav-item">
        <Link to="/contactpage" className="nav-link">Contact Us</Link>
      </li>

      <li className="nav-item">
        <Link to="/teampage" className="nav-link">Team</Link>
      </li>

      <li className="nav-item" href='#our-product'>
        <a href='#our-product' className="nav-link">Product </a>
      </li>

      <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
      </li>
    </ul>
  </div>
  </>
  )
}

  export default TopNavigation;