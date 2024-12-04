// CardCourse.jsx
import React from 'react';
import Button from '../button/Button'; // Asegúrate de que la ruta sea correcta
import './CardCourse.css'; // Para tus estilos específicos de CardCourse

const CardCourse = ({ imageSrc, title, duration, modality, buttonText, onButtonClick }) => {
  return (
    <div className="card-course">
      <img src={imageSrc} alt={title} className="card-course-img" />
      <div className="card-course-info">
        <h2 className="card-course-title">{title}</h2>
        <p className="card-course-duration">Duración: {duration}</p>
        <p className="card-course-modality">Modalidad: {modality}</p>
        {/* Aquí se pasa el texto y la función onClick como props al componente Button */}
        <Button text={buttonText} onClick={onButtonClick} />
      </div>
    </div>
  );
};

export default CardCourse;
