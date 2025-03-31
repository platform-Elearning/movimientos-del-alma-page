import React from 'react';
import './footer.css';
import logo from "../../assets/logo.png";
import tiktok from "../../assets/tiktok.png";
import yt from "../../assets/youtube.png";
import ig from "../../assets/instagram.png";
import fb from "../../assets/facebook.png";
import asUser from "../../assets/iconAsuser.png";
import iconWeb from "../../assets/iconWeb.png";
import wp from "../../assets/wpp.png";

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
              <li><a href="/nosotros">Nosotros</a></li>
              <li><a href="/clasesonline">Formaciones Online</a></li>
              <li><a href="/clases">Clases Presenciales</a></li>
            </ul>
            <div className="footer-social">
          <a href="#"><img src={tiktok} alt="TikTok" /></a>
          <a href="#"><img src={ig} alt="Instagram" /></a>
          <a href="#"><img src={fb} alt="Facebook" /></a>
          <a href="#"><img src={yt} alt="YouTube" /></a>
        </div>
          </div>

          {/* Segunda columna: Sucursales */}
          <div className="footer-column">
  <h3>Sucursales</h3>
  <div className="sucursal">
    <h4><strong>Casa Central</strong></h4>
    <p>Almirante Brown 72, Río Ceballos - +54 9 351 3468819</p>
  </div>
  <div className="sucursal">
    <h4><strong>Sucursal La Calera</strong></h4>
    <p>Jorge Luis Borges 662, La Calera - +54 9 3517 664275</p>
  </div>
  <div className="sucursal">
    <h4><strong>Sucursal El Talar</strong></h4>
    <p>Las Zinnias 209, El Talar - +54 9 3543 616808</p>
  </div>
</div>

          {/* Tercera columna: Desarrollado por con íconos */}
          <div className="footer-column">
            <h3>Desarrollado por</h3>
            <ul>
              <li>
                <img src={asUser} alt="AsUser" className="footer-icon" />
                AsUser - Software Engineering
              </li>
              <li>
                <img src={iconWeb} alt="Conócenos" className="footer-icon" />
                Conócenos
              </li>
              <li>
                <img src={wp} alt="WhatsApp" className="footer-icon" />
                +54 9 3543 313903
              </li>
            </ul>
          </div>
        </div>

        {/* Redes sociales */}
       
      </div>
    </footer>
  );
};

export default Footer;
