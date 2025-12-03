import React from "react";
import "./ShortTestimonialCard.css";

const ShortTestimonialCard = ({ videoId, label, onClick }) => {
  // Generar thumbnail de YouTube
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="short-testimonial-card" onClick={onClick}>
      <div className="short-thumbnail-container">
        <img
          src={thumbnailUrl}
          alt={label || "Testimonio"}
          className="short-thumbnail"
        />
        <div className="short-play-overlay">
          <div className="short-play-button">▶</div>
        </div>
      </div>
      {label && (
        <div className="short-card-label">
          <p>{label}</p>
        </div>
      )}
    </div>
  );
};

export default ShortTestimonialCard;
