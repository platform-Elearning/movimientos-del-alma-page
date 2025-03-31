import React from 'react';
import './team.css';
import lola from '../../assets/lolaLabrego.png';
import ale from '../../assets/ALE.png';
import jime from '../../assets/jime.png';

const Team = () => {
  return (
    <div className="team-container">
      <h1 className="team-title">Nuestro Equipo</h1>
      <div className="profiles-container">
       
        <div className="profile">
          <img src={ale} alt="Alejandra Gherardi" className="profile-image" />
          <p className="name">Alejandra Gherardi</p>
          <p className="role">Directora de Sucursal La Calera</p>
          <p>"Cada bailarín tiene su propio ritmo, su propio aprendizaje. Me entusiasma guiar a cada alumno a descubrir sus procesos y conectar con su esencia a través del movimiento."</p>
        </div>
        <div className="profile">
          <img src={jime} alt="Jimena De La Fuente" className="profile-image" />
          <p className="name">Jimena De La Fuente</p>
          <p className="role">Directora de la Casa Central</p>
          <p>"Un gran maestro de danza no solo quiere transmitirnos, sino que despierta a nuestro hijo a bailar el espíritu."</p>
        </div>
        <div className="profile">
          <img src={lola} alt="Lola Abrego" className="profile-image" />
          <p className="name">Lola Abrego</p>
          <p className="role">Directora de Sucursal El Talar</p>
          <p>"La danza es la emoción que sale del alma, un instante único y profundo. Ayuda a crecer a nuestros niños, les da nuevas herramientas, nuevas bases, y les permite encontrarse y expresarse sin restricciones ni temores."</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
