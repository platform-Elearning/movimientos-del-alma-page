import React from "react";
import { Link } from 'react-router-dom';

import "./Home.css"; // Archivo CSS para estilos

import Button from "../button/Button";
const Home = () => {
  return (
    <div className="home-container">

            <div className="shape1"></div>

      <div className="home-background">
        <h1 className="home-title">Donde el arte y la pasión se encuentran</h1>
          <Link to="clases">
            <Button text="Conoce nuestras clases" />
          </Link>
        </div>
    </div>
  );
};

export default Home;
