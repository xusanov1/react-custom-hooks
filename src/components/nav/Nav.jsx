import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/uzum-log.png'
import './Nav.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <img className="logo" src={Logo} alt="Uzum Logo" />
      <input className='nav-input' type="text" placeholder='Search' />
      <Link className="nav-link" to="/">Products</Link>
      <Link className="nav-link" to="/user">Users</Link>
      <Link className="nav-link" to="/profile">Profile</Link>
    </nav>
  );
};

export default NavBar;