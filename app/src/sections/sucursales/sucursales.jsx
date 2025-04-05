import React, { useState } from "react";
import "./sucursales.css";
import Central from '../../assets/central.png'; // Imagen de Casa Central
import Talar from '../../assets/talar.png'; // Imagen de Sucursal El Talar
import Calera from '../../assets/calera.png'; // Imagen de Sucursal La Calera
import rioHorarios1 from '../../assets/Horarios-RioCeballos1.png'; // Imagen de Sucursal La Calera
import rioHorarios2 from '../../assets/Horarios-RioCeballos2.png'; // Imagen de Sucursal La Calera
import talarHorarios from '../../assets/Horarios-ElTalar.png'; // Imagen de Sucursal La Calera
import caleraHorarios from '../../assets/Horarios-LaCalera.png'; // Imagen de Sucursal La Calera

const sucursalesData = [
  {
    id: 1,
    nombre: "Casa Central",
    encargado: "Jimena De La Fuente",
    direccion: "Almirante Brown 72, Río Ceballos",
    telefono: "+54 9 351 3668819",
    imagen: Central,
    mapa: "https://www.google.com.ar/maps/place/Almte.+Brown+72,+X5111BKB+R%C3%ADo+Ceballos,+C%C3%B3rdoba/@-31.1673959,-64.3251689,17z/data=!3m1!4b1!4m6!3m5!1s0x943281e8ff707b4b:0xbb4ca20ca10ce5ef!8m2!3d-31.1674005!4d-64.322594!16s%2Fg%2F11svhq3xvw?hl=es&entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D",
    imagenesPopup: [ 
      rioHorarios1, // Agregando la primera imagen de horarios
      rioHorarios2, // Agregando la segunda imagen de horarios
    ],
  },
  {
    id: 2,
    nombre: "Sucursal La Calera",
    encargado: "Alejandra Gherardi",
    direccion: "Jorge Luis Borges 662, La Calera",
    telefono: "+54 9 3517 662475",
    imagen: Calera,
    mapa: "https://www.google.com.ar/maps/place/Jorge+Luis+Borges+662,+X5151+La+Calera,+C%C3%B3rdoba/@-31.3633711,-64.3459262,17z/data=!3m1!4b1!4m6!3m5!1s0x942d61f8d24f1167:0xf0f45e7d55c2a3e!8m2!3d-31.3633757!4d-64.3433513!16s%2Fg%2F11vcbmltxy?hl=es&entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D",
    imagenesPopup: [
      caleraHorarios
    ],
  },
  {
    id: 3,
    nombre: "Sucursal El Talar",
    encargado: "Lola Abrego",
    direccion: "Las Zinnias 209, El Talar",
    telefono: "+54 9 3543 68808",
    imagen: Talar,
    mapa: "https://www.google.com.ar/maps/place/Las+Zinnias+209,+Mendiolaza,+C%C3%B3rdoba/@-31.2546288,-64.269602,17z/data=!3m1!4b1!4m5!3m4!1s0x943283360c77df89:0x1f7b566e7ca08240!8m2!3d-31.2546334!4d-64.2670271?hl=es&entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D",
    imagenesPopup: [
      talarHorarios    ],
  },
];

const Sucursales = () => {
  const [selectedSucursal, setSelectedSucursal] = useState(null);

  const handleCardClick = (sucursal) => {
    setSelectedSucursal(sucursal);
  };

  const closePopup = () => {
    setSelectedSucursal(null);
  };

  return (
    <div className="sucursales-container">
      <h2>Un ritmo para cada corazón</h2>
      <div className="sucursales-list">
        {sucursalesData.map((sucursal) => (
          <div
            key={sucursal.id}
            className="sucursal-card"
            onClick={() => handleCardClick(sucursal)}
          >
            <img src={sucursal.imagen} alt={sucursal.nombre} />
            <div className="sucursal-info">
              <h3>{sucursal.nombre}</h3>
              <p>👤 {sucursal.encargado}</p>
              <p>📍 {sucursal.direccion}</p>
              <p>📞 {sucursal.telefono}</p>
              <a href={sucursal.mapa} target="_blank" rel="noopener noreferrer">
                Ver en el mapa
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedSucursal && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h4>HORARIOS 2025</h4> {/* Título para todos los popups */}
            <h3>{selectedSucursal.nombre}</h3>
            <div className="popup-images">
              {selectedSucursal.imagenesPopup.map((img, index) => (
                <img key={index} src={img} alt={`Imagen ${index + 1}`} />
              ))}
            </div>
            <button onClick={closePopup}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sucursales;