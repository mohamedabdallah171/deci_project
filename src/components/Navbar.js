import React from 'react';
import { Link } from 'react-router-dom'; // استيراد Link
import './navbar.css'; 
import logo from './logo.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className='f-div'>
        <div><img src={logo} alt='Logo' className='logo-image' /></div> 
        <div className="logo">Social Dopamine</div>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/journal">Journal</Link></li>
        <li><Link to="/subscription">Subscription</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
