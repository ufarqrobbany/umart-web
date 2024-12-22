import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCurrentWidth } from 'react-socks';
import logo from "../../images/Logo.png";
import "./navbar.css";
import { FaSignInAlt } from 'react-icons/fa';

function NavBar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const width = useCurrentWidth();

  return (
    <nav className="navbar-container">
      <div className="logo">
        <img src={logo} alt="image"/>
      </div>
      <Link className="cv" to="/login">
        <span className="btn-secondary">
        <FaSignInAlt/> Login
        </span>
      </Link>
    </nav>
  );
}

export default NavBar;
