import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  const skills = [
    { icon: 'fa-brands fa-html5', name: 'HTML 5' },
    { icon: 'fa-brands fa-css3-alt', name: 'CSS 3' },
    { icon: 'fa-brands fa-js', name: 'JavaScript' },
    { icon: 'fa-brands fa-square-js', name: 'TypeScript' },
    { icon: 'fa-brands fa-react', name: 'React' },
    { icon: 'fa-brands fa-react', name: 'React Native' },
    { icon: 'fa-solid fa-wind', name: 'Tailwind' },
    { icon: 'fa-solid fa-database', name: 'MySQL' },
    { icon: 'fa-brands fa-python', name: 'Python' },
    { icon: 'fa-solid fa-leaf', name: 'MongoDB' },
    { icon: 'fa-solid fa-fire', name: 'Firebase' },
    { icon: 'fa-brands fa-github', name: 'GitHub' },
  ];

  return (
    <>
      <section className="ban">
        <div className="working">
          <h2>Let me introduce <span className="highlight">Myself</span> <i className="fa-regular fa-face-smile-wink"></i></h2>
          <p>
            Hi everyone! This is <span className="highlight">Abdul Samad</span> from Karachi, Pakistan.
          </p>
          <p>
            I'm a <span className="highlight">Student</span> and currently an undergraduate in
            <span className="highlight">Bachelors of Computer Science</span> from Mohammad Ali Jinnah University.
          </p>
          <p>
            I have completed <span className="highlight">MERN Stack Development</span> from <span className="highlight">SMIT
              (Saylani Mass IT Training) 2024</span>.
          </p>
          <p>
            I'm extremely passionate about <span className="highlight">Web Development</span> and specialize in <span
              className="highlight">building modern applications</span>.
            Creating scalable and interactive user experiences is what I love doing. Coding is not just my skill – it's my
            passion! 💻🚀
          </p>
          <p>
            Besides coding, I enjoy:
          </p>
          <ul style={{ color: 'var(--text-secondary)', marginLeft: '20px', lineHeight: '2' }}>
            <li><span className="highlight">Play Football</span></li>
            <li><span className="highlight">Being with Friends</span></li>
            <li><span className="highlight">Watching Movies and Web Series</span></li>
          </ul>
        </div>
        <div className="imgsection">
          <img src="/assets/images/media.png" alt="Abdul Samad" />
        </div>
      </section>

      <div className="section-heading">
        <h2>Professional <span className="highlight">Skillset</span></h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <i className={`${skill.icon} skill-icon`}></i>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>

      <div className="projects-cta">
        <h2 style={{ color: 'white', marginBottom: '30px', fontFamily: 'var(--font-heading)' }}>
          Now move on to some of my recent projects 🚀
        </h2>
        <Link to="/projects" className="projects-btn">
          <i className="fa-solid fa-arrow-right"></i>
          View My Projects
        </Link>
      </div>
    </>
  );
}

export default About;