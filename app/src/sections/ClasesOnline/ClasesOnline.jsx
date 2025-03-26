import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../sections/footer/footer";
import { Link } from "react-router-dom";
import "./ClasesOnline.css";

import Clasico from "../../assets/ClasesPresenciales/Clasico.png";
import Jazz from "../../assets/ClasesPresenciales/JazzClase.png";
import danzaContemporanea from "../../assets/danzaContemporanea.png";
import timeIcon from "../../assets/timeIcon.png";
import user from "../../assets/User.png";
import wpWhite from "../../assets/wpWhite.png";

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
      nivel: "Infantil, Teens y Avanzado.",
      horarios: [
        "Mar. 18:00hs a 19:30hs - 19:30hs a 21:00hs.",
        "Jue. 18:00hs a 19:30hs - 19:30hs a 21:00hs.",
      ],
    },
    {
      id: 2,
      nombre: "Jazz",
      imagen: Clasico,
      nivel: "Infantil, Teens y Juvenil.",
      horarios: [
        "Lun. 17:00hs - 19:00hs - 19:00hs a 21:00hs.",
        "Mar. 19:30hs a 21:00hs.",
        "Jue. 19:30hs a 21:00hs.",
      ],
    },
    {
      id: 3,
      nombre: "Danza Contemporánea",
      imagen: danzaContemporanea,
      nivel: "Teens y Juvenil.",
      horarios: ["Vie. 19:00hs a 21:00hs."],
    },
  ],
  "instructorado": [],
  "diplomatura": [],
  "formacion": [],
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

        <div className="clases-list">
          {clasesOnline[formacionSeleccionada] && clasesOnline[formacionSeleccionada].length > 0 ? (
            clasesOnline[formacionSeleccionada].map((clase) => (
              <div key={clase.id} className="clase-card">
                <img src={clase.imagen} alt={clase.nombre} className="clase-img" />
                <h3>{clase.nombre}</h3>

                <div className="nivel-container">
                  <img src={user} alt="Icono Usuario" className="icon" />
                  <p>{clase.nivel}</p>
                </div>

                <div className="horarios-container">
                  <img src={timeIcon} alt="Icono Tiempo" className="icon" />
                  <h4>Horarios:</h4>
                </div>

                <ul className="horarios-list">
                  {clase.horarios.map((horario, idx) => (
                    <li key={idx}>{horario}</li>
                  ))}
                </ul>

                <button className="info2-button">
                  <img src={wpWhite} alt="WhatsApp" className="whatsapp-icon" /> Más Información
                </button>
              </div>
            ))
          ) : (
            <p className="no-classes">No hay clases disponibles en esta formación.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClasesOnline;
