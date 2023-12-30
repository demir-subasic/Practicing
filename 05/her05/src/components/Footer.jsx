import React, { useEffect } from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    const unlisten = () => navigate(handleScrollToTop);

    unlisten(); // Odmah pozovi unlisten kako bi se registrovao handleScrollToTop

    return unlisten;
  }, [navigate]);

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="Footer Logo" />
        </div>
        <ul className="footer-menu">
          <li>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={() => window.scrollTo(0, 0)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/impact" onClick={() => window.scrollTo(0, 0)}>
              Impact
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="social-icons">
          <a href="https://www.facebook.com/" className="icon">
            <i>
              <FaFacebookF />
            </i>
          </a>
          <a href="https://www.instagram.com/" className="icon">
            <i>
              <FaInstagram />
            </i>
          </a>
          <a href="https://www.linkedin.com/" className="icon">
            <i>
              <FaLinkedin />
            </i>
          </a>
        </div>
        <p className="copyright">@2024 HERVeg.05, All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
