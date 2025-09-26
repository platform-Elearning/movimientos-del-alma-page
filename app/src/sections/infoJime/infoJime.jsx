import React from 'react';
import './infoJime.css';
import image1 from '../../assets/infoJime/1.png';
import image2 from '../../assets/infoJime/2.png';

const InfoJime = () => {
  return (
    <div className="info-jime-section">
      <h2 className="info-jime-main-title">El corazón que impulsa a Movimientos del Alma</h2>
      <div className="info-jime-body">
        <div className="info-jime-images">
          <img src={image2} alt="Jimena de la Fuente" className="info-jime-image-2" />
          <img src={image1} alt="Jimena de la Fuente" className="info-jime-image-1" />
        </div>
        <div className="info-jime-texts">
          <p className="info-jime-description">
            Jimena de la Fuente, La mente maestra detrás de "Movimientos del Alma" Directora, creadora, alma inquieta. Combina la técnica de la danza con la sabiduría emocional y espiritual. Una visionaria pedagógica, que convierte la enseñanza en arte y la formación en misión. Fundadora de una franquicia de escuelas de danza, formadora de formadores, y apasionada por el desarrollo integral del ser.
          </p>
          <div className="info-jime-cards">
            <div className="info-jime-card">Crea carreras con alma (Jazz, Clásico, Pilates, Contemporáneo y más).</div>
            <div className="info-jime-card">Piensa y planifica estrategias incluso mientras baila.</div>
            <div className="info-jime-card">Habla el lenguaje del movimiento, del alma y de la cámara.</div>
            <div className="info-jime-card">Tiene claro que la danza transforma... y también certifica internacionalmente.</div>
            <div className="info-jime-card long-card">Une cuerpo, mente y corazón — tanto en el aula como en la vida Con una energía emprendedora imparable, busca siempre llevar su mensaje más allá, con una sensibilidad artística única y una entrega total por su comunidad educativa.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoJime;
