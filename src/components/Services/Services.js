import React from 'react';
import about from "./../../images/about.jpg";
import './Services.css'; // Создадим файл стилей для этого компонента

function Services() {
    return (
        <section className="services">
            <h2>О Компании</h2>
            <div className="service-item">
                <img style={{height: "150px"}} src={about} alt="Services" />
                <div className="service-info">
                    <p className="quote">
                        "Мы — эксперты в сфере электромонтажа и энергетики.
                        Наши профессиональные услуги включают в себя монтаж
                        и наладку электрооборудования, проведение лабораторных испытаний,
                        строительство линий электропередач и подстанций,
                        а также разработку проектно-сметной документации.
                        Наша команда предоставляет высококачественные решения,
                        обеспечивая надежность и эффективность в каждом проекте."
                        <span className="author"
                              style={{fontFamily: "initial",
                              fontWeight: "bold"}}> - Тюменбаев Мирбек Рахимович</span>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Services;
