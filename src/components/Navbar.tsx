import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; // adjust path as needed

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="College Dhundo AI Logo" className="logo" />
        <h2>College Dhundo AI</h2>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/chat">ChatBot</Link>
        <Link to="/features">Features</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
