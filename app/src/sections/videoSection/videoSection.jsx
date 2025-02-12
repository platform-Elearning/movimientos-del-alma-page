import React from 'react';
import './VideoSection.css';  // Importamos el archivo CSS
import ButtonVacio from '../../components/buttonVacio/ButtonVacio';
const VideoSection = () => {
  return (
    <div className="video-section">
      <h1 className="title">Movimientos que inspiran</h1>
      <div className="video-box"></div>
      <ButtonVacio text="Haz clic aquí" />
    </div>
  );
};

export default VideoSection;
