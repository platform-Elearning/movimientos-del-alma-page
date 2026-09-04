import React from 'react';
import './BackgroundVideo.css';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

const VirtualClassPromo = () => {
  const videoId = "yDfPthJS6Dk";
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1`;

  return (
    <div className="promo-section-container">
      {/* Columna Izquierda: Texto de promoción */}
      <div className="promo-text-column">
        <h2 className="promo-title">Descubre nuestras formaciones online</h2>
        <p className="promo-description">
          Accede a clases exclusivas, material de estudio actualizado y aprende a tu propio ritmo desde cualquier dispositivo. ¡Lleva tus conocimientos al siguiente nivel!
        </p>
          <Link to="/ClasesOnline" >
          <Button text='Consultar'></Button>
          </Link>
      </div>

      {/* Columna Derecha: Video con controles */}
      <div className="promo-video-column">
        <iframe
          src={youtubeUrl}
          title="Promoción Aula Virtual"
          className="promo-iframe"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
};

export default VirtualClassPromo;