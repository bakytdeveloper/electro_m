// components/Modal.js
import React from 'react';
import ReactModal from 'react-modal';
import Slider from './Slider';

const Modal = ({ isOpen, closeModal, images }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className="modal-content"
            overlayClassName="modal-overlay"
            ariaHideApp={false}
        >
            <Slider images={images} closeModal={closeModal} />
        </ReactModal>
    );
};

export default Modal;
