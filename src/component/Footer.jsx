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
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Me</h4>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
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
