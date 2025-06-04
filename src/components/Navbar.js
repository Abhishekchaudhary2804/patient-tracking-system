import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">PatientCare</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/book">Book Appointment</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/prescription">Prescription</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
