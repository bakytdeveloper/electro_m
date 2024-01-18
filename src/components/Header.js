// components/Header.js
import React from 'react';

const Header = ({ openModal }) => {
    return (
        <header>
            <div className="header-bg">
                <h1>Ваше Имя</h1>
                <nav>
                    <ul>
                        <li><a href="#about">О нас</a></li>
                        <li><a href="#portfolio" onClick={openModal}>Портфолио</a></li>
                        <li><a href="#contact">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
