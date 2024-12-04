import React from 'react';
import CardCourse from '../../components/CardCourse/CardCourse';
import './Cursos.css'; // Para tus estilos específicos de Cursos

const Cursos = () => {
  // Datos de ejemplo para las cartas
  const courses = [
    {
      imageSrc: 'https://via.placeholder.com/300x200',
      title: 'Curso de React',
      duration: '4 semanas',
      modality: 'Online',
      buttonText: 'Ver más',
      onButtonClick: () => alert('Curso de React clickeado'),
    },
    {
      imageSrc: 'https://via.placeholder.com/300x200',
      title: 'Curso de JavaScript',
      duration: '6 semanas',
      modality: 'Presencial',
      buttonText: 'Inscribirse',
      onButtonClick: () => alert('Curso de JavaScript clickeado'),
    },
    {
      imageSrc: 'https://via.placeholder.com/300x200',
      title: 'Curso de Python',
      duration: '8 semanas',
      modality: 'Online',
      buttonText: 'Más info',
      onButtonClick: () => alert('Curso de Python clickeado'),
    },
    {
      imageSrc: 'https://via.placeholder.com/300x200',
      title: 'Curso de Diseño',
      duration: '5 semanas',
      modality: 'Presencial',
      buttonText: 'Ver detalles',
      onButtonClick: () => alert('Curso de Diseño clickeado'),
    },
    {
      imageSrc: 'https://via.placeholder.com/300x200',
      title: 'Curso de Inglés',
      duration: '10 semanas',
      modality: 'Online',
      buttonText: 'Inscripción',
      onButtonClick: () => alert('Curso de Inglés clickeado'),
    },
    {
      imageSrc: 'https://via.placeholder.com/300x200',
      title: 'Curso de Fotografía',
      duration: '3 semanas',
      modality: 'Presencial',
      buttonText: 'Más detalles',
      onButtonClick: () => alert('Curso de Fotografía clickeado'),
    },
  ];

  return (
    <div className="cursos-container">
      <h1 className="cursos-title">Formaciones - Instituto de Formación Internacional</h1>
      <div className="cursos-grid">
        {courses.map((course, index) => (
          <CardCourse
            key={index}
            imageSrc={course.imageSrc}
            title={course.title}
            duration={course.duration}
            modality={course.modality}
            buttonText={course.buttonText}
            onButtonClick={course.onButtonClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Cursos;
