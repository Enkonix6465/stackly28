import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Missing import
import { useDarkMode } from "../context/Darkmodecontext";
import cu from "../images/cu.jpg";
import contactvideo from "../images/contactvideo.mp4";

import "./ContactUs.css";


function ContactUs() {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <section className="hero">
        {/* Background video */}
        <video
          className="hero-video"
          src={contactvideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay content */}
        <div className="hero-overlay">
          <h1>Contact Us</h1>
          <p>
            Contact us today to schedule a consultation or to learn more
            about our services.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-card">
            <div className="icon-circle">📞</div>
            <h3>Make a Call</h3>
            <p>Sales: +233 456 789 788</p>
            <p>Service: +555-7890-123</p>
          </div>
          <div className="contact-card">
            <div className="icon-circle">✉️</div>
            <h3>Send Email</h3>
            <p>Support: stackly.com</p>
          </div>
          <div className="contact-card">
            <div className="icon-circle">📍</div>
            <h3>Visit Our Office</h3>
            <p>455 West Orchard Street</p>
            <p>Kings Mountain</p>
          </div>
          <div className="contact-card">
            <div className="icon-circle">💬</div>
            <h3>Live Chat</h3>
            <p>Instant support via chat</p>
            <p>Available 24/7</p>
          </div>
        </div>
      </section>

      <section className="contact-full">
        <div className="contact-left">
          <img src={cu} alt="Contact Us" />
        </div>

        {!submitted ? (
          <div className="contact-right" id="formContainer">
            <h2>Contact Us</h2>
            <form id="contactForm" onSubmit={handleSubmit}>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        ) : (
          <div className="contact-right success-box" id="successMessage" style={{ display: "flex" }}>
            <h2>✅ Submitted Successfully!</h2>
            <p>Thank you for reaching out. We’ll get back to you shortly.</p>
          </div>
        )}
      </section>

      <section className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.081042933356!2d-122.41941538468158!3d37.774929779759424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2f0f5f9b%3A0x5f3c4e20e6b82a43!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1702462820472!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <section className="contact-banner">
        <div className="contact-banner-content">
          <h2>Let’s Connect With Our Experts</h2>
          <p>
            We provide reliable IT solutions to drive your business forward.
            Reach out today!
          </p>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
