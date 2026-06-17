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
      <div className="footer-inner">

        <div className="footer-top">
          {/* Columna brand */}
          <div className="footer-brand">
            <img src={logo} alt="Movimientos del Alma" className="footer-brand-logo" />
            <h2 className="footer-brand-name">Movimientos del Alma</h2>
            <p className="footer-brand-desc">Escuela de danza con amor, técnica y comunidad.</p>
            <div className="footer-social">
              <a href="https://www.tiktok.com/@movimientos_del_alma" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <img src={tiktok} alt="TikTok" />
              </a>
              <a href="https://www.instagram.com/movimientos_del_alma?igsh=MW40N2U5bm1hNTliag==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={ig} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/movimientos.delalma.5" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={fb} alt="Facebook" />
              </a>
              <a href="https://www.youtube.com/@movimientosdelalma575" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <img src={yt} alt="YouTube" />
              </a>
            </div>
          </div>

          {/* Columna Explorar */}
          <div className="footer-col">
            <h3 className="footer-col-title">Explorar</h3>
            <ul className="footer-col-list">
              <li><a href="/">Inicio</a></li>
              <li><a href="/nosotros">Nosotros</a></li>
              <li><a href="/clasesOnline">Formaciones Online</a></li>
              <li><a href="/clases">Clases Presenciales</a></li>
              <li><a href="/pack-clases">Pack de Clases</a></li>
            </ul>
          </div>

          {/* Columna Sucursales */}
          <div className="footer-col">
            <h3 className="footer-col-title">Sucursales</h3>
            <div className="footer-sucursal">
              <span className="footer-sucursal-name">Casa Central</span>
              <span className="footer-sucursal-info">Almirante Brown 72, Río Ceballos</span>
              <span className="footer-sucursal-tel">+54 9 351 3468819</span>
            </div>
            <div className="footer-sucursal">
              <span className="footer-sucursal-name">La Calera</span>
              <span className="footer-sucursal-info">Jorge Luis Borges 662, La Calera</span>
              <span className="footer-sucursal-tel">+54 9 3517 664275</span>
            </div>
            <div className="footer-sucursal">
              <span className="footer-sucursal-name">El Talar</span>
              <span className="footer-sucursal-info">Las Zinnias 209, El Talar</span>
              <span className="footer-sucursal-tel">+54 9 3543 616808</span>
            </div>
          </div>

          {/* Columna Contacto */}
          <div className="footer-col">
            <h3 className="footer-col-title">Desarrollado por</h3>
            <ul className="footer-col-list footer-dev-list">
              <li>
                <img src={asUser} alt="AsUser" />
                <span>AsUser - Software Engineering</span>
              </li>
              <li>
                <img src={iconWeb} alt="Web" />
                <span>Conócenos</span>
              </li>
              <li>
                <img src={wp} alt="WhatsApp" />
                <span>+54 9 3543 313903</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Movimientos del Alma. Todos los derechos reservados.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
