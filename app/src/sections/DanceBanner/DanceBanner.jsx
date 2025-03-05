import React from "react";
import "./DanceBanner.css";
import DanceBannerImg from '../../assets/danceBannerImg.png'; // Reemplázalo por la imagen correcta

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
            Creamos un ambiente familiar y cercano donde la creatividad y el respeto son clave. Con clases presenciales y online para todas las edades y niveles, te ofrecemos una formación artística de calidad para que alcances tu máximo potencial.
          </p>
          <div className="dance-buttons">
            <button className="dance-button">
              🏫 Ver Clases Presenciales
            </button>
            <button className="dance-button">
              💻 Ver Formaciones Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DanceBanner;