import React from "react";
import "./Home.css"; // Archivo CSS para estilos
import Button from "../button/Button"; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-background">
        <h1 className="home-title">Dancemos con el alma</h1>
        <h2>Instituto de Formación Internacional</h2>
        <Button text="Mas informacion" /> 
      </div>
    </div>
  );
};

export default Home;
