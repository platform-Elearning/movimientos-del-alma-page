import React from "react";
import "./WhatsAppCourseButton.css";
import wppIcon from "../../assets/wpp.png";

const WhatsAppCourseButton = ({ courseName, courseType = "formación" }) => {
  const phoneNumber = "+5493513592115";

  const generateMessage = (courseName, courseType) => {
    return `¡Hola Movimientos del Alma! Estoy interesado/a en la ${courseType} de ${courseName}. ¿Podrían brindarme más información sobre esta formación?`;
  };

  const message = generateMessage(courseName, courseType);

  const handleCourseWhatsAppClick = () => {
    // Enviar evento a GTM con información del curso
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "whatsapp_course_click",
        event_category: "engagement",
        event_label: `consulta_${courseName
          .toLowerCase()
          .replace(/\s+/g, "_")}`,
        course_name: courseName,
        course_type: courseType,
        event_value: 1,
      });
    }
    // Abrir WhatsApp después de 100ms
    setTimeout(() => {
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }, 100);
  };

  return (
    <button
      onClick={handleCourseWhatsAppClick}
      className="whatsapp-course-button"
      aria-label={`Consultar sobre ${courseName} por WhatsApp`}
    >
      <img src={wppIcon} alt="WhatsApp" className="whatsapp-course-icon" />
      Consultar por WhatsApp
    </button>
  );
};

export default WhatsAppCourseButton;
