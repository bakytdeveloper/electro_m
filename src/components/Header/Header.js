// // import React from 'react';
// // import { FaWhatsapp } from 'react-icons/fa';
// // import './Header.css';
// //
// // function Header({ openModal }) {
// //     return (
// //         <header className="header">
// //             <div className="overlay"></div>
// //             <div className="header-content">
// //                 <h1>Your Name or Company Name</h1>
// //                 <nav>
// //                     <a href="tel:+123456789"><FaWhatsapp /> +123456789</a>
// //                     <button onClick={openModal}>Портфолио</button>
// //                 </nav>
// //             </div>
// //         </header>
// //     );
// // }
// //
// // export default Header;
//
//
//
//
//
// import React from 'react';
// import {FaPhone, FaWhatsapp} from 'react-icons/fa';
// import './Header.css';
//
// function Header({ openModal }) {
//
//     const phoneNumber = '+996700517582'; // Замените этот номер телефона на ваш реальный номер
//
//     const handlePhoneCall = () => {
//         window.location.href = `tel:${phoneNumber}`;
//     };
//
//     const handleWhatsApp = () => {
//         // Здесь можно добавить логику для отправки сообщения через WhatsApp
//         // В данном примере, мы просто откроем WhatsApp в новой вкладке
//         window.open(`https://wa.me/${phoneNumber}`);
//     };
//
//     return (
//         <header className="header">
//             <div className="overlay"></div>
//             <div className="header-content">
//                 <h1>ОсОО "ЭНЕРГО ЭКСПРЕСС"</h1>
//                 <nav>
//                   {/*<div style={{marginTop: "55px", marginBottom: "-15px"}}>*/}
//                   {/*  <button onClick={openModal}>*/}
//                   {/*      <span className="portfolio">Портфолио</span>*/}
//                   {/*  </button>*/}
//                   {/*</div>*/}
//                     <div className="contact-info">
//                         <div className="phone">
//                             <FaPhone className="icon" />
//                             <a  style={{color: "white"}} href={`tel:${phoneNumber}`} onClick={handlePhoneCall}>
//                                 {phoneNumber}
//                             </a>
//                         </div>
//                         <div className="whatsapp" onClick={handleWhatsApp}>
//                             <FaWhatsapp className="icon" />
//                             <span style={{color: "white"}}>WhatsApp</span>
//                         </div>
//                     </div>
//
//
//                     <div className="btnPortfolio">
//                         <button onClick={openModal}>
//                             <span className="portfolio">Портфолио</span>
//                         </button>
//                     </div>
//
//
//
//                 </nav>
//             </div>
//         </header>
//     );
// }
//
// export default Header;


import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import './Header.css'; // Создайте файл стилей Header.css

function Header() {
    const phoneNumber = '996701152020'; // Замените этот номер телефона на ваш реальный номер

    const handlePhoneCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleWhatsApp = () => {
        window.open(`https://wa.me/${phoneNumber}`);
    };

    return (
        <header className="header">
            <div className="overlay"></div>
            <div className="header-content">
                <div className="title-quote">
                    <h1>ОсОО "<span>ЭНЕРГО</span> ЭКСПРЕСС"</h1>
                    <p className="p-title">"За нами, светлое будущее"</p>
                </div>
                <nav className="nav-container">
                    <div className="contact-info">
                        <div className="phone">
                            <FaPhone style={{fontSize: "22px"}} className="icon" />
                            <a style={{color: "white"}} href={`tel:${phoneNumber}`} onClick={handlePhoneCall}>
                                +996 701 15 20 20
                            </a>
                        </div>
                        <div className="whatsapp" onClick={handleWhatsApp}>
                            <FaWhatsapp className="icon" />
                            <span style={{color: "white"}}>WhatsApp</span>
                        </div>
                    </div>
                    {/*<div className="btnPort">*/}
                    {/*    /!*<span>Наша Работа:</span>*!/*/}
                    {/*    <button  className="btnPortfolio" onClick={openModal}>*/}
                    {/*        Посмотрите портфолио*/}
                    {/*        /!*<span className="portfolio"> Посмотрите портфолио </span>*!/*/}
                    {/*    </button>*/}
                    {/*</div>*/}


                </nav>



            </div>


        </header>
    );
}

export default Header;
