import React from "react";
import logo from '../../images/logo.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <a href="/">
                    <img src={logo} alt="logo" className="logo"></img>
                </a>

                <div className="info">
                    <ul className="contact">
                        <li><i className="fa-solid fa-phone-volume"></i> +1-543-123-4567</li>
                        <li><i className="fa-regular fa-envelope"></i> example@fylo.com</li>
                    </ul>
                    <ul className="links">
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Jobs</a></li>
                        <li><a href="/">Press</a></li>
                        <li><a href="/">Blog</a></li>
                    </ul>
                    <ul className="links">
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">Terms</a></li>
                        <li><a href="/">Privacy</a></li>
                    </ul>
                    <ul className="social">
                        <li><a href="/"><i className="fa-brands fa-square-facebook"></i></a></li>
                        <li><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer