import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import "./Navbar.css";
import Button from "../../components/button/Button"; // Asegúrate de que Button esté correctamente importado
import logo from "../../assets/logo2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/clases">Clases <br />presenciales</Link> {/* Enlace a la página de "Clases" */}
          </li>
          <li>
            <Link to="/clasesOnline">Formaciones <br />online</Link> {/* Enlace a la página de "Clases Online" */}
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link> {/* Enlace a la página de "Nosotros" */}
          </li>
          <li>
            <a href="https://platform.mda-ifi.com/" target="_blank" rel="noopener noreferrer">
              <Button text="Plataforma" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
