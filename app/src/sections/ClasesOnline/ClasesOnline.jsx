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
  { id: "formacion", name: "Formación" },
];

const clasesOnline = {
  "profesorado": [
    {
      id: 1,
      nombre: "Danza Jazz",
      imagen: Jazz,
      nivel: "Acceso completo y flexible.",
      detalles: [
        "Contenido teórico y práctico.",
        "Clases grabadas.",
        "Pedagogía y práctica docente.",
      ],
      pdf: jazz,
    },
    {
      id: 2,
      nombre: "Danza Clásica",
      imagen: Clasico,
      nivel: "Acceso completo y flexible.",
      detalles: [
        "Contenido teórico y práctico.",
        "Clases grabadas.",
        "Pedagogía y práctica docente.",
      ],
      pdf: clasicaNuevaModalidad,
    },
    {
      id: 3,
      nombre: "Danza Contemporánea",
      imagen: danzaContemporanea,
      nivel: "Acceso completo y flexible.",
      detalles: [
        "Contenido teórico y práctico.",
        "Clases grabadas.",
        "Pedagogía y práctica docente.",
      ],
      pdf: contemporanea,
    },
  ],
  "instructorado": [
    {
      id: 1,
      nombre: "Matriz Afro",
      imagen: matriz,
      nivel: "4 meses de duración.",
      detalles: [
        "Contenido teórico y práctico.",
        "Clases grabadas y en vivo.",
      ],
      pdf: danzaMatrizAfro,
    },
    {
      id: 2,
      nombre: "Ritmos Latinos",
      imagen: ritmosLatinos,
      nivel: "3 meses de duración.",
      detalles: [
        "Contenido teórico y práctico.",
        "Clases grabadas y en vivo.",
      ],
      pdf: ritmosCaribenos,
    },
    {
      id: 3,
      nombre: "Pilates",
      imagen: pilates,
      nivel: "12 meses de duración.",
      detalles: [
        "Contenido teórico y práctico.",
        "Clases grabadas y en vivo.",
      ],
      pdf: pilatesPDF,
    },
    {
      id: 4,
      nombre: "Flexibilidad & ADM",
      imagen: flexibilidad,
      nivel: "4 módulos.",
      detalles: [
        "Contenido teórico y práctico.",
        "Clases online.",
      ],
      pdf: instructoradoFlexibilidad,
    },
  ],
  "diplomatura": [
    {
      id: 1,
      nombre: "Técnica de la Danza Clásica",
      imagen: Clasico,
      nivel: "Acceso completo y flexible.",
      detalles: [
        "Contenido teórico y práctico.",
        "Clases grabadas.",
        "Pedagogía y práctica docente.",
      ],
      pdf: diploClasica,
    },
    {
      id: 2,
      nombre: "Composición Coreográfica",
      imagen: composicion,
      nivel: "Acceso completo y flexible.",
      detalles: [
        "Contenido teórico y práctico.",
        "Clases grabadas.",
        "Pedagogía y práctica docente.",
      ],
      pdf: composicionPDF,
    },
  ],
  "formacion": [
    {
      id: 1,
      nombre: "Danza Terapia Transpersonal",
      imagen: transpersonal,
      nivel: "12 meses de duración.",
      detalles: [
        "Contenido teórico y práctico.",
        "Clases grabadas y en vivo.",
      ],
      pdf: formacionDanzaTranspersonal,
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

                <div className="nivel-container">
                  <img src={iconoReloj} alt="Icono Reloj" className="icon" />
                  <p>{clase.nivel}</p>
                </div>

                <ul className="detalles-list">
                  {clase.detalles?.map((detalle, idx) => {
                    
                    // condicional para asignar el icono segun la posicion
                    let icono;
                    if (idx === 0) icono = iconoLibro
                    else if (idx === 1) icono = iconoClaseTv
                    else if (idx === 2) icono = iconoPersona
                    else icono = iconoPersona; // por defecto

                    return(
                      <li key={idx} className="detalle-item">
                      <img
                        src={icono}
                        alt="Icono detalle"
                        className="detalle-icon"
                      />
                      {detalle}
                      </li>
                    )
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
