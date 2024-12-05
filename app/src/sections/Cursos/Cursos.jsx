import React from 'react';
import CardCourse from '../../components/CardCourse/CardCourse';
import './Cursos.css'; // Para tus estilos específicos de Cursos

// Importa las imágenes locales
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
  // Datos con las rutas locales de las imágenes
  const courses = [
    {
      imageSrc: img1,
      title: 'Instructurado de Ritmos latinos o caribeños',
      duration: '7 meses de formación.',
      modality: '100% Online',
      buttonText: 'Ver más',
      onButtonClick: () => alert('Curso de Ritmos clickeado'),
    },
    {
      imageSrc: img2,
      title: 'Instructorado en Danzas de Matriz Afro',
      duration: '10 meses de formación.',
      modality: '100% Online',
      buttonText: 'Inscribirse',
      onButtonClick: () => alert('Curso de Danzas Afro clickeado'),
    },
    {
      imageSrc: img3,
      title: 'Profesorado de Danza Tap',
      duration: '7 meses de formación.',
      modality: '100% Online',
      buttonText: 'Más info',
      onButtonClick: () => alert('Curso de Tap clickeado'),
    },
    {
      imageSrc: img4,
      title: 'Profesorado de Danza Contemporánea',
      duration: '2 meses de formación.',
      modality: '100% Online',
      buttonText: 'Ver detalles',
      onButtonClick: () => alert('Curso de Contemporánea clickeado'),
    },
    {
      imageSrc: img5,
      title: 'Profesorado de Danza Jazz',
      duration: '7 meses de formación.',
      modality: '100% Online',
      buttonText: 'Inscripción',
      onButtonClick: () => alert('Curso de Jazz clickeado'),
    },
    {
      imageSrc: img6,
      title: 'Profesorado de Danza Clásica',
      duration: '2 meses de formación.',
      modality: '100% Online',
      buttonText: 'Más detalles',
      onButtonClick: () => alert('Curso de Clásica clickeado'),
    },
    {
      imageSrc: img7,
      title: 'Composición Coreográfica',
      duration: '2 meses de formación.',
      modality: '100% Online',
      buttonText: 'Más detalles',
      onButtonClick: () => alert('Curso de Coreografía clickeado'),
    },
    {
      imageSrc: img8,
      title: 'Facilitador/a Danza Transpersonal-Nivel I',
      duration: '2 meses de formación.',
      modality: '100% Online',
      buttonText: 'Más detalles',
      onButtonClick: () => alert('Curso Transpersonal clickeado'),
    },
    {
      imageSrc: img9,
      title: 'Flexibilidad',
      duration: '2 meses de formación.',
      modality: '100% Online',
      buttonText: 'Más detalles',
      onButtonClick: () => alert('Curso de Flexibilidad clickeado'),
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
