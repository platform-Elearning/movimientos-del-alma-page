import React from 'react';
import './Conocenos.css';

// Importa las imágenes desde la ruta correcta
import conocenos1 from '../../assets/conocenos1.png';
import conocenos2 from '../../assets/conocenos2.png';

const Conocenos = () => {
  return (
    <div className="conocenos-container" id='conocenos'>
      <div className='conocenosTittleContenedor'>     
         <h1 className="conocenos-title">Conócenos</h1>
      </div>
      <div className="conocenos-content">
        <p className="conocenos-paragraph">
          <strong>MOVIMIENTOS DEL ALMA</strong> fue fundado en el año 2000 en Córdoba por Jimena de la Fuente. Con el tiempo, expandió su presencia a Río Ceballos (2010) y La Calera (2019), siempre renovándose con nuevas actividades y sumando profesionales especializados. Ofrecemos clases adaptadas a distintas edades y niveles, brindando una formación de calidad en cada área.
        </p>
        <p className="conocenos-paragraph">
          En MDA, no solo formamos bailarines, sino artistas y seres humanos plenos, en un ambiente familiar y cercano. Nuestro objetivo es ofrecer un espacio de aprendizaje integral donde cada alumno sea respetado y apoyado, estimulando su creatividad y expresividad. Muchos de nuestros egresados se destacan como profesionales de la danza y docentes, continuando el legado de MDA. Aquí, la calidad de enseñanza y el trato personalizado son nuestra prioridad, porque sabemos que bailar es felicidad.
        </p>
      </div>
      <div className="timeline">
  <div className="timeline-event">
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <h3>Año 2000</h3>
      <p>Ciudad de Córdoba</p>
    </div>
  </div>
  <img
    src={conocenos1}
    alt="Imagen entre 2000 y 2010"
    className="timeline-image"
  />
  <div className="timeline-event">
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <h3>Año 2010</h3>
      <p>Río Ceballos</p>
    </div>
  </div>
  <img
    src={conocenos2}
    alt="Imagen entre 2010 y 2019"
    className="timeline-image"
  />
  <div className="timeline-event">
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <h3>Año 2019</h3>
      <p>La Calera</p>
    </div>
  </div>
 
</div>

    </div>
  );
};

export default Conocenos;
