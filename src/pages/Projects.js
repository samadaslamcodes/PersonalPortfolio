import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const projects = [
    {
      id: 'salt-n-pepper',
      title: 'Salt & Pepper',
      tech: ['React', 'NodeJS', 'Tailwind CSS'],
      description: 'A responsive restaurant website showcasing a delicious menu with a modern dark theme.',
      features: ['Responsive', 'Modern UI', 'Menu'],
      image: '/assets/images/salt-pepper-preview.png'
    },
    {
      id: 'hr-assistant',
      title: 'AI HR Assistant',
      tech: ['Python', 'Flask', 'AI/ML'],
      description: 'An intelligent HR tool for automated resume screening and job compatibility analysis using AI.',
      features: ['CV Analysis', 'Admin Panel', 'Scoring'],
      image: '/assets/images/hr-assistant-preview.png'
    },
    {
      id: 'eshop',
      title: 'E.SHOP SAMAD.IO',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description: 'A modern e-commerce storefront with a sleek purple gradient design and full shopping functionality.',
      features: ['Categories', 'Wishlist', 'Cart', 'Orders'],
      image: '/assets/images/eshop-preview.png'
    },
  ];

  return (
    <section className="projects-section" style={{ paddingTop: '100px' }}>
      <h1 className="projects-heading">My Recent Projects</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1rem' }}>
        Click on any project to view the demo and source code
      </p>

      <div className="projects-container">
        {projects.map((project) => (
          <Link
            to={`/projects/${project.id}`}
            className="project-card"
            key={project.id}
          >
            <div className="project-card-inner">
              <div className="project-card-image">
                <img src={project.image} alt={project.title} />
                <div className="project-card-overlay">
                  <div className="view-project-btn">
                    <i className="fa-solid fa-eye"></i>
                    View Project
                  </div>
                </div>
              </div>
              <div className="project-card-content">
                <h2 className="project-card-title">{project.title}</h2>
                <div className="project-card-tech">
                  {project.tech.map((t, i) => (
                    <span className="tech-badge" key={i}>{t}</span>
                  ))}
                </div>
                <p className="project-card-desc">{project.description}</p>
                <div className="project-card-features">
                  {project.features.map((feature, i) => (
                    <span className="feature-tag" key={i}>
                      <i className="fa-solid fa-check"></i> {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;