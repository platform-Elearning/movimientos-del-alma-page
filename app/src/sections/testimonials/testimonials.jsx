import React from "react";
import "./testimonials.css"; // Archivo CSS para estilos

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">25 años formando apasionados de la danza</h2>
      <p className="testimonials-subtitle">
        Somos un espacio donde la creatividad, la disciplina y el desarrollo humano se encuentran para inspirar a <br /> bailarines de todas las edades.
      </p>

      <div className="testimonials-cards">
        <div className="testimonial-card">
          
          <p className="testimonial-text">
            "Las clases son increíbles, he aprendido muchísimo en poco tiempo. ¡Recomiendo totalmente!"
          </p>
          <h4 className="testimonial-author">Juan Pérez</h4>
        </div>

        <div className="testimonial-card">
         
          <p className="testimonial-text">
            "Un ambiente muy motivador. Me siento respaldado en cada paso. ¡Excelente experiencia!"
          </p>
          <h4 className="testimonial-author">María López</h4>
        </div>

        <div className="testimonial-card">
         
          <p className="testimonial-text">
            "¡Simplemente transformador! La pasión por enseñar es palpable en cada clase."
          </p>
          <h4 className="testimonial-author">Carlos Gómez</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
