import React from "react";
import "./WhatsAppCourseButton.css";
import wppIcon from "../../assets/wpp.png"; // Usando el ícono local de WhatsApp

const WhatsAppCourseButton = ({ courseName, courseType = "formación" }) => {
  const phoneNumber = "+5493513468819"; // Número de la academia
  
  // Función para generar el mensaje personalizado según el curso
  const generateMessage = (courseName, courseType) => {
    return `¡Hola Movimientos del Alma! Estoy interesado/a en la ${courseType} de ${courseName}. ¿Podrían brindarme más información sobre esta formación?`;
  };

  const message = generateMessage(courseName, courseType);

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-course-button"
      aria-label={`Consultar sobre ${courseName} por WhatsApp`}
    >
      <img
        src={wppIcon}
        alt="WhatsApp"
        className="whatsapp-course-icon"
      />
      Consultar por WhatsApp
    </a>
  );
};

export default WhatsAppCourseButton;