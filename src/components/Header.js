import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo">
          <Link to="/">Hoith</Link>
        </div>
        <nav className="main-nav">
          <ul className="nav-links">
            <li className="dropdown">
              <a href="#">Who Are We</a>
              <ul className="dropdown-content">
                <li><Link to="/our-story">Our Story</Link></li>
                <li><Link to="/leadership">Leadership</Link></li>
                <li><Link to="/careers">Careers</Link></li>
              </ul>
            </li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <Link to="/contact" className="btn-contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
