import React from "react";
import Navbar from "../../components/navbar/Navbar";
import InfoJime from "../../sections/infoJime/infoJime";
import Footer from "../../sections/footer/footer";
import "../index/index.css";

const InfoJimePage = () => {
  return (
    <div id="top" className="page-container">
      <Navbar />
      <div className="containerIndex">
        <InfoJime />
      </div>
      <Footer />
    </div>
  );
};

export default InfoJimePage;
