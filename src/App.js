// import React, { useState } from 'react';
// import Header from './components/Header/Header';
// import About from './components/About';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import ModalGallery from './components/ModalGallery/ModalGallery';
// import './App.css';
//
// function App() {
//     const [modalIsOpen, setModalIsOpen] = useState(false);
//     const openModal = () => setModalIsOpen(true);
//     const closeModal = () => setModalIsOpen(false);
//
//     return (
//         <div className="container">
//             <Header openModal={openModal} />
//             <About />
//             <Services />
//             <Contact />
//             <ModalGallery isOpen={modalIsOpen} closeModal={closeModal} />
//         </div>
//     );
// }
//
// export default App;



import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import ModalGallery from './components/ModalGallery/ModalGallery';
import './App.css';
import Modal from 'react-modal';
import Features from "./components/Features/Features";

function App() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    // Установка корневого элемента для react-modal
    useEffect(() => {
        Modal.setAppElement('#root');
    }, []);

    return (
        <div className="container">
            <Header />

            <Services />
            <Features />
            <About  openModal={openModal} />
            <Contact />
            <ModalGallery isOpen={modalIsOpen} closeModal={closeModal} />
        </div>
    );
}

export default App;



