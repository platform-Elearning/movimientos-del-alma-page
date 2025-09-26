import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "../../components/button/Button";
import logo from "../../assets/logo2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/clases" onClick={() => setIsMenuOpen(false)}>Clases presenciales</Link>
          </li>
          <li>
            <Link to="/clasesOnline" onClick={() => setIsMenuOpen(false)}>Formaciones online</Link>
          </li>
          <li>
            <Link to="/info-jime" onClick={() => setIsMenuOpen(false)}>Sobre Jime</Link> 
          </li>
          <li>
            <Link to="/nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
          </li>
          <li>
            <a href="https://platform.mda-ifi.com/" target="_blank" rel="noopener noreferrer" className="plataforma-button-link">
              <Button text="Plataforma" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
