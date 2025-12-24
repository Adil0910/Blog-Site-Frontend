import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3 className="header-footer">NEXO</h3>
          <p>Sharing knowledge, ideas & stories.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Blogs</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Me</h4>
          <a href="https://www.linkedin.com/in/adil-ehtesham-3919a5309/">LinkedIn</a>
          <a href="https://github.com/Adil0910">GitHub</a>
          <a href="#">Twitter</a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} NEXO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
