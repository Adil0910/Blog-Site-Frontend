// About.jsx
import React from 'react';

function About() {
  return (
    <div className='mai-ab'>
    <div className="about-container">
      <div className="about-left">
        <img 
          src="image/blog.jpeg" 
          alt="NEXO Blog" 
          className="about-img"
        />
      </div>
      <div className="about-right">
        <h2>About NEXO</h2>
        <p>
          Welcome to <strong>NEXO</strong>! This is your go-to blog for the latest in web development, 
          coding tutorials, and tech trends. Whether you're a beginner or an enthusiast, you'll find 
          insightful articles and hands-on projects here.
        </p>
        <p>
          At NEXO, we aim to make learning tech fun and practical. Stay connected for regular updates, 
          project showcases, and tips that help you level up your skills.
        </p>
      </div>
    </div></div>
  );
}

export default About;
