import React from 'react';
import '../Css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="footer-description">
          Design outstanding interfaces with advanced Figma features in a matter
          of minutes.
        </p>
        <div className="footer-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-google"></i>
          <i className="fab fa-apple"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h4>START A BUSINESS</h4>
          <ul>
            <li>Features</li>
            <li>Solutions</li>
            <li>Integrations</li>
            <li>Enterprise</li>
            <li>Solutions</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>GOVERNMENT REGISTRATION</h4>
          <ul>
            <li>Partners</li>
            <li>Community</li>
            <li>Developers</li>
            <li>App</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>COMPLIANCE & TAX</h4>
          <ul>
            <li>Channels</li>
            <li>Scale</li>
            <li>Watch the Demo</li>
            <li>Our Competition</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>BIS & CDSCO</h4>
          <ul>
            <li>About Us</li>
            <li>News</li>
            <li>Leadership</li>
            <li>Media Kit</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <button className="back-to-top" aria-label="Back to Top">
          <span>&uarr;</span>
        </button>
        <p>&copy; 2024 Registerkaro. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
