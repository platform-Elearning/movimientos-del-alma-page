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
      description: 'Formación dedicada a explorar las danzas latinas caribeñas, abarcando su historia, técnicas, estilos, cadencias y musicalidad.',
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
      description: 'Este curso busca introducir al bailarín/a en las danzas de matriz afro desde una perspectiva latinoamericana.',
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
      description: 'La formación se enfoca en crear las condiciones necesarias para el desarrollo del aprendizaje del estudiante a través de la práctica del TAP.',
      modules: 8,
      recordedClasses: 6,
      liveClasses: 2,
      personalizedAdvice: 'Revisión personalizada de tu técnica.',
    },
    {
      imageSrc: img4,
      title: 'Profesorado de Danza Contemporanea',
      duration: '8 meses de formación.',
      modality: 'Presencial y Online',
      description: 'La formación se centra en la práctica de la danza contemporánea y la preparación docente, proporcionando herramientas conceptuales y metodológicas.',
      modules: 15,
      recordedClasses: 12,
      liveClasses: 4,
      personalizedAdvice: 'Clases personalizadas según tu nivel.',
    },
    {
      imageSrc: img5,
      title: 'Profesorado de Danza Jazz',
      duration: '6 meses de formación.',
      modality: '100% Online',
      description: 'La formación se centra en la práctica de la danza Jazz y la preparación docente, proporcionando herramientas conceptuales y metodológicas.',
      modules: 9,
      recordedClasses: 7,
      liveClasses: 1,
      personalizedAdvice: 'Plan personalizado para desarrollo artístico.',
    },
    {
      imageSrc: img6,
      title: 'Profesorado de Danza Clásica',
      duration: '12 meses de formación.',
      modality: 'Presencial',
      description: 'La formación se centra en la práctica de la danza Clásica y la preparación docente, proporcionando herramientas conceptuales y metodológicas.',
      modules: 20,
      recordedClasses: 15,
      liveClasses: 5,
      personalizedAdvice: 'Guía práctica sobre tradiciones culturales.',
    },
    {
      imageSrc: img7,
      title: 'Composición Coreográfica',
      duration: '4 meses de formación.',
      modality: 'Presencial y Online',
      description: 'Proponemos un espacio destinado a la formación integral de performers, creadores y docentes, enfocado en potenciar las particularidades y cuestionamientos de cada estudiante.',
      modules: 6,
      recordedClasses: 4,
      liveClasses: 2,
      personalizedAdvice: 'Evaluación mensual de progresos.',
    },
    {
      imageSrc: img8,
      title: 'Facilitador/a Danza Transpersonal-Nivel I',
      duration: '5 meses de formación.',
      modality: '100% Online',
      description: 'Formación introductoria sobre las dimensiones transpersonales del cuerpo y la danza. Su objetivo es explorarlas, experimentarlas en el propio cuerpo e integrarlas en la enseñanza de cualquier tipo de danza.',
      modules: 10,
      recordedClasses: 8,
      liveClasses: 2,
      personalizedAdvice: 'Correcciones técnicas detalladas.',
    },
    {
      imageSrc: img9,
      title: 'Flexibilidad',
      duration: '2 meses de formación.',
      modality: 'Presencial',
      description: 'Creamos un espacio de formación para performers, creadores y docentes, enfocado en ampliar el conocimiento y las herramientas sobre control motor y flexibilidad.',
      modules: 4,
      recordedClasses: 3,
      liveClasses: 1,
      personalizedAdvice: 'Retroalimentación grupal después de cada sesión.',
    },
  ];

  return (
    <div className="cursos-container">
      <h1 className="cursos-title">Formaciones</h1>
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
