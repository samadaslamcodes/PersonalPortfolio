import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <h1>Abdul's Portfolio</h1>
      <ul className="nav-list">
        <li>
          <Link to="/" className={isActive('/')}>
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className={isActive('/about')}>
            <i className="fa-solid fa-user"></i>
            <span>About Me</span>
          </Link>
        </li>
        <li>
          <Link to="/projects" className={isActive('/projects')}>
            <i className="fa-solid fa-tv"></i>
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className={isActive('/contact')}>
            <i className="fa-brands fa-facebook-messenger"></i>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;