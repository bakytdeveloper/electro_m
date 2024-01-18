// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './components/styles.css';
import Modal from "./components/Modal";


import placeholder1 from './images/placeholder1.jpg';
import placeholder2 from './images/placeholder2.jpg';
import placeholder3 from './images/placeholder3.jpg';
import placeholder4 from './images/placeholder4.jpg';
import placeholder5 from './images/placeholder5.jpg';

const App = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <Header openModal={openModal} />
            <main>
                <About />
                <Portfolio openModal={openModal} />
                <Contact />
            </main>
            <Modal isOpen={modalIsOpen} closeModal={closeModal}
                   images={[ placeholder1, placeholder2, placeholder3, placeholder4, placeholder5]} />
        </div>
    );
};

export default App;
