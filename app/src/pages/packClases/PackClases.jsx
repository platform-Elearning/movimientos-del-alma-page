import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../sections/footer/footer";
import "./PackClases.css";

import Jazz from "../../assets/ClasesPresenciales/JazzClase.png";
import wppIcon from "../../assets/wpp.png";
import Clasico from "../../assets/ClasesPresenciales/Clasico.png";
import HipHop from "../../assets/ClasesPresenciales/ClaseHipHop.png";
import danzaContemporanea from "../../assets/danzaContemporanea.png";

const categorias = [
  { id: "jazz", label: "Jazz" },
  { id: "contemporaneo", label: "Contemporáneo" },
  { id: "clasico", label: "Clásico" },
  { id: "urbano", label: "Urbano" },
];

const packs = {
  jazz: [
    {
      id: 1,
      nombre: "Pack Jazz Starter",
      imagen: Jazz,
      clases: 4,
      duracion: "1 mes",
      nivel: "Principiante",
      descripcion: "El punto de partida ideal para adentrarte en el mundo del Jazz. Técnica base, ritmo y expresión.",
      precio: "$8.500",
      destacado: false,
    },
    {
      id: 2,
      nombre: "Pack Jazz Esencial",
      imagen: Jazz,
      clases: 8,
      duracion: "2 meses",
      nivel: "Intermedio",
      descripcion: "Profundizá en el estilo Jazz con combinaciones de pasos, musicalidad y trabajo de suelo.",
      precio: "$15.000",
      destacado: true,
    },
    {
      id: 3,
      nombre: "Pack Jazz Pro",
      imagen: Jazz,
      clases: 16,
      duracion: "4 meses",
      nivel: "Avanzado",
      descripcion: "Formación completa en técnica Jazz. Incluye coreografía, improvisación y presentación final.",
      precio: "$27.000",
      destacado: false,
    },
  ],
  contemporaneo: [
    {
      id: 1,
      nombre: "Pack Contemporáneo Starter",
      imagen: danzaContemporanea,
      clases: 4,
      duracion: "1 mes",
      nivel: "Principiante",
      descripcion: "Iniciación a la danza contemporánea. Exploración del movimiento, conciencia corporal y fluidez.",
      precio: "$8.500",
      destacado: false,
    },
    {
      id: 2,
      nombre: "Pack Contemporáneo Esencial",
      imagen: danzaContemporanea,
      clases: 8,
      duracion: "2 meses",
      nivel: "Intermedio",
      descripcion: "Técnicas de piso, contacto improvisación y desarrollo del vocabulario de movimiento propio.",
      precio: "$15.000",
      destacado: true,
    },
    {
      id: 3,
      nombre: "Pack Contemporáneo Pro",
      imagen: danzaContemporanea,
      clases: 16,
      duracion: "4 meses",
      nivel: "Avanzado",
      descripcion: "Exploración profunda de técnicas contemporáneas internacionales y creación coreográfica propia.",
      precio: "$27.000",
      destacado: false,
    },
  ],
  clasico: [
    {
      id: 1,
      nombre: "Pack Clásico Starter",
      imagen: Clasico,
      clases: 4,
      duracion: "1 mes",
      nivel: "Principiante",
      descripcion: "Introducción a la danza clásica. Postura, barra básica y primeras nociones de ballet.",
      precio: "$8.500",
      destacado: false,
    },
    {
      id: 2,
      nombre: "Pack Clásico Esencial",
      imagen: Clasico,
      clases: 8,
      duracion: "2 meses",
      nivel: "Intermedio",
      descripcion: "Barra completa, centre y variaciones. Afianzá tu técnica clásica con metodología Vaganova.",
      precio: "$15.000",
      destacado: true,
    },
    {
      id: 3,
      nombre: "Pack Clásico Pro",
      imagen: Clasico,
      clases: 16,
      duracion: "4 meses",
      nivel: "Avanzado",
      descripcion: "Técnica avanzada de ballet clásico, puntas, grand allegro y preparación para repertorio.",
      precio: "$27.000",
      destacado: false,
    },
  ],
  urbano: [
    {
      id: 1,
      nombre: "Pack Urbano Starter",
      imagen: HipHop,
      clases: 4,
      duracion: "1 mes",
      nivel: "Principiante",
      descripcion: "Tu primer paso en el mundo urbano. Hip-hop, popping básico y groove fundamental.",
      precio: "$8.500",
      destacado: false,
    },
    {
      id: 2,
      nombre: "Pack Urbano Esencial",
      imagen: HipHop,
      clases: 8,
      duracion: "2 meses",
      nivel: "Intermedio",
      descripcion: "Freestyle, locking, waacking y combinaciones. Desarrollá tu estilo único en el movimiento urbano.",
      precio: "$15.000",
      destacado: true,
    },
    {
      id: 3,
      nombre: "Pack Urbano Pro",
      imagen: HipHop,
      clases: 16,
      duracion: "4 meses",
      nivel: "Avanzado",
      descripcion: "Dominio completo de estilos urbanos, battle training, coreografías de alta complejidad.",
      precio: "$27.000",
      destacado: false,
    },
  ],
};

