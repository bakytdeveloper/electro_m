// components/About.js
import React from 'react';
import './About.css';

const About = ({openModal}) => {
    return (
        <section id="about" >
            <button  className="portfolio" onClick={openModal}>
                ПОРТФОЛИО
            </button>
        </section>
    );
};

export default About;
