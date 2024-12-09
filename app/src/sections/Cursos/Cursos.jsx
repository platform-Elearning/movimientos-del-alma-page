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
      title: 'Instructorado de Ritmos Latinos o Caribeños',
      duration: '7 meses de formación.',
      modality: '100% Online',
      description: 'Aprende ritmos latinos desde cero con instructores expertos.',
      modules: 10,
      recordedClasses: 8,
      liveClasses: 2,
      personalizedAdvice: 'Asesoramiento personalizado cada semana.',
    },
    {
      imageSrc: img2,
      title: 'Instructorado en Danzas de Matriz Afro',
      duration: '10 meses de formación.',
      modality: '100% Online',
      description: 'Sumérgete en la cultura afro a través de sus danzas.',
      modules: 12,
      recordedClasses: 10,
      liveClasses: 3,
      personalizedAdvice: 'Sesión mensual con un instructor.',
    },
    {
      imageSrc: img3,
      title: 'Profesorado de Danza Tap',
      duration: '7 meses de formación.',
      modality: '100% Online',
      description: 'Conviértete en profesor de Tap y domina el ritmo.',
      modules: 8,
      recordedClasses: 6,
      liveClasses: 2,
      personalizedAdvice: 'Revisión personalizada de tu técnica.',
    },
    {
      imageSrc: img4,
      title: 'Curso de Ballet Clásico',
      duration: '8 meses de formación.',
      modality: 'Presencial y Online',
      description: 'Domina las técnicas clásicas de ballet con expertos.',
      modules: 15,
      recordedClasses: 12,
      liveClasses: 4,
      personalizedAdvice: 'Clases personalizadas según tu nivel.',
    },
    {
      imageSrc: img5,
      title: 'Técnicas de Danza Contemporánea',
      duration: '6 meses de formación.',
      modality: '100% Online',
      description: 'Explora la libertad de la danza contemporánea.',
      modules: 9,
      recordedClasses: 7,
      liveClasses: 1,
      personalizedAdvice: 'Plan personalizado para desarrollo artístico.',
    },
    {
      imageSrc: img6,
      title: 'Danzas Folklóricas de América Latina',
      duration: '12 meses de formación.',
      modality: 'Presencial',
      description: 'Aprende las danzas tradicionales de varios países latinoamericanos.',
      modules: 20,
      recordedClasses: 15,
      liveClasses: 5,
      personalizedAdvice: 'Guía práctica sobre tradiciones culturales.',
    },
    {
      imageSrc: img7,
      title: 'Curso de Hip-Hop Avanzado',
      duration: '4 meses de formación.',
      modality: 'Presencial y Online',
      description: 'Lleva tus habilidades de hip-hop al siguiente nivel.',
      modules: 6,
      recordedClasses: 4,
      liveClasses: 2,
      personalizedAdvice: 'Evaluación mensual de progresos.',
    },
    {
      imageSrc: img8,
      title: 'Entrenamiento de Técnica de Baile',
      duration: '5 meses de formación.',
      modality: '100% Online',
      description: 'Perfecciona tu técnica y postura en la danza.',
      modules: 10,
      recordedClasses: 8,
      liveClasses: 2,
      personalizedAdvice: 'Correcciones técnicas detalladas.',
    },
    {
      imageSrc: img9,
      title: 'Seminario de Danzas Urbanas',
      duration: '2 meses de formación.',
      modality: 'Presencial',
      description: 'Participa en un seminario intensivo de danzas urbanas.',
      modules: 4,
      recordedClasses: 3,
      liveClasses: 1,
      personalizedAdvice: 'Retroalimentación grupal después de cada sesión.',
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
            description={course.description}
            modules={course.modules}
            recordedClasses={course.recordedClasses}
            liveClasses={course.liveClasses}
            personalizedAdvice={course.personalizedAdvice}
          />
        ))}
      </div>
    </div>
  );
};

export default Cursos;
