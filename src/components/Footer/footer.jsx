import React from 'react';
import '../Footer/footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';


const footer = () => {
    return (
        <div className='footer-container'>
            <hr />
            <div className="footer">
                <div className="sosial-links">
                    <img src={Github} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>
            <div className="logo-f">
                <img src={Logo} alt="" />
                </div>
            </div>
            <div className="blur blur-footer-1"></div>
            <div className="blur blur-footer-2"></div>
        </div>
    )
}

export default footer