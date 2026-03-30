import React from 'react';
import './videoSection.css';  // Importamos el archivo CSS
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';

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
      <div className='btnExp' >
        <Link  to="/info-jime" >
      <Button text="Descubre sus experiencias"  />
        </Link>

      </div>
    </div>
  );
};

export default VideoSection;