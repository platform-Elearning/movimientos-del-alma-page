import React from 'react';
import './FloatingButton.css';
import whatsappIcon2 from '../../assets/whatsappIcon2.png'; // Cambia esto al ícono que prefieras

const FloatingButton = ({ onClick }) => {
  return (
    <button className="floating-button" onClick={onClick}>
      <img src={whatsappIcon2} alt="Chat Icon" className="button-icon" />
    </button>
  );
};

export default FloatingButton;
