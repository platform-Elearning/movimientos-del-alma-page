import React, { useState } from 'react';
import './faqs.css';
import masIcon from '../../assets/masIco.png'; // Imagen de Casa Central
import ButtonVacio from '../../components/buttonVacio/ButtonVacio';
import downloadIcon from '../../assets/download.png'; // Imagen de Casa Central

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: '¿Hay que tener algún conocimiento para comenzar?',
            answer: 'No es necesario tener conocimientos previos! Dependiendo el nivel del alumno, se seleccionará el grupo adecuado, adaptando los ejercicios y la dificultad de la clase al nivel de cada uno.'
        },
        {
            question: '¿Las clases para qué edad son?',
            answer: 'Contamos con clases para niños a partir de los 3 años, además de clases para juveniles y adultos, por lo que la edad no es un inconveniente.'
        },
        {
            question: '¿Se puede probar una clase antes de inscribirse?',
            answer: 'Sí, podés probar una clase abonando su valor. Si decidís continuar, ese monto se descuenta de la primera cuota.'
        },
        {
            question: '¿Cuáles son las formas de pago?',
            answer: 'Aceptamos pagos en efectivo, transferencia bancaria y algunas plataformas digitales. Consultá en tu sede más cercana para más detalles.'
        },
        {
            question: '¿Cómo hago para comenzar?',
            answer: 'Lo primero es comunicarte con cualquiera de nuestras sedes para recibir información sobre horarios y clases disponibles. Luego, se debe abonar una matrícula anual y la cuota mensual según la disciplina elegida.'
        },
        {
            question: '¿Puedo inscribirme en más de una disciplina?',
            answer: 'Sí, podés combinar distintas clases y disciplinas dentro de nuestras sedes. Consultanos para conocer los paquetes disponibles.'
        },
        {
            question: '¿Puedo cambiar de sede si me mudo o mi disponibilidad cambia?',
            answer: 'Sí, podés cambiar de sede si hay cupo disponible en la clase que te interesa.'
        },
        {
            question: '¿Qué ropa o indumentaria necesito para las clases?',
            answer: 'Dependiendo de la disciplina, te sugerimos ropa cómoda, zapatillas deportivas o zapatillas de danza específicas. Te daremos detalles sobre la vestimenta recomendada una vez que te inscribas.'
        },
        {
            question: '¿Realizan presentaciones o muestras de fin de año?',
            answer: 'Sí, cada año organizamos una muestra de danza donde nuestros alumnos pueden demostrar lo aprendido en el escenario. También participamos en eventos y competencias para quienes quieran llevar su formación más allá.'
        }
    ];

    return (
        <div className="faqs-container">
            <h1>Todo lo que necesitas saber</h1>
            <ButtonVacio text="Descargar reglamento" icon={downloadIcon} /> {/* Ícono agregado */}
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => toggleFAQ(index)}
                >
                    <img src={masIcon} alt="Más" className="icon" /> {/* Ícono PNG */}
                    <div className="content">
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faqs;
