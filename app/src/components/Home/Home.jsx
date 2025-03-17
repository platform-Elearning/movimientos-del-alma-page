import React from "react";
import "./Home.css"; // Archivo CSS para estilos

import Button from "../button/Button";
const Home = () => {
  return (
    <div className="home-container">

            <div className="shape1"></div>

      <div className="home-background">
        <h1 className="home-title">Donde el arte y la pasión se encuentran</h1>

        <Button text="Conoce nuestras clases" />
        </div>
    </div>
  );
};

export default Home;
