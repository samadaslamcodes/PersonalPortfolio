import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section className="contact-section">
      <h1 className="contact-heading">Get in Touch ✨</h1>
      <p className="contact-subtext">Feel free to reach out by filling this form below.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your full name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email address" required />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="Enter subject" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
        </div>

        <button type="submit" className="submit-btn">
          <i className="fa-solid fa-paper-plane" style={{ marginRight: '8px' }}></i>
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;