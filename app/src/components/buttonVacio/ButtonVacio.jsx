import React from 'react';
import './ButtonVacio.css'; // Asegúrate de tener el archivo CSS para los estilos

const ButtonVacio = ({ text }) => {
  return (
    <button className="button-vacio">
      {text}
    </button>
  );
};


export default ButtonVacio;
