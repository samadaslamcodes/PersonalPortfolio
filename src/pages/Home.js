import React, { useEffect, useRef } from 'react';

function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    let typed;
    const initTyped = async () => {
      const Typed = (await import('typed.js')).default;
      if (typedRef.current) {
        typed = new Typed(typedRef.current, {
          strings: ['Web Developer', 'Front End Developer', 'Deep Learner', 'UI Designer'],
          typeSpeed: 50,
          backSpeed: 30,
          loop: true
        });
      }
    };
    initTyped();

    return () => {
      if (typed) {
        typed.destroy();
      }
    };
  }, []);

  return (
    <>
      <section className="main-work">
        <div className="first">
          <p className="hero-greeting">Hi There! 👋</p>
          <h1 className="hero-name">Abdul Samad</h1>
          <p className="hero-subtitle">I'm a passionate</p>
          <div className="typed-text">
            <span ref={typedRef}></span>
          </div>
        </div>
        <div className="second">
          <img className="hero-image" src="/assets/images/main.png" alt="Abdul Samad - Developer" />
        </div>
      </section>

      <div className="section-heading">
        <h2>Let Me <span className="highlight">INTRODUCE</span> Myself</h2>
      </div>

      <section className="aboutme">
        <div className="can1">
          <div className="about-card">
            <p className="about-text">
              I fell in love with <span className="highlight">programming</span> and I have at least learnt something, I think…
              🤷‍♂️
            </p>
            <p className="about-text">
              I am fluent in classics like <span className="highlight">Building Mern stack webistes using Technologies like React JS 
                , Firebase , MongoDB , Mobile App Dev Using React Native 
              </span>
            </p>
            <p className="about-text">
              I'm a 6th semester undergraduate in <span className="highlight">Bachelors of Computer Science</span>
            </p>
            <p className="about-text">
              Pursuing my <span className="highlight">Bachelors Degree</span> from <span className="highlight">Mohammad Ali Jinnah
                University</span>
            </p>
            <p className="about-text">
              In the future, I hope to bring the best out of me by cracking the best possibility of being a better <span
                className="highlight">FULL STACK DEVELOPER</span>
            </p>
          </div>
        </div>
        <div className="can2">
          <img className="about-image" src="/assets/images/pg2 pic.svg" alt="About illustration" />
        </div>
      </section>

      <section className="content">
        <h2 className="social-title">FIND ME ON</h2>
        <p className="social-subtitle">Feel free to <a href="#">connect</a> with me</p>
        <div className="social-icons">
          <a href="https://github.com/samadaslamcodes" className="social-icon" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#" className="social-icon" aria-label="Twitter">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="social-icon" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/samad_____20" className="social-icon" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="mailto:samadcodes57@gmail.com" className="social-icon" aria-label="Google">
            <i className="fa-brands fa-google"></i>
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;