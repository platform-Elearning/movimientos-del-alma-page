import React from "react";
import "./ButtonVacio.css";

const ButtonVacio = ({ text, icon }) => {
  return (
    <button className="button-vacio">
      {icon && <img src={icon} alt="Ícono" className="button-icon" />} {/* Muestra el ícono si se pasa */}
      {text}
    </button>
  );
};

export default ButtonVacio;
