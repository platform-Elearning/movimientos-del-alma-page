import Navbar from "../../components/navbar/Navbar";
import Footer from "../../sections/footer/footer";

import "../../pages/index/index.css";
import { Link } from "react-router-dom";
import missionVisionImg from "../../assets/missionVisionImg.png"; // Asegúrate de tener la imagen
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="nosotros-container">
        <Link to="/" className="back-button">&larr; Volver a Inicio</Link>
        
        <h1 className="titleNosotros">Movimientos del Alma</h1>
        <p className="description">
          Fue fundada en el año 2000 por Jimena de la Fuente en Córdoba, Argentina.
          Con el tiempo, la marca expandió su presencia en distintas regiones,
          consolidándose como un referente en la formación de bailarines y docentes de danza.
        </p>

        <div className="content-box">
          <div className="box mission">
            <h2>Misión</h2>
            <p>
              Brindar una formación artística integral de calidad,
              inspirando a nuestros alumnos a desarrollar su creatividad
              y amor por la danza en un ambiente inclusivo y estimulante.
            </p>
          </div>
          <img src={missionVisionImg} alt="Bailarina" className="center-image" />
          <div className="box vision">
            <h2>Visión</h2>
            <p>
              Convertirnos en un referente global en la formación de bailarines,
              fusionando tradición e innovación para desarrollar artistas
              con un fuerte sentido de identidad y excelencia.
            </p>
          </div>
        </div>

        {/* Sección de Valores */}
        <div className="valores-container">
          <h2 className="title">Nuestros Valores</h2>
          <div className="valores-box">
            <div className="valor">
              <h3>Excelencia</h3>
              <p>
                Nos esforzamos por brindar la mejor calidad en la enseñanza de la danza,
                potenciando el talento y la formación de nuestros alumnos.
              </p>
            </div>
            <div className="valor">
              <h3>Pasión</h3>
              <p>
                Fomentamos el amor por la danza y la expresión artística,
                creando un espacio donde cada alumno pueda vivir y compartir su pasión.
              </p>
            </div>
            <div className="valor">
              <h3>Disciplina</h3>
              <p>
                Promovemos el esfuerzo, la constancia y la responsabilidad
                como pilares fundamentales en la formación de nuestros alumnos.
              </p>
            </div>
            <div className="valor">
              <h3>Compromiso</h3>
              <p>
                Acompañamos a nuestros estudiantes en su desarrollo integral,
                respetando sus tiempos y estilos, tanto a nivel artístico como personal.
              </p>
            </div>
            <div className="valor">
              <h3>Creatividad</h3>
              <p>
                Impulsamos la exploración única de cada individuo,
                alentando la innovación y la expresión artística.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="divFooter">
      <Footer />

      </div>

    </div>
  );
};

export default Nosotros;
