import React from 'react';
import './videoSection.css';  // Importamos el archivo CSS
import ButtonVacio from '../../components/buttonVacio/ButtonVacio';
const VideoSection = () => {
  return (
    <div className="video-section">
      <h1 className="title1">Movimientos que inspiran</h1>
      <div className="video-box"></div>
      <ButtonVacio text="Descubre sus experiencias" />
    </div>
  );
};

export default VideoSection;