const nivelColor = {
  Principiante: "#4caf50",
  Intermedio: "#Efb810",
  Avanzado: "#e53935",
};

const PackClases = () => {
  const [categoriaActiva, setCategoriaActiva] = useState("jazz");

  const handleMercadoPago = (pack) => {
    alert(`Próximamente: integración con Mercado Pago para "${pack.nombre}"`);
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="pack-hero">
        <div className="pack-hero-deco-lines" />
        <div className="pack-hero-deco-left" />
        <div className="pack-hero-overlay">
          <span className="pack-hero-eyebrow">Movimientos del Alma</span>
          <h1 className="pack-hero-title">Pack de <span>Clases</span></h1>
          <div className="pack-hero-divider" />
          <p className="pack-hero-subtitle">
            Elegí el estilo que más te apasiona y comenzá tu camino en la danza con nuestros packs diseñados para cada nivel.
          </p>
        </div>
      </div>

      <div className="pack-container">
        <div className="pack-tabs">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              className={`pack-tab ${categoriaActiva === cat.id ? "active" : ""}`}
              onClick={() => setCategoriaActiva(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="pack-grid">
          {packs[categoriaActiva].map((pack) => (
            <div
              key={pack.id}
              className={`pack-card ${pack.destacado ? "pack-card--destacado" : ""}`}
            >
              {pack.destacado && (
                <div className="pack-badge">⭐ Más elegido</div>
              )}
              <div className="pack-card-img-wrapper">
                <img src={pack.imagen} alt={pack.nombre} className="pack-card-img" />
                <span
                  className="pack-nivel-badge"
                  style={{ backgroundColor: nivelColor[pack.nivel] }}
                >
                  {pack.nivel}
                </span>
              </div>
              <div className="pack-card-body">
                <h3 className="pack-card-title">{pack.nombre}</h3>
                <p className="pack-card-desc">{pack.descripcion}</p>
                <ul className="pack-card-details">
                  <li>
                    <span className="pack-detail-icon">🎯</span>
                    <span><strong>{pack.clases} clases</strong></span>
                  </li>
                  <li>
                    <span className="pack-detail-icon">📅</span>
                    <span>Duración: <strong>{pack.duracion}</strong></span>
                  </li>
                  <li>
                    <span className="pack-detail-icon">📊</span>
                    <span>Nivel: <strong>{pack.nivel}</strong></span>
                  </li>
                </ul>
                <div className="pack-card-footer">
                  <span className="pack-precio">{pack.precio}</span>
                  <button
                    className="pack-mp-button"
                    onClick={() => handleMercadoPago(pack)}
                  >
                    <span className="pack-mp-logo">�</span>
                    Mercado Pago
                  </button>
                  <a
                    href={`https://wa.me/5493511234567?text=Hola! Me interesa el ${pack.nombre}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pack-wpp-button"
                  >
                    <img src={wppIcon} alt="WhatsApp" className="pack-wpp-icon" />
                    Quiero otro método de pago
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pack-info-section">
          <h2>¿Cómo funciona?</h2>
          <div className="pack-steps">
            <div className="pack-step">
              <div className="pack-step-number">1</div>
              <h4>Elegí tu pack</h4>
              <p>Seleccioná el estilo de danza y el nivel que mejor se adapte a vos.</p>
            </div>
            <div className="pack-step">
              <div className="pack-step-number">2</div>
              <h4>Comprá con Mercado Pago</h4>
              <p>Pagá de forma segura con tarjeta, transferencia o en efectivo.</p>
            </div>
            <div className="pack-step">
              <div className="pack-step-number">3</div>
              <h4>¡Empezá a bailar!</h4>
              <p>Coordinamos horarios y comenzás tus clases de inmediato.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PackClases;
