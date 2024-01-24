import React, { useState } from 'react';
import Modal from 'react-modal';
import placeholder1 from "./../../images/placeholder1.jpg";
import placeholder2 from "./../../images/placeholder2.jpg";
import placeholder3 from "./../../images/placeholder3.jpg";
import placeholder4 from "./../../images/placeholder4.jpg";
import placeholder5 from "./../../images/placeholder5.jpg";
import './ModalGallery.css';

function ModalGallery({ isOpen, closeModal }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        placeholder1,
        placeholder2,
        placeholder3,
        placeholder4,
        placeholder5,

        // Добавьте другие URL-адреса изображений
    ];

    const totalSlides = images.length;

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Modal Gallery"
            className="modal-gallery"
            overlayClassName="modal-overlay"
        >
            <div className="modal-content">
                <div className="modal-header">
                    <h2 >Портфолио</h2>
                    <button className="btnClose" onClick={closeModal}>
                        &#x2715;
                    </button>
                </div>

                <div className="modal-body">
                    <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
                </div>

                <div className="modal-footer">
                    <button onClick={goToPrevSlide}>&lt;</button>
                    <button onClick={goToNextSlide}>&gt;</button>
                </div>
            </div>
        </Modal>
    );
}

export default ModalGallery;