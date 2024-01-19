// import React from 'react';
// import { FaWhatsapp } from 'react-icons/fa';
// import './Header.css';
//
// function Header({ openModal }) {
//     return (
//         <header className="header">
//             <div className="overlay"></div>
//             <div className="header-content">
//                 <h1>Your Name or Company Name</h1>
//                 <nav>
//                     <a href="tel:+123456789"><FaWhatsapp /> +123456789</a>
//                     <button onClick={openModal}>Портфолио</button>
//                 </nav>
//             </div>
//         </header>
//     );
// }
//
// export default Header;





import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './Header.css';

function Header({ openModal }) {
    return (
        <header className="header">
            <div className="overlay"></div>
            <div className="header-content">
                <h1>ОсОО "ЭНЕРГО ЭКСПРЕСС"</h1>
                <nav>
                  <div style={{marginTop: "55px", marginBottom: "-15px"}}>
                    <button onClick={openModal}>Портфолио</button>
                  </div>
                    <div className="contact-info">
                        <a href="tel:+123456789"><FaWhatsapp /> +123456789</a>
                    </div>




                </nav>
            </div>
        </header>
    );
}

export default Header;
