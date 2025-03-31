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
            "El poder formarme en movimientos del alma me abrió las puertas a entender que podía vivir enseñando y podía seguir disfrutando haciendo lo que me llena de satisfacción el alma, siempre voy a agradecer eso."
          </p>
          <h4 className="testimonial-author">Martina Ordoñez Muñoz (Egresada y Profesora)</h4>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            "Mi lugar seguro en el mundo. El espacio donde acogieron los sueños de una niña, cómo así también dónde acompañaron y abrazaron sus dificultades y tristezas. Ese sitio donde pude expresarme con total libertad, de cuerpo y alma; Dónde pude crecer no solo como bailarina si no como persona, siempre rodeada de mucho amor y alegría."
          </p>
          <h4 className="testimonial-author">Maria Luz Buteler (Egresada)</h4>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            "Para mi significa la base de mi Carrera, mis primeros pasos, mis primeras competencias, mis primeros trucos. En Mda, aprendí que la danza no solo es una hermosa disciplina, si no un estilo de Vida, Mda me enseñó que el camino de la danza Es difícil, es exigente, y que solamente lo mueve una cosa: La PASIÓN, gracias MDA, te amo Siempre."
          </p>
          <h4 className="testimonial-author">Exequiel Gregori (Egresado)</h4>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            "Mi segundo hogar, donde se prende la creatividad y la música y el movimiento se convierten en una catarsis liberadora. El lugar que me dio amigos y familia, contención, amor, risas, desafíos y logros alcanzados."
          </p>
          <h4 className="testimonial-author">Ivanna Sterren (Egresada y Profesora)</h4>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            "Mi paso por la academia fue uno de los caminos más hermosos que hice, no solo me formaron como bailarín sino también como persona. Ya no es solo un espacio para compartir mi danza y la de los demás, movimientos del alma se volvió mi familia."
          </p>
          <h4 className="testimonial-author">Salvador Martinez (Alumno)</h4>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            "Para nosotros como papás que nuestras hijas hayan pasado su adolescencia en MDA fue altamente gratificante, no solo por las relaciones personales que de allí salieron, sino por los aprendizajes para la vida que han adquirido también! Siempre agradecida desde hace veinte años!"
          </p>
          <h4 className="testimonial-author">Elo Garcia Johnson (Mamá)</h4>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            "Movimientos del alma fue mi casa por más de 10 años y al día de hoy lo sigue siendo. No tengo más que agradecimientos para la academia que me acompañó y me vio crecer durante tanto tiempo. Muchos de mis mejores recuerdos son ahí, con mis profes y amigas de toda la vida."
          </p>
          <h4 className="testimonial-author">Abril Garcia Johnson (Egresada)</h4>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            "En Movimientos del Alma, descubrí mi vocación por enseñar y cuánto lo disfruto. Como profesora de hip hop, he tenido el privilegio de ver cómo mis alumnos se liberan y expresan a través del movimiento. Esta academia es un espacio donde se fomenta la creatividad, la confianza y la conexión con uno mismo. Me siento afortunada de haberme formado en este lugar y de poder seguir compartiendo mi pasión con mis alumnos."
          </p>
          <h4 className="testimonial-author">Gianella Cabral (Profesora de Hip Hop)</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;