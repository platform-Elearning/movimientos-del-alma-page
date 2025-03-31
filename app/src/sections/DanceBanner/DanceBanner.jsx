import React from "react";
import { Link } from "react-router-dom"; // Importa Link de React Router
import "./DanceBanner.css";
import DanceBannerImg from '../../assets/danceBannerImg.png'; // Imagen principal del banner
import presencialIcono from '../../assets/iconopresencial.png'; // Icono para clases presenciales
import onlineIcono from '../../assets/iconoonline.png'; // Icono para formaciones online

const DanceBanner = () => {
  return (
    <div className="dance-banner">
      <h2>Desarrolla tu pasión por la danza con nuestras</h2>
      <div className="dance-banner-container">
        <div className="dance-banner-image">
          <img src={DanceBannerImg} alt="Clases de danza" className="dance-img" />
        </div>
        <div className="dance-banner-content">
          <h1>Clases presenciales y Formaciones Online</h1>
          <p>
            Creamos un ambiente familiar y cercano donde la creatividad y el respeto son clave. 
            Con clases presenciales y online para todas las edades y niveles, te ofrecemos una 
            formación artística de calidad para que alcances tu máximo potencial.
          </p>
          <div className="dance-buttons">
            {/* Botón para Clases Presenciales */}
            <Link to="/clases" className="dance-button">
              <img src={presencialIcono} alt="Presencial" className="button-icon" /> 
              Ver Clases Presenciales
            </Link>

            {/* Botón para Formaciones Online */}
            <Link to="/clasesOnline" className="dance-button">
              <img src={onlineIcono} alt="Online" className="button-icon" /> 
              Ver Formaciones Online
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DanceBanner;