// components/Cursos/Cursos.jsx
import React from 'react';
import CardCourse from '../../components/CardCourse/CardCourse';
import './Cursos.css';

import img1 from '../../assets/ImagenesCursos/1.png';
import img2 from '../../assets/ImagenesCursos/2.png';
import img3 from '../../assets/ImagenesCursos/3.png';
import img4 from '../../assets/ImagenesCursos/4.png';
import img5 from '../../assets/ImagenesCursos/5.png';
import img6 from '../../assets/ImagenesCursos/6.png';
import img7 from '../../assets/ImagenesCursos/7.png';
import img8 from '../../assets/ImagenesCursos/8.png';
import img9 from '../../assets/ImagenesCursos/9.png';

const Cursos = () => {
  const courses = [
    {
      imageSrc: img1,
      title: 'Instructurado de Ritmos Latinos o Caribeños',
      duration: '7 meses de formación.',
      modality: '100% Online',
      description: 'Aprende ritmos latinos desde cero con instructores expertos.',
      buttonText: 'Ver más',
      onButtonClick: () => alert('Curso de Ritmos clickeado'),
    },
    {
      imageSrc: img2,
      title: 'Instructorado en Danzas de Matriz Afro',
      duration: '10 meses de formación.',
      modality: '100% Online',
      description: 'Sumérgete en la cultura afro a través de sus danzas.',
      buttonText: 'Inscribirse',
      onButtonClick: () => alert('Curso de Danzas Afro clickeado'),
    },
    {
      imageSrc: img3,
      title: 'Profesorado de Danza Tap',
      duration: '7 meses de formación.',
      modality: '100% Online',
      description: 'Conviértete en profesor de Tap y domina el ritmo.',
      buttonText: 'Más info',
      onButtonClick: () => alert('Curso de Tap clickeado'),
    },
    {
      imageSrc: img4,
      title: 'Curso de Ballet Clásico',
      duration: '8 meses de formación.',
      modality: 'Presencial y Online',
      description: 'Domina las técnicas clásicas de ballet con expertos.',
      buttonText: 'Detalles',
      onButtonClick: () => alert('Curso de Ballet clickeado'),
    },
    {
      imageSrc: img5,
      title: 'Técnicas de Danza Contemporánea',
      duration: '6 meses de formación.',
      modality: '100% Online',
      description: 'Explora la libertad de la danza contemporánea.',
      buttonText: 'Inscribirse',
      onButtonClick: () => alert('Curso de Danza Contemporánea clickeado'),
    },
    {
      imageSrc: img6,
      title: 'Danzas Folklóricas de América Latina',
      duration: '12 meses de formación.',
      modality: 'Presencial',
      description: 'Aprende las danzas tradicionales de varios países latinoamericanos.',
      buttonText: 'Más info',
      onButtonClick: () => alert('Curso de Danzas Folklóricas clickeado'),
    },
    {
      imageSrc: img7,
      title: 'Curso de Hip-Hop Avanzado',
      duration: '4 meses de formación.',
      modality: 'Presencial y Online',
      description: 'Lleva tus habilidades de hip-hop al siguiente nivel.',
      buttonText: 'Ver detalles',
      onButtonClick: () => alert('Curso de Hip-Hop clickeado'),
    },
    {
      imageSrc: img8,
      title: 'Entrenamiento de Técnica de Baile',
      duration: '5 meses de formación.',
      modality: '100% Online',
      description: 'Perfecciona tu técnica y postura en la danza.',
      buttonText: 'Más información',
      onButtonClick: () => alert('Curso de Técnica de Baile clickeado'),
    },
    {
      imageSrc: img9,
      title: 'Seminario de Danzas Urbanas',
      duration: '2 meses de formación.',
      modality: 'Presencial',
      description: 'Participa en un seminario intensivo de danzas urbanas.',
      buttonText: 'Inscribirse',
      onButtonClick: () => alert('Seminario de Danzas Urbanas clickeado'),
    }
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
            description={course.description}
            buttonText={course.buttonText}
            onButtonClick={course.onButtonClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Cursos;
