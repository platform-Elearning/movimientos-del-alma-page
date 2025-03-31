import React from "react";
import "./whatsAppButton.css"; // Archivo para los estilos

const WhatsAppButton = () => {
  const phoneNumber = "+5493513468819"; // Número de la academia
  const message = "¡Hola Movimientos del Alma! Estoy interesado/a en sus clases y formaciones. ¿Podrían brindarme más información?"; // Mensaje personalizado

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button dance-academy"
      aria-label="Contactar a Movimientos del Alma por WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp Movimientos del Alma"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;