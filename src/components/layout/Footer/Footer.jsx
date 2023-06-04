import React from 'react';
import "./footer.scss"
const Footer = () =>
{
    return (
        <footer className="footer-distributed bg-slate-800">
            <div className="footer-left">
                <h3>Sun<span>FrontEnd</span></h3>

                <p className="footer-links">
                    <a href="#">Home</a>
                    |
                    <a href="#">About</a>
                    |
                    <a href="#">Contact</a>
                    |
                    <a href="#">Blog</a>
                </p>

                <p className="footer-company-name">Copyright © 2022 <strong>By Sun</strong> All rights reserved</p>
            </div>

            <div className="footer-center inline-block align-top">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <span className='text-white'>Sun</span>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+84 44833265</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:qnhat3103@gmail.com">qnhat3103@gmail.com</a></p>
                </div>
            </div>
            <div className="footer-right inline-block align-top">
                <p className="footer-company-about">
                    <span>About the company</span>
                    <strong>Sagar Developer</strong> is a Youtube channel where you can find more creative CSS Animations
                    and
                    Effects along with
                    HTML, JavaScript and Projects using C/C++.
                </p>
                <div className="footer-icons">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-youtube"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;