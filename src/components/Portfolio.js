// // components/Portfolio.js
// import React, { useState } from 'react';
// import placeholder1 from './../images/placeholder1.jpg';
// import placeholder2 from './../images/placeholder2.jpg';
// import placeholder3 from './../images/placeholder3.jpg';
// import placeholder4 from './../images/placeholder4.jpg';
// import placeholder5 from './../images/placeholder5.jpg';
// import Modal from './Modal';
// import Slider from "./Slider";
//
// const images = [
//     // Пути к изображениям вашего портфолио
//     // Замените их реальными путями при добавлении изображений
//     placeholder1,
//     placeholder2,
//     placeholder3,
//     placeholder4,
//     placeholder5,
// ];
//
// const Portfolio = ({ closeModal }) => {
//
//     return (
//         <section id="portfolio">
//             <h2>Портфолио</h2>
//             <Slider images={images} closeModal={closeModal} />
//
//
//         </section>
//     );
// };
//
// export default Portfolio;




// components/Portfolio.js
import React from 'react';

const Portfolio = ({ openModal }) => {
    return (
        <section id="portfolio">
            <h2>Портфолио</h2>
            {/* Убираем кнопку "Посмотреть портфолио" из этой компоненты */}
        </section>
    );
};

export default Portfolio;
