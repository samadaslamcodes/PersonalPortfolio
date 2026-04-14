import React from 'react';
import { Link } from 'react-router-dom';

function SaltAndPepper() {
  const features = [
    'Responsive Design - Works on all devices',
    'Admin Panel - Order Tracking',
    'Modern UI - Elegant and appetizing visuals',
    'Menu Showcase - Detailed food categories',
    'Interactive Elements - Smooth hover effects',
  ];

  return (
    <section className="project-detail">
      <Link to="/projects" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
        Back to Projects
      </Link>

      <div className="project-hero">
        <div className="project-preview">
          <div className="demo-frame">
            <iframe
              src="https://salt-n-pepper-green.vercel.app/"
              title="Salt & Pepper Demo"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="project-info">
          <h1 className="project-title">Salt & Pepper</h1>

          <div className="project-tech">
            <span className="tech-tag">REACT</span>
            <span className="tech-tag">NODEJS</span>
            <span className="tech-tag">TAILWIND CSS</span>
          </div>

          <p className="project-description">
            A responsive restaurant website designed to showcase a delicious menu with a modern user interface.
            Features a clean layout, intuitive navigation, and an immersive visual experience for food lovers.
          </p>

          <ul className="project-features">
            {features.map((feature, index) => (
              <li key={index}>
                <i className="fa-solid fa-check-circle"></i>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="project-buttons">
            <a href="https://salt-n-pepper-green.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              Live Demo
            </a>
            <a href="https://github.com/samadaslamcodes/salt-n-pepper.git" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <i className="fa-brands fa-github"></i>
              See Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SaltAndPepper;