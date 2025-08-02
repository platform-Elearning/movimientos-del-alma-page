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
          <p className="role">Directora de la Casa Central <br/> y Sucursal el Talar</p>
          <p>"Un gran maestro de danza no solo enseña movimientos, sino que despierta almas y hace bailar el espíritu."</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
