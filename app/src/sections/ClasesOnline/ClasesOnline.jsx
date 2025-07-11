import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../sections/footer/footer";
import { Link } from "react-router-dom";
import "./ClasesOnline.css";

import Clasico from "../../assets/ClasesPresenciales/Clasico.png";
import Jazz from "../../assets/ClasesPresenciales/JazzClase.png";
import danzaContemporanea from "../../assets/danzaContemporanea.png";
import matriz from "../../assets/matrizAfro.png";
import transpersonal from "../../assets/transpersonal.png";
import composicion from "../../assets/composicion.png";
import ritmosLatinos from "../../assets/ritmosLatinos.png";
import flexibilidad from "../../assets/flexibilidad.png";
import pilates from "../../assets/pilates.png";
import clasicaNuevaModalidad from "../../assets/pdf/clasica-Nueva-Modalidad.pdf";
import composicionPDF from "../../assets/pdf/COMPOSICIÓN.pdf";
import contemporanea from "../../assets/pdf/contemporanea.pdf";
import danzaMatrizAfro from "../../assets/pdf/danza-matriz-afro.pdf";
import diploClasica from "../../assets/pdf/diplo-CLASICA.pdf";
import formacionDanzaTranspersonal from "../../assets/pdf/formacion-en-danza-transpersonal.pdf";
import instructoradoFlexibilidad from "../../assets/pdf/instructorado-Flexibilidad-y-Amplitud-de-movimiento.pdf";
import jazz from "../../assets/pdf/jazz.pdf";
import ritmosCaribenos from "../../assets/pdf/ritmos-caribeños-nueva modalidad.pdf";
import pilatesPDF from "../../assets/pdf/Instructorado-Pilates.pdf";

// ICONOS
import iconoPersona from "../../assets/User.png"; // Importación del ícono de persona
import iconoReloj from "../../assets/reloj.png"; // Importación del ícono de reloj
import iconoLibro from "../../assets/libro.png"; // Importación del ícono de libro
import iconoClaseTv from "../../assets/claseGrabada.png"; // Importación del ícono de clase grabada

const formaciones = [
  { id: "profesorado", name: "Profesorado" },
  { id: "instructorado", name: "Instructorados" },
  { id: "diplomatura", name: "Diplomaturas" },
];

const clasesOnline = {
  "profesorado": [
    {
      id: 1,
      nombre: "Danza Jazz",
      imagen: Jazz,
      detalles: {
        tiempo: "Acceso completo y flexible.",
        contenido: "Contenido teórico y práctico.",
        modalidad: "Clases grabadas.",
        pedagogia: "Pedagogía y práctica docente.",
      },
      pdf: jazz,
    },
    {
      id: 2,
      nombre: "Danza Clásica",
      imagen: Clasico,
      detalles: {
        tiempo: "Acceso completo y flexible.",
        contenido: "Contenido teórico y práctico.",
        modalidad: "Clases grabadas.",
        pedagogia: "Pedagogía y práctica docente.",
      },
      pdf: clasicaNuevaModalidad,
    },
    {
      id: 3,
      nombre: "Danza Contemporánea",
      imagen: danzaContemporanea,
      detalles: {
        tiempo: "Acceso completo y flexible.",
        contenido: "Contenido teórico y práctico.",
        modalidad: "Clases grabadas.",
        pedagogia: "Pedagogía y práctica docente.",
      },
      pdf: contemporanea,
    },
  ],
  "instructorado": [
    {
      id: 1,
      nombre: "Matriz Afro",
      imagen: matriz,
      detalles: {
        tiempo: "Acceso completo y flexible.",
        contenido: "Contenido teórico y práctico.",
        modalidad: "Clases grabadas y en vivo.",
      },
      pdf: danzaMatrizAfro,
    },
    {
      id: 2,
      nombre: "Ritmos Latinos",
      imagen: ritmosLatinos,
      detalles: {
        tiempo: "Acceso completo y flexible.",
        contenido: "Contenido teórico y práctico.",
        modalidad: "Clases grabadas y en vivo.",
      },
      pdf: ritmosCaribenos,
    },
    {
      id: 3,
      nombre: "Pilates",
      imagen: pilates,
      detalles: {
        tiempo: "12 meses de duración.",
        contenido: "Contenido teórico y práctico.",
        modalidad: "Clases grabadas y en vivo.",
      },
      pdf: pilatesPDF,
    },
    {
      id: 4,
      nombre: "Amplitud de Movimiento",
      imagen: flexibilidad,
      detalles: {
        tiempo: "4 meses.",
        contenido: "Contenido teórico y práctico.",
        modalidad: "Clases online.",
      },
      pdf: instructoradoFlexibilidad,
    },
  ],
  "diplomatura": [
    {
      id: 1,
      nombre: "Técnica de la Danza Clásica",
      imagen: Clasico,
      detalles: {
        tiempo: "Acceso completo y flexible.",
        contenido: "Contenido teórico y práctico.",
        modalidad: "Clases grabadas.",
        pedagogia: "Pedagogía y práctica docente.",
      },
      pdf: diploClasica,
    },
    {
      id: 2,
      nombre: "Composición Coreográfica",
      imagen: composicion,
      detalles: {
        tiempo: "Acceso completo y flexible.",
        contenido: "Contenido teórico y práctico.",
        modalidad: "Clases grabadas.",
        pedagogia: "Pedagogía y práctica docente.",
      },
      pdf: composicionPDF,
    },
  ],
};

const ClasesOnline = () => {
  const [formacionSeleccionada, setFormacionSeleccionada] = useState("profesorado");

  return (
    <div className="page-container">
      <Navbar />
      <div className="clases-container">
        <Link to="/" className="back-button">
          &larr; Volver a inicio
        </Link>
        <h1 className="title">Formaciones Online</h1>
        <p className="description">
          Accede a nuestras formaciones profesionales en modalidad online y obtén tu certificación desde cualquier lugar.
        </p>

        {/* Pestañas para navegar entre categorías */}
        <div className="tabs">
          {formaciones.map((formacion) => (
            <button
              key={formacion.id}
              className={formacionSeleccionada === formacion.id ? "tab active" : "tab"}
              onClick={() => setFormacionSeleccionada(formacion.id)}
            >
              {formacion.name}
            </button>
          ))}
        </div>

        {/* Lista de clases según la categoría seleccionada */}
        <div className="clases-list">
          {clasesOnline[formacionSeleccionada] && clasesOnline[formacionSeleccionada].length > 0 ? (
            clasesOnline[formacionSeleccionada].map((clase) => (
              <div key={clase.id} className="clase-card">
                <img src={clase.imagen} alt={clase.nombre} className="clase-img" />
                <h3>{clase.nombre}</h3>
                  <ul className="detalles-list">
                    {Object.entries(clase.detalles).map(([clave, valor], idx) => {
                      // condicional para asignar el icono según la clave
                      let icono;
                      if (clave === "tiempo") icono = iconoReloj;
                      else if (clave === "contenido") icono = iconoLibro;
                      else if (clave === "modalidad") icono = iconoClaseTv;
                      else if (clave === "pedagogia") icono = iconoPersona;
                      else icono = iconoPersona; // Por defecto

                      return (
                        <li key={idx} className="detalle-item">
                          <img
                            src={icono}
                            alt={`Icono ${clave}`}
                            className="detalle-icon"
                          />
                          {valor}
                        </li>
                      );
                    })}
                  </ul>
                <div className="buttons-container">
                  <a
                    href={clase.pdf}
                    download
                    className="info2-button"
                  >
                    Descargar Información
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="no-classes">No hay formaciones disponibles en esta categoría.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClasesOnline;
