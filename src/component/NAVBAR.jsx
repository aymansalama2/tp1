import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './NAVBAR.css';

export default function NAVBAR() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <header className={`header ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" className="logo" onClick={closeMenu}>
          logo
        </NavLink>
        <label htmlFor="" className='icons' onClick={toggleMenu}>
          <i className={isMenuOpen ? 'bx bx-x' : 'bx bx-menu'} id='menu-icon'></i>
        </label>
        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>
      </header>
    </div>
  );
}
