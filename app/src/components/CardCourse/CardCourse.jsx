import React, { useState } from 'react';
import './CardCourse.css';
import Button from '../button/Button';
import ButtonVacio from '../buttonVacio/ButtonVacio';
import WhatsAppCourseButton from '../whatsappButton/WhatsAppCourseButton';
import liveImage from '../../assets/live.png';
import book from '../../assets/book.png';
import person from '../../assets/person.png';
import video from '../../assets/video.png';

const CardCourse = ({
  imageSrc,
  title,
  duration,
  modality,
  description,
  modules,
  recordedClasses,
  liveClasses,
  personalizedAdvice,
  courseType = "formación", // Nuevo prop para el tipo de curso
}) => {
  // Estado para controlar si la tarjeta está volteada
  const [isFlipped, setIsFlipped] = useState(false);

  // Alternar el estado de volteo
  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="card-course" onClick={toggleFlip}>
      <div className={`card-course-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Lado Frontal */}
        <div className="card-course-front">
          <img src={imageSrc} alt={title} className="card-course-image" />
          <h3 className="card-course-title">{title}</h3>
          <p className="card-course-duration">
            <img src={video} alt="Duration" className="card-course-icon" /> {duration}
          </p>
          <p className="card-course-modality">
            <img src={liveImage} alt="Modality" className="card-course-icon" /> {modality}
          </p>
          <div className="buttonDiv">
            <Button text="Leer más" />
          </div>
        </div>

        {/* Lado Trasero */}
        <div className="card-course-back">
          <p className="card-course-description">{description}</p>
          <ul className="card-course-details">
            <li>
              <img src={book} alt="Modules" className="card-course-icon" /> {modules} módulos.
            </li>
            <li>
              <img src={video} alt="Recorded Classes" className="card-course-icon" /> {recordedClasses} clases grabadas al mes.
            </li>
            <li>
              <img src={liveImage} alt="Live Classes" className="card-course-icon" /> {liveClasses} clase en vivo al mes.
            </li>
            <li>
              <img src={person} alt="Personalized Advice" className="card-course-icon" /> {personalizedAdvice}
            </li>
          </ul>
          <div className="card-course-buttons">
            <Button text="Inscribirme" />
            <ButtonVacio text="Descargar info" />
            <WhatsAppCourseButton courseName={title} courseType={courseType} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
