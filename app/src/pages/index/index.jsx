import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import CardCourse from "../../components/CardCourse/CardCourse";
import Home from "../../components/Home/Home"; // Importa el nuevo componente Home
import VideoSection from "../../sections/videoSection/videoSection";
import Cursos from "../../sections/Cursos/Cursos";
import Conocenos from "../../sections/Conocenos/Conocenos";
import danceVideo from "../../assets/dancevideo.mp4";
import ImgVideoSection from "../../assets/ImgVideoSection.png";
import "./index.css";

const Index = () => {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="page-container">
      {/* Contenedor principal */}
      <Navbar />
      <div className="containerIndex">
        {/* Reemplaza el contenido aquí por el nuevo componente Home */}
        <Home />

        {/* Sección del video */}
        <div className="video-section-container">
          <VideoSection
            title="Alma en movimiento"
            imageSrc={ImgVideoSection}
            videoSrc={danceVideo}
          />
        </div>
        <div className="video-section-container">
          <Conocenos
           
          />
        </div>
        <div className="video-section-container">
        <div className="App">
      <Cursos />
    </div>
    </div>
      </div>
    </div>
  );
};

export default Index;
