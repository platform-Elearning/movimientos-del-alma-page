import React from 'react';
import './videoSection.css';  // Importamos el archivo CSS
import ButtonVacio from '../../components/buttonVacio/ButtonVacio';

const VideoSection = () => {
  return (
    <div className="video-section">
      <h1 className="title1">Movimientos que inspiran</h1>
      <div className="video-box">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/VMnv87Gv02o?si=rNcqcvtTMVzETYiI" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
      <ButtonVacio text="Descubre sus experiencias" />
    </div>
  );
};

export default VideoSection;