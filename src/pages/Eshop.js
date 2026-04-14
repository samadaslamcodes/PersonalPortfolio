import React from 'react';
import { Link } from 'react-router-dom';

function Eshop() {
  const features = [
    'Modern e-commerce storefront',
    'Sleek purple gradient design',
    'Shopping functionality including Cart and Wishlist',
    'Product Categories and Order Management',
    'Fully Responsive Design',
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
              src="https://ecommercewebsite-nu-rose.vercel.app"
              title="E.SHOP Demo"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="project-info">
          <h1 className="project-title">E.SHOP SAMAD.IO</h1>

          <div className="project-tech">
            <span className="tech-tag">HTML</span>
            <span className="tech-tag">CSS</span>
            <span className="tech-tag">JAVASCRIPT</span>
          </div>

          <p className="project-description">
            A modern e-commerce storefront showcasing a sleek purple gradient design and full shopping functionality.
            Users can browse products, add them to wishlist or cart, and manage their orders.
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
            <a href="https://ecommercewebsite-nu-rose.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary">
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

export default Eshop;
