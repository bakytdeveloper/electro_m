import React from 'react';
import './Contact.css'; // Создайте файл стилей для этого компонента
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

function Contact() {
    const phoneNumber = '+996700517582'; // Замените этот номер телефона на ваш реальный номер

    const handlePhoneCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleWhatsApp = () => {
        // Здесь можно добавить логику для отправки сообщения через WhatsApp
        // В данном примере, мы просто откроем WhatsApp в новой вкладке
        window.open(`https://wa.me/${phoneNumber}`);
    };

    return (
        <section className="contact">
            <hr/>
            <h2>Контакты</h2>
            <div className="contact-info">
                <div className="phone">
                    <FaPhone className="icon" />
                    <a href={`tel:${phoneNumber}`} onClick={handlePhoneCall}>
                        {phoneNumber}
                    </a>
                </div>
                <div className="whatsapp" onClick={handleWhatsApp}>
                    <FaWhatsapp className="icon" />
                    <span>WhatsApp</span>
                </div>
            </div>
        </section>
    );
}

export default Contact;
