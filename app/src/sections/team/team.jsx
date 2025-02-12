import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <div className="team-container">
      <h1 className="team-title">Nuestro Equipo</h1>
      <div className="profiles-container">
        <div className="profile">
          <div className="profile-circle"></div>
          <p className="name">Juan Pérez</p>
          <p className="role">Desarrollador Frontend</p>
          <p>Juan se especializa en crear interfaces con React y tiene una pasión por el diseño web limpio y eficiente.</p> {/* Descripción más corta */}
        </div>
        <div className="profile">
          <div className="profile-circle"></div>
          <p className="name">Ana García</p>
          <p className="role">Diseñadora UI/UX</p>
          <p>Ana tiene experiencia diseñando experiencias intuitivas y accesibles para aplicaciones web y móviles.</p> {/* Descripción más corta */}
        </div>
        <div className="profile">
          <div className="profile-circle"></div>
          <p className="name">Carlos López</p>
          <p className="role">Product Manager</p>
          <p>Carlos lidera equipos y gestiona el desarrollo de productos desde la planificación hasta su lanzamiento.</p> {/* Descripción más corta */}
        </div>
      </div>
    </div>
  );
};

export default Team;
