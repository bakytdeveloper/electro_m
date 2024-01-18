// components/Slider.js
import React, { useState } from 'react';

const Slider = ({ images, closeModal }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="slider-modal">
            <button className="close-button" onClick={closeModal}>&times;</button>
            <div className="slider">
                <button className="prev" onClick={prevImage}>&#8249;</button>
                <img className="modal-image" src={images[currentImage]} alt={`Work ${currentImage + 1}`} />
                <button className="next" onClick={nextImage}>&#8250;</button>
            </div>
        </div>
    );
};

export default Slider;
