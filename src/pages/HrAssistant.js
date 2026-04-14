import React from 'react';
import { Link } from 'react-router-dom';

function HrAssistant() {
  const features = [
    'Automated Resume Screening',
    'AI-powered Job Compatibility Analysis',
    'Admin Panel for HR Managers',
    'Applicant Scoring System',
    'Built with Python and Flask',
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
              src="https://hr-assistant-app-by-samad.netlify.app/"
              title="HR Assistant Demo"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="project-info">
          <h1 className="project-title">SamadMatchAI HR ASSISTANT</h1>

          <div className="project-tech">
            <span className="tech-tag">REACT</span>
            <span className="tech-tag">JAVASCRIPT</span>
            <span className="tech-tag">TAILWIND CSS</span>
          </div>

          <p className="project-description">
            An intelligent HR tool named as SamadMatchAI designed for automated resume screening and job compatibility analysis using AI.
            It simplifies the recruitment process by analyzing candidates and scoring them against job requirements.
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
            <a href="https://hr-assistant-app-by-samad.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">
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

export default HrAssistant;
