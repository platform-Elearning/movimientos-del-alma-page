import React from 'react';
import Button from '../button/Button'; // Asegúrate de que la ruta sea correcta
import './CardCourse.css';

const CardCourse = ({ imageSrc, title, duration, modality, buttonText, onButtonClick }) => {
  return (
    <div className="card-course">
      <img src={imageSrc} alt={title} className="card-course-img" />
      <div className="card-course-info">
        <h2 className="card-course-title">{title}</h2>
        <div className="card-course-details">
          <p className="card-course-detail">
            <span className="icon">🕒</span> {duration}
          </p>
          <p className="card-course-detail">
            <span className="icon">💻</span> {modality}
          </p>
        </div>
        {/* Usando el componente Button */}
        <Button text={buttonText} onClick={onButtonClick} />
      </div>
    </div>
  );
};

export default CardCourse;
