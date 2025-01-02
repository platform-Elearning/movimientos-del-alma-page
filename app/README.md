# Secciones


# AlumnosMaestros

El componente `AlumnosMaestros` es un componente funcional de React que muestra un título y un video de YouTube incrustado.

### Uso

```jsx
import AlumnosMaestros from './AlumnosMaestros';

const App = () => (
  <div>
    <AlumnosMaestros />
  </div>
);

export default App;
```

### Propiedades
---
Este componente no recibe ninguna propiedad.

Estructura
1. div.alumnos-maestros-container: Contenedor principal del componente.
2. h2.alumnos-maestros-title: Título del componente.
3. span: Parte del título.
div.alumnos-maestros-card: Contenedor del video.
4. iframe: Video de YouTube incrustado.

#### Estilos
---
Los estilos para este componente se encuentran en el archivo 

    "./AlumnosMaestros.css"

#### Ejemplo
---

```jsx
import React from "react";
import AlumnosMaestros from "./AlumnosMaestros";

const App = () => (
  <div>
    <AlumnosMaestros />
  </div>
);

export default App
```
---
# Conocenos

El componente `Conocenos` es un componente funcional de React que muestra información sobre la historia y expansión de la organización "Movimientos del Alma" (MDA).

### Uso

```jsx
import Conocenos from './Conocenos';

const App = () => (
  <div>
    <Conocenos />
  </div>
);

export default App;
```
### Propiedades
---
Este componente no recibe ninguna propiedad.

### Estructura
1. div.conocenos-container: Contenedor principal del componente.
2. h1.conocenos-title: Título principal del componente.
3. div.conocenos-content: Contenedor del contenido textual.
4. p.conocenos-paragraph: Párrafos que describen la historia y misión de MDA.
5. div.timeline: Línea de tiempo que muestra los hitos importantes de la organización.
6. div.timeline-event: Evento individual en la línea de tiempo.
7. div.timeline-dot: Punto que marca el evento en la línea de tiempo.
8. div.timeline-content: Contenido del evento, incluyendo el año y la ubicación.
9. img.timeline-image: Imágenes relacionadas con los eventos de la línea de tiempo.
---

#### Estilos
Los estilos para este componente se encuentran en el archivo 
    
    './Conocenos.css'

#### Ejemplo
---

```jsx
import React from 'react';
import Conocenos from './Conocenos';

const App = () => (
  <div>
    <Conocenos />
  </div>
);

export default App;
```
---

# Cursos

El componente `Cursos` es un componente funcional de React que muestra una lista de cursos ofrecidos por el Instituto de Formación Internacional.

### Uso

```jsx
import Cursos from './Cursos';

const App = () => (
  <div>
    <Cursos />
  </div>
);

export default App;
```

### Propiedades

Este componente no recibe ninguna propiedad directamente, pero utiliza un array de objetos 

_courses_

 que contiene la información de cada curso.

### Estructura

 
1. div.cursos-container: Contenedor principal del componente.
 
2. h1.cursos-title: Título principal del componente.

3. div.cursos-grid: Contenedor de la cuadrícula de cursos.

4. CardCourse: Componente que representa un curso individual. Se le pasan las siguientes propiedades:   
    
   * key: Índice del curso en el array.
   * imageSrc: URL de la imagen del curso.
   * title: Título del curso.
   * duration: Duración del curso.
   * modality: Modalidad del curso (presencial, online, etc.).
   * description: Descripción del curso.
   * modules: Módulos del curso.
   * recordedClasses: Clases grabadas del curso.
   * liveClasses: Clases en vivo del curso.
   * personalizedAdvice: Asesoramiento personalizado del curso.
---
### Estilos

Los estilos para este componente se encuentran en el archivo 

    './Cursos.css'


### Ejemplo
----

```jsx
import React from 'react';
import Cursos from './Cursos';

const App = () => (
  <div>
    <Cursos />
  </div>
);

export default App;
```
----

# VideoSection

El componente `VideoSection` es un componente funcional de React que muestra una sección de video con un título, una imagen y un video que se reproduce al hacer clic.

### Uso

