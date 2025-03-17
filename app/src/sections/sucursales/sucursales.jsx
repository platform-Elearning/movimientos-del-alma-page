import React from "react";
import "./sucursales.css";
import Central from '../../assets/central.png'; // Imagen de Casa Central
import Talar from '../../assets/talar.png'; // Imagen de Sucursal El Talar
import Calera from '../../assets/calera.png'; // Imagen de Sucursal La Calera

const sucursalesData = [
  {
    id: 1,
    nombre: "Casa Central",
    encargado: "Jimena De La Fuente",
    direccion: "Almirante Brown 72, Río Ceballos",
    telefono: "+54 9 351 3668819",
    imagen: Central, // Usando la imagen importada
    mapa: "https://maps.google.com/?q=Almirante+Brown+72,+Río+Ceballos",
  },
  {
    id: 2,
    nombre: "Sucursal La Calera",
    encargado: "Alejandra Cherradi",
    direccion: "Jorge Luis Borges 662, La Calera",
    telefono: "+54 9 3517 662475",
    imagen: Calera, // Usando la imagen importada
    mapa: "https://maps.google.com/?q=Jorge+Luis+Borges+662,+La+Calera",
  },
  {
    id: 3,
    nombre: "Sucursal El Talar",
    encargado: "Lola Abrego",
    direccion: "Las Zinnias 209, El Talar",
    telefono: "+54 9 3543 68808",
    imagen: Talar, // Usando la imagen importada
    mapa: "https://maps.google.com/?q=Las+Zinnias+209,+El+Talar",
  },
];

const Sucursales = () => {
  return (
    <div className="sucursales-container">
      <h2>Un ritmo para cada corazón</h2>
      <div className="sucursales-list">
        {sucursalesData.map((sucursal) => (
          <div key={sucursal.id} className="sucursal-card">
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
    </div>
  );
};

export default Sucursales;
