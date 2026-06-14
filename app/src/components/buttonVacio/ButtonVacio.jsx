import React from "react";
import "./ButtonVacio.css";
import '../button/Button.css'

const ButtonVacio = ({ text, icon, to }) => {
  const buttonContent = (
    <>
      {icon && <img src={icon} alt="Ícono" className="button-icon" />}
      {text}
    </>
  );

  if (to) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className="button">
        {buttonContent}
      </a>
    );
  }

  return (
    <button className="button">
      {buttonContent}
    </button>
  );
};

export default ButtonVacio;
