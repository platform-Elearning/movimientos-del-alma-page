import React from "react";
import "./VideoTestimonialCard.css";

const VideoTestimonialCard = ({ videoId, personName, role, onClick }) => {
  // Generar thumbnail de YouTube
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="video-testimonial-card" onClick={onClick}>
      <div className="video-thumbnail-container">
        <img
          src={thumbnailUrl}
          alt={personName || "Testimonio"}
          className="video-thumbnail"
        />
        <div className="play-button-overlay">
          <div className="play-button">▶</div>
        </div>
      </div>
      {(personName || role) && (
        <div className="video-card-info">
          {personName && <h3 className="video-card-name">{personName}</h3>}
          {role && <p className="video-card-role">{role}</p>}
        </div>
      )}
    </div>
  );
};

export default VideoTestimonialCard;
