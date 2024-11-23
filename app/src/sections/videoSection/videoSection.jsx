import React from "react";
import "./videoSection.css"; // Importa estilos

const VideoSection = ({ title, imageSrc, videoSrc }) => {
  return (
    <div className="video-section">
      <h1 className="video-section-title">{title}</h1>
      <div className="video-section-content">
        {/* Imagen */}
        <img src={imageSrc} alt="Dance" className="video-section-image" />
        {/* Placeholder del video */}
        <div className="video-placeholder">
          <button
            className="video-play-button"
            onClick={() => window.open(videoSrc, "_blank")} // Abre el video
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
