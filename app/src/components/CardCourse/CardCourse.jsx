import React, { useState } from 'react';
import './CardCourse.css';
import Button from '../button/Button';

const CardCourse = ({
  imageSrc,
  title,
  duration,
  modality,
  description,
  buttonText,
  modules,
  recordedClasses,
  liveClasses,
  personalizedAdvice,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className={`card-course ${isFlipped ? 'flipped' : ''}`}>
      <div className="card-course-inner">
        {/* Lado Frontal */}
        <div className="card-course-front">
          <img src={imageSrc} alt={title} className="card-course-image" />
          <h3 className="card-course-title">{title}</h3>
          <p className="card-course-duration">⏰ {duration}</p>
          <p className="card-course-modality">💻 {modality}</p>
          <Button text="Más información" onClick={handleFlip} />
        </div>

        {/* Lado Trasero */}
        <div className="card-course-back">
          <p className="card-course-description">{description}</p>
          <ul className="card-course-details">
            <li>📚 {modules} módulos.</li>
            <li>🎥 {recordedClasses} clases grabadas al mes.</li>
            <li>🖥️ {liveClasses} clase en vivo al mes.</li>
            <li>👨‍🏫 {personalizedAdvice}</li>
          </ul>
          <Button text="Volver" onClick={handleFlip} />
          <Button text="Inscribirme" onClick={handleFlip} />


        </div>
      </div>
    </div>
  );
};

export default CardCourse;
