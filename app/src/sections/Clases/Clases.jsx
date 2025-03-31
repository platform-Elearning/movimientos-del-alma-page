import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../sections/footer/footer";
import { Link } from "react-router-dom";
import "./Clases.css";

import Clasico from "../../assets/ClasesPresenciales/Clasico.png";
import Jazz from "../../assets/ClasesPresenciales/JazzClase.png";
import HipHop from "../../assets/ClasesPresenciales/ClaseHipHop.png";
import DanceMoms from "../../assets/ClasesPresenciales/DanceMoms.png";
import Yoga from "../../assets/ClasesPresenciales/Yoga.png";
import Iniciacion from "../../assets/ClasesPresenciales/IniciacionDanza.png";
import Acrobacia from "../../assets/ClasesPresenciales/Acrobacia.png";
import BioDanza from "../../assets/ClasesPresenciales/BioDanza.png";
import DanzaTerapia from "../../assets/ClasesPresenciales/DanzaTerapia.png";
import timeIcon from "../../assets/timeIcon.png";
import user from "../../assets/user.png";
import wpWhite from "../../assets/wpWhite.png";

const sedes = [
  { id: "rio-ceballos", name: "Casa Central Río Ceballos" },
  { id: "calera", name: "Sede La Calera" },
  { id: "talar", name: "Sede El Talar" },
];

const clases = {
  "rio-ceballos": [
    {
      id: 1,
      nombre: "Clásico",
      imagen: Clasico,
      nivel: "Infantil, Teens y Avanzado.",
      horarios: [
        "Mar. 18:00hs a 19:30hs - 19:30hs a 21:00hs.",
        "Jue. 18:00hs a 19:30hs - 19:30hs a 21:00hs.",
      ],
    },
    {
      id: 2,
      nombre: "Jazz",
      imagen: Jazz,
      nivel: "Infantil, Teens y Juvenil.",
      horarios: [
        "Lun. 17:00hs - 19:00hs - 19:00hs a 21:00hs.",
        "Mar. 19:30hs a 21:00hs.",
        "Jue. 19:30hs a 21:00hs.",
      ],
    },
    {
      id: 3,
      nombre: "Hip Hop",
      imagen: HipHop,
      nivel: "Teens y Juvenil.",
      horarios: [
        "Vie. 19:00hs a 21:00hs."
      ],
    },
    {
      id: 4,
      nombre: "Dance Moms",
      imagen: DanceMoms,
      nivel: "Juvenil y Adultos.",
      horarios: [
        "Mar. 18:00hs a 19:00hs.",
        "Jue. 18:00hs a 19:00hs."
      ],
    },
    {
      id: 5,
      nombre: "Yoga",
      imagen: Yoga,
      nivel: "Juvenil y Adultos.",
      horarios: [
        "Lun. 09:00hs a 10:30hs.",
        "Mar. 14:30hs a 16:00hs.",
        "Mie. 09:30hs a 11:00hs.",
        "Jue. 09:00hs a 10:30hs - 14:30hs a 16:00hs.",
        "Vie. 09:30hs a 11:00hs."
      ],
    },
    {
      id: 6,
      nombre: "Iniciación a la Danza",
      imagen: Iniciacion,
      nivel: "Infantil, Teens, Juvenil y Adultos.",
      horarios: [
        "Lun. 18:00hs a 19:00hs.",
        "Mar. 18:00hs a 19:00hs.",
        "Mie. 18:00hs a 19:00hs.",
        "Vie. 18:00hs a 19:00hs."
      ],
    },
    {
      id: 7,
      nombre: "Acrobacia",
      imagen: Acrobacia,
      nivel: "Infantil y Juvenil.",
      horarios: [
        "Mar. 17:00hs a 18:30hs.",
        "Jue. 17:00hs a 18:30hs."
      ],
    },
    {
      id: 8,
      nombre: "Bio Danza",
      imagen: BioDanza,
      nivel: "Adultos.",
      horarios: [
        "Lun. 19:30hs a 21:00hs.",
        "Vie. 19:30hs a 21:00hs."
      ],
    },
    {
      id: 9,
      nombre: "Danza Terapia",
      imagen: DanzaTerapia,
      nivel: "Adultos y Tercera Edad.",
      horarios: [
        "Mie. 10:00hs a 11:30hs.",
        "Jue. 18:30hs a 20:00hs."
      ],
    }
  ],
  "calera": [],
  "talar": [],
};

const Clases = () => {
  const [sedeSeleccionada, setSedeSeleccionada] = useState("rio-ceballos");

  return (
    <div className="page-container">
      <Navbar />
      <div className="clases-container">
        <Link to="/" className="back-button">&larr; Volver a inicio</Link>
        <h1 className="title">Clases Presenciales</h1>
        <p className="description">
          Los alumnos que toman clases en nuestra academia tienen la posibilidad de completar su formación y obtener su título correspondiente.
        </p>
        
        <div className="tabs">
          {sedes.map((sede) => (
            <button
              key={sede.id}
              className={sedeSeleccionada === sede.id ? "tab active" : "tab"}
              onClick={() => setSedeSeleccionada(sede.id)}
            >
              {sede.name}
            </button>
          ))}
        </div>
        
        <div className="clases-list">
          {clases[sedeSeleccionada].map((clase, index) => (
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
                
                <button 
                  className="info2-button"
                  onClick={() => {
                    const mensaje = `Hola, estoy interesado/a en la clase de ${clase.nombre}. ¿Podrían brindarme más información?`;
                    const url = `https://wa.me/5493513468819?text=${encodeURIComponent(mensaje)}`;
                    window.open(url, "_blank");
                  }}
                >
                  <img src={wpWhite} alt="WhatsApp" className="whatsapp-icon" /> Más Información
                </button>
                  </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Clases;
