import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Home from "../../components/Home/Home"; // Importa el nuevo componente Home
import Testimonials from "../../sections/testimonials/testimonials"; // Importa el nuevo componente Testimonials
import VideoSection from "../../sections/videoSection/videoSection";
import Team from "../../sections/team/team"; // Corrige la importación de Team
import Cursos from "../../sections/Cursos/Cursos";
import Conocenos from "../../sections/Conocenos/Conocenos";
import danceVideo from "../../assets/dancevideo.mp4";
import ImgVideoSection from "../../assets/ImgVideoSection.png";
import AlumnosMaestros from "../../sections/AlumnosMaestros/AlumnosMaestros";
import "./index.css";

const Index = () => {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate("/register");
  };

  useEffect(() => {
    const handleScrollToSection = () => {
      document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault(); // Evita el comportamiento por defecto del enlace
          
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll suave
          }
        });
      });
    };

    handleScrollToSection(); // Llamar a la función al cargar el componente

    // Limpiar el evento cuando el componente se desmonta
    return () => {
      document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.removeEventListener('click', handleScrollToSection);
      });
    };
  }, []);

  return (
    <div className="page-container">
      <Navbar />
      <div className="containerIndex">
        <Home />
        <Testimonials />
        <VideoSection />
        <Team /> {/* Usando correctamente el componente Team */}
        <div className="video-section-container">
          <Conocenos />
        </div>
        <div className="AlumnosMaestros">
          <AlumnosMaestros />
        </div>
        <div className="video-section-container">
          <div className="Cursos" id="cursos">
            <Cursos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
