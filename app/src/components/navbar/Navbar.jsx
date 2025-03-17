import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "../../components/button/Button"; // Importa el componente Button
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
            <a href="#conocenos">Conocenos</a>
          </li>
          <li>
            <a href="#cursos">Nuestros cursos</a>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link> {/* Cambia el enlace a "nosotros" */}
          </li>
          <li>
            <Button text="Plataforma" /> {/* El botón ahora dirá PLATAFORMA */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;