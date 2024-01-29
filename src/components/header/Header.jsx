import React, { useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            Radha Swami Ji
          </Link>
          <button
            className={`navbar-toggler ${navbarOpen ? 'collapsed' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={navbarOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={handleNavbarToggle}
          >
            {/* Custom icons for burger and X */}
            <span className={`navbar-toggler-icon ${navbarOpen ? 'd-none' : ''}`}>
              <i className="fas fa-bars text-light fs-2"></i>
            </span>
            <span className={`navbar-toggler-icon ${navbarOpen ? '' : 'd-none'}`}>
              <i className="fas fa-times text-light fs-2"></i>
            </span>
          </button>
          <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => `nav-link ${isActive ? 'custom-color' : 'text-white'}`}
                  aria-current="page"
                  onClick={handleLinkClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Satsang"
                  className={({ isActive }) => `nav-link ${isActive ? 'custom-color' : 'text-white'}`}
                  aria-disabled="true"
                  onClick={handleLinkClick}
                >
                  Satsang
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/shabad"
                  className={({ isActive }) => `nav-link ${isActive ? 'custom-color' : 'text-white'}`}
                  aria-disabled="true"
                  onClick={handleLinkClick}
                >
                  Shabad
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/sakhi"
                  className={({ isActive }) => `nav-link ${isActive ? 'custom-color' : 'text-white'}`}
                  aria-disabled="true"
                  onClick={handleLinkClick}
                >
                  Sakhi
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
