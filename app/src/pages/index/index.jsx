import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Home from "../../components/Home/Home"; // Importa el nuevo componente Home
import Testimonials from "../../sections/testimonials/testimonials"; // Importa el nuevo componente Testimonials
import VideoSection from "../../sections/videoSection/videoSection";
import Team from "../../sections/team/team"; // Corrige la importación de Team
import DanceBanner from "../../sections/DanceBanner/DanceBanner";
import Footer from "../../sections/footer/footer";
import Sucursales from "../../sections/sucursales/sucursales";
import Faqs from "../../sections/faqs/faqs";
import "./index.css";

const Index = () => {
  const navigate = useNavigate();

  
  return (
    <div className="page-container">
      <Navbar />
      <div className="containerIndex">
        <Home />
        <Testimonials />
        <VideoSection />
        <Team />
        <DanceBanner />
        <Sucursales />
        <Faqs />
      </div>
      <Footer />
    </div>
  );
};

export default Index;