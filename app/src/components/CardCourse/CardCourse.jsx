// components/CardCourse/CardCourse.jsx
import React, { useState } from 'react';
import './CardCourse.css';

const CardCourse = ({ imageSrc, title, duration, modality, description, buttonText, onButtonClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className={`card-course ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card-course-inner">
        {/* Front Side */}
        <div className="card-course-front">
          <img src={imageSrc} alt={title} className="card-course-image" />
          <h3 className="card-course-title">{title}</h3>
          <p className="card-course-duration">{duration}</p>
          <p className="card-course-modality">{modality}</p>
        </div>

        {/* Back Side */}
        <div className="card-course-back">
          <p className="card-course-description">{description}</p>
          <button className="card-course-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
