import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setFeedback({ type: '', message: '' });

    // Initialize with your public key
    emailjs.init('yuiW3LvwXBRwyXzyx');

    const templateParams = {
      name: formRef.current.name.value,
      message: formRef.current.message.value,
      title: formRef.current.subject.value, // Mapping subject to title as requested
      email: formRef.current.email.value,
    };

    emailjs.send('service_x5o1wi5', 'template_ky75cp3', templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFeedback({ 
          type: 'success', 
          message: '✨ Message sent successfully! I will get back to you soon.' 
        });
        formRef.current.reset();
      }, (err) => {
        console.log('FAILED...', err);
        setFeedback({ 
          type: 'error', 
          message: '❌ Failed to send message. Please try again later or contact me directly at samadcodes57@gmail.com' 
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="contact-section">
      <h1 className="contact-heading">Get in Touch ✨</h1>
      <p className="contact-subtext">Feel free to reach out by filling this form below.</p>

      {feedback.message && (
        <div className={`form-feedback ${feedback.type}`}>
          {feedback.message}
        </div>
      )}

      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your full name" required disabled={isSending} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email address" required disabled={isSending} />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="Enter subject" required disabled={isSending} />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required disabled={isSending}></textarea>
        </div>

        <button type="submit" className="submit-btn" disabled={isSending}>
          <i className={`fa-solid ${isSending ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`} style={{ marginRight: '8px' }}></i>
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}

export default Contact;