import React from 'react';
import './Features.css'; // Создадим файл стилей для этого компонента
import about1 from "./../../images/about1.jpg";
import about2 from "./../../images/about2.jpg";
import about3 from "./../../images/about3.jpg";
import about4 from "./../../images/about4.jpg";

function Features() {
    const featuresData = [
        {
            id: 1,
            image: about2,
            description: 'Эффективный монтаж и наладка оборудования',
        },
        {
            id: 2,
            image: about1,
            description: 'Лабораторные испытания с высокой точностью',
        },
        {
            id: 3,
            image: about4,
            description: 'Строительство ЛЭП и ПС по высшим стандартам',
        },
        {
            id: 4,
            image: about3,
            description: 'Профессиональная подготовка проектной документации',
        },
    ];

    return (
        <section className="features">
            <h2>Особенности наших услуг</h2>
            <div className="features-container">
                {featuresData.map((feature) => (
                    <div key={feature.id} className="feature-item">
                        <img src={feature.image} alt={`Feature ${feature.id}`} />
                        <p>{feature.description}</p>
                        <span className="checkmark">&#10004;</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;
