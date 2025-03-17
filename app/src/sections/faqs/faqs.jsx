import React, { useState } from 'react';
import './faqs.css';
import masIcon from '../../assets/masIco.png'; // Imagen de Casa Central

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: '¿Cómo y cuándo puedo inscribirme?',
            answer: 'Las inscripciones se pueden realizar mediante la web o WhatsApp. Para clases presenciales, contacta con la sede más cercana.'
        },
        {
            question: '¿Cuáles son los métodos de pago?',
            answer: 'Aceptamos tarjetas de crédito, transferencias bancarias y PayPal.'
        },
        {
            question: '¿Qué necesito para empezar?',
            answer: 'Necesitas una computadora con acceso a internet y ganas de aprender.'
        }
    ];

    return (
        <div className="faqs-container">
            <h1>Todo lo que necesitas saber</h1>
            <a href="/ruta/al/reglamento.pdf" download>Descargar Reglamento</a>
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