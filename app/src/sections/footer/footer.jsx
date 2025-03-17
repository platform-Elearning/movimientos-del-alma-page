import React from 'react';
import './footer.css';
import logo from "../../assets/logo.png";
import tiktok from "../../assets/tiktok.png";
import yt from "../../assets/youtube.png";
import ig from "../../assets/instagram.png";
import fb from "../../assets/facebook.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Movimientos del Alma" />
          <h2>Movimientos del Alma</h2>
        </div>

        <div className="footer-columns">
          {/* Primera columna: Explorar */}
          <div className="footer-column">
            <h3>Explorar</h3>
            <ul>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Formaciones Online</a></li>
              <li><a href="#">Clases Presenciales</a></li>
            </ul>
          </div>

          {/* Segunda columna: Sucursales */}
          <div className="footer-column">
            <h3>Sucursales</h3>
            <ul>
              <li><strong>Casa Central</strong> - Almirante Brown 72, Río Ceballos - +54 9 351 3468819</li>
              <li><strong>Sucursal La Calera</strong> - Jorge Luis Borges 662, La Calera - +54 9 3517 664275</li>
              <li><strong>Sucursal El Talar</strong> - Las Zinnias 209, El Talar - +54 9 3543 616808</li>
            </ul>
          </div>

          {/* Tercera columna: Desarrollado por */}
          <div className="footer-column">
            <h3>Desarrollado por</h3>
            <ul>
              <li>AsUser - Software Engineering</li>
              <li>Conocenos</li>
              <li>+5493543313903</li>
            </ul>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="footer-social">
          <a href="#"><img src={tiktok} alt="TikTok" /></a>
          <a href="#"><img src={ig} alt="Instagram" /></a>
          <a href="#"><img src={fb} alt="Facebook" /></a>
          <a href="#"><img src={yt} alt="YouTube" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;