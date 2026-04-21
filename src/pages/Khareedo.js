import React from 'react';
import { Link } from 'react-router-dom';

function Khareedo() {
  const features = [
    'Khareedo.PK a realtime marketplace for buying and selling products',
    'User Authentication via Firebase',
    'Product listing with image uploads',
    'Category-based filtering (Mobiles, Cars, etc.)',
    'Real-time database integration',
    'Responsive design with Tailwind CSS',
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
              src="https://khareedo-pk.netlify.app/"
              title="Khareedo.pk Demo"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="project-info">
          <h1 className="project-title">KHAREEDO.PK</h1>

          <div className="project-tech">
            <span className="tech-tag">REACT</span>
            <span className="tech-tag">FIREBASE</span>
            <span className="tech-tag">TAILWIND CSS</span>
            <span className="tech-tag">VITE</span>
          </div>

          <p className="project-description">
            A high-performance e commerece that allows users to buy and sell products across various categories. 
            Built with React and powered by Firebase, it features a seamless user experience for listing ads, 
            searching for products, and managing user profiles.
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
            <a href="https://khareedo-pk.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              Live Demo
            </a>
            <a href="https://github.com/samadaslamcodes" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <i className="fa-brands fa-github"></i>
              See Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Khareedo;
