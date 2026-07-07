import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Home from "../../components/Home/Home"; // Importa el nuevo componente Home
import Testimonials from "../../sections/testimonials/testimonials"; // Importa el nuevo componente Testimonials
import VideoSection from "../../sections/videoSection/videoSection";
import Team from "../../sections/team/team"; // Corrige la importación de Team
import DanceBanner from "../../sections/DanceBanner/DanceBanner";
import ShortsTestimonialsSection from "../../sections/ShortsTestimonialsSection/ShortsTestimonialsSection";
import Footer from "../../sections/footer/footer";
import Sucursales from "../../sections/sucursales/sucursales";
import Faqs from "../../sections/faqs/faqs";
import InfoJime from "../../sections/infoJime/infoJime";
import StudentList from "../searchCertificate/searchCertificate";
import ToCertificate from "../../components/toCertificate/toCertificate.jsx"; // Importa el nuevo componente ToCertificate
import "./index.css";

const Index = () => {
  const navigate = useNavigate();

  // Testimonios en formato Shorts para home
  const shortsTestimonials = [
    {
      videoId: "dstpolOgfOo",
      label: "Clases Presenciales"
    },
    {
      videoId: "iaShU5dgX_M",
      label: "Paola Rodriguez"
    },
    {
      videoId: "8WtERXb8MKg",
      label: "Luciana Amarilla"
    }
  ];

  return (
    <div className="page-container">
      <Navbar />
      <div className="containerIndex">
        <Home />
        <Testimonials />
        <VideoSection />
        <Team />
        <DanceBanner />
        <ToCertificate/>
        <ShortsTestimonialsSection
          title="Mirá lo que dicen"
          testimonials={shortsTestimonials}
        />
        <Sucursales />
        <Faqs />
      </div>
      <Footer />
    </div>
  );
};

export default Index;