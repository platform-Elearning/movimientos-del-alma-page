import React, { useState } from "react";
import "./videoSection.css"; // Importa estilos

const VideoSection = ({ title, imageSrc, videoSrc }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsVideoPlaying(true); // Mostrar el video cuando se hace clic
  };

  return (
    <div className="video-section">
      <h1 className="video-section-title">{title}</h1>
      <div className="video-section-content">
        {/* Imagen */}
        <img src={imageSrc} alt="Dance" className="video-section-image" />
        {/* Placeholder del video */}
        <div className="video-placeholder">
          {!isVideoPlaying ? (
            <button
              className="video-play-button"
              onClick={handlePlayClick} // Reproducir video al hacer clic
            >
              ▶
            </button>
          ) : (
            <iframe
              className="video-player"
              src={`${videoSrc}?autoplay=1`}
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
