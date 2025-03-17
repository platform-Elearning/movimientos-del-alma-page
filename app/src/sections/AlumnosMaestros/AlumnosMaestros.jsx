 import React from "react";
import "./AlumnosMaestros.css";

const AlumnosMaestros = () => {
  return (
    <div className="alumnos-maestros-container">
      <h2 className="alumnos-maestros-title">
        <span >De Alumnos a </span>
        <span >Maestros</span>
      </h2>
      <div className="alumnos-maestros-card">
      <iframe
  width="80%"
  height="80%"
  src="https://www.youtube.com/embed/9JesM3x4rRk"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

      </div>
    </div>
  );
};

export default AlumnosMaestros;
