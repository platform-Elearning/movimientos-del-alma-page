import React from 'react';
import './Footer.css';
import whatsappIcon from "../../assets/whatsappIcon.png";
import igIcon from "../../assets/igIcon.png";
import locationIcon from "../../assets/locationIcon.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3 className="footer-title gradient-underline">Movimientos del Alma - Casa Central - Río Ceballos</h3>
        <p className="footer-info">
          <img src={igIcon} alt="Instagram Icon" className="footer-icon" /> @movimientos_del_alma
        </p>
        <p className="footer-info">
          <img src={whatsappIcon} alt="WhatsApp Icon" className="footer-icon" /> +54 9 351 46-8819
        </p>
        <p className="footer-info">
          <img src={locationIcon} alt="Location Icon" className="footer-icon" /> Almirante Brown 72 Río Ceballos Córdoba
        </p>
      </div>

      <div className="footer-section">
        <h3 className="footer-title gradient-underline">Movimientos del Alma - La Calera</h3>
        <p className="footer-info">
          <img src={igIcon} alt="Instagram Icon" className="footer-icon" /> @mda.calera
        </p>
        <p className="footer-info">
          <img src={whatsappIcon} alt="WhatsApp Icon" className="footer-icon" /> +54 9 351 766-4275
        </p>
        <p className="footer-info">
          <img src={locationIcon} alt="Location Icon" className="footer-icon" /> Jorge Luis Borges 662, La Calera, Córdoba
        </p>
      </div>
    </footer>
  );
};

export default Footer;