```jsx
import VideoSection from './videoSection';

const App = () => (
  <div>
    <VideoSection 
      title="Título del Video" 
      imageSrc="ruta/a/la/imagen.jpg" 
      videoSrc="ruta/al/video.mp4" 
    />
  </div>
);

export default App;
```
---

# Propiedades
* title (string): El título de la sección de video.
* imageSrc (string): La URL de la imagen que se muestra antes de reproducir el video.
* videoSrc (string): La URL del video que se reproducirá.
---

### Estructura
- div.video-section: Contenedor principal del componente.
  - h1.video-section-title: Título de la sección de video.
  - div.video-section-content: Contenedor del contenido de la sección de video.
    - img.video-section-image: Imagen que se muestra antes de reproducir el video.
    - div.video-placeholder: Contenedor del placeholder del video.
      * button.video-play-button: Botón para reproducir el video.
      * video.video-player: Elemento de video que se reproduce al hacer clic en el botón.
---

### Estado

* isVideoPlaying (boolean): Estado que indica si el video se está reproduciendo.
---

### Métodos
* handlePlayClick: Función que se ejecuta al hacer clic en el botón de reproducción, cambiando el estado isVideoPlaying a true.

---

### Estilos
Los estilos para este componente se encuentran en el archivo 

    './videoSection.css'

#### Ejemplo
----

```jsx
import React from 'react';
import VideoSection from './videoSection';

const App = () => (
  <div>
    <VideoSection 
      title="Título del Video" 
      imageSrc="ruta/a/la/imagen.jpg" 
      videoSrc="ruta/al/video.mp4" 
    />
  </div>
);

export default App;
```



# Estructura visual de los componentes en la pagina 
## En las siguientes lineas verán la estructura de manera visual, utilizando Excalidraw. 


### Estructura de los botones
#### Codigo del componente


 Button.jsx
import React from "react";
import "./Button.css";

const Button = ({ text = "Button", onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;


![Estructura de los botones](/movimientos-del-alma-page/Architecture/botonExplicado.png)

### Estructura de la cartas

#### Codigo del componente

import React, { useState } from 'react';
import './CardCourse.css';
import Button from '../button/Button';
import ButtonVacio from '../buttonVacio/ButtonVacio';
import liveImage from '../../assets/live.png';
import book from '../../assets/book.png';
import person from '../../assets/person.png';
import video from '../../assets/video.png';

const CardCourse = ({
  imageSrc,
  title,
  duration,
  modality,
  description,
  modules,
  recordedClasses,
  liveClasses,
  personalizedAdvice,
}) => {
  // Estado para controlar si la tarjeta está volteada
  const [isFlipped, setIsFlipped] = useState(false);

  // Alternar el estado de volteo
  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="card-course" onClick={toggleFlip}>
      <div className={`card-course-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Lado Frontal */}
        <div className="card-course-front">
          <img src={imageSrc} alt={title} className="card-course-image" />
          <h3 className="card-course-title">{title}</h3>
          <p className="card-course-duration">
            <img src={video} alt="Duration" className="card-course-icon" /> {duration}
          </p>
          <p className="card-course-modality">
            <img src={liveImage} alt="Modality" className="card-course-icon" /> {modality}
          </p>
          <div className="buttonDiv">
            <Button text="Leer más" />
          </div>
        </div>

        {/* Lado Trasero */}
        <div className="card-course-back">
          <p className="card-course-description">{description}</p>
          <ul className="card-course-details">
            <li>
              <img src={book} alt="Modules" className="card-course-icon" /> {modules} módulos.
            </li>
            <li>
              <img src={video} alt="Recorded Classes" className="card-course-icon" /> {recordedClasses} clases grabadas al mes.
            </li>
            <li>
              <img src={liveImage} alt="Live Classes" className="card-course-icon" /> {liveClasses} clase en vivo al mes.
            </li>
            <li>
              <img src={person} alt="Personalized Advice" className="card-course-icon" /> {personalizedAdvice}
            </li>
          </ul>
          <Button text="Inscribirme" />
          <ButtonVacio text="Descargar info" />
        </div>
      </div>
    </div>
  );
};

export default CardCourse;


![Estructura de las cartas](/movimientos-del-alma-page/Architecture/card.png)
