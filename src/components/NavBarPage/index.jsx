import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCurrentWidth } from 'react-socks';
import logo from "../../images/Logo.png";
import "./navbarpage.css";
import { FaBook, FaBullhorn, FaSignInAlt } from 'react-icons/fa';

function NavBarPage(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const width = useCurrentWidth();

  return (
    <nav className="navbarpage-container">
      <div className="logo">
        <Link to="/"><img src={logo} alt="image"/></Link> 
      </div>
      {/* <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div> */}
      <ul className={`navbarpage-list ${isMenuOpen ? 'active' : ''}`}>
        <li className="navbarpage-item"><NavLink exact to="/help-center" activeClassName="active" onClick={toggleMenu}><FaBook/> Bantuan</NavLink></li>
        <li className="navbarpage-item"><NavLink to="/news" activeClassName="active" onClick={toggleMenu}><FaBullhorn/> News</NavLink></li>
      </ul>
      <div className='gap'></div>
      <Link className="cv" to="/login">
        <span className="btn-secondary">
        <FaSignInAlt/> Login
        </span>
      </Link>
    </nav>
  );
}

export default NavBarPage;
