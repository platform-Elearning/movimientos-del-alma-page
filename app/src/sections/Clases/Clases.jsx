import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../sections/footer/footer";
import { Link } from "react-router-dom";
import "./Clases.css";

/* HORARIOS EN IMAGEN */
import horariosRio1 from "../../assets/Horarios-RioCeballos1.png"
import horariosCalera from "../../assets/Horarios-LaCalera.png"
import horariosTalar from "../../assets/Horarios-ElTalar.png"


const sedes = [
  { id: "rio-ceballos", name: "Casa Central Río Ceballos" },
  { id: "calera", name: "Sede La Calera" },
  { id: "talar", name: "Sede El Talar" },
];

const Clases = () => {
  const [sedeSeleccionada, setSedeSeleccionada] = useState("rio-ceballos");

  const imagenesHorarios = {
            "rio-ceballos" : [horariosRio1],
            "calera" : [horariosCalera],
            "talar" : [horariosTalar],
          }
  
  const datosSedes = {
            "rio-ceballos" : ["Casa Central", "Almirante Brown 72, Río Ceballos", "+54 9 351 3468819"],
            "calera" : ["Sede La Calera", "Jorge Luis Borges 662, La Calera", "+54 9 3517 664275"],
            "talar" : ["Sede El Talar", "Las Zinninas 209, El Talar", "+54 9 351 356 9967"],
          }

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
        
        <div className="class-schedules">

          <h1>Horarios 2025</h1>
          <div className="horarios">
            {imagenesHorarios[sedeSeleccionada].map((imgSrc, index)=> (
              <img
              key={index}
              src={imgSrc} 
              alt={`Horarios ${sedes.find(s => s.id === sedeSeleccionada).name}`} 
              className="horario-img"
              />
            ))}
          </div>
          
          <div className="datos-sede">
            <p className="datos-sede-seleccionada">{datosSedes[sedeSeleccionada][0]}</p>
            <p>{datosSedes[sedeSeleccionada][1]}</p>
            <p>{datosSedes[sedeSeleccionada][2]}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Clases;
