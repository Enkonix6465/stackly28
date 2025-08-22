import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // Make sure this is imported at the top


import "./AboutUs.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";
import aboutvideo from "../images/aboutvideo.mp4";
import ovm from "../images/ovm.jpg";
import ov from "../images/ov.jpg";
import om from "../images/om.jpg";
import og from "../images/og.jpg";

import ourstory from "../images/ourstory.jpg";



function AboutUs() {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  const sectionRef = useRef(null);

  const handleGetStarted = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".card");

    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }

    function animateCards() {
      if (isInViewport(sectionRef.current)) {
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("animate");
          }, index * 200);
        });
        window.removeEventListener("scroll", animateCards);
      }
    }

    animateCards();
    window.addEventListener("scroll", animateCards);

    return () => {
      window.removeEventListener("scroll", animateCards);
    };
  }, []);

  const reasonsData = [
    {
      id: 1,
      title: "Expertise You Can Trust",
      description:
        "Our team consists of industry veterans with decades of combined experience across multiple business sectors.",
      progress: 95,
    },
    {
      id: 2,
      title: "Customized Strategies",
      description:
        "We don’t believe in one-size-fits-all. Every solution is tailored to your unique business challenges and goals.",
      progress: 90,
    },
    {
      id: 3,
      title: "Proven Results",
      description:
        "We deliver measurable outcomes that help businesses grow, optimize, and lead their markets.",
      progress: 92,
    },
    {
      id: 4,
      title: "Innovative Technologies",
      description:
        "Leveraging cutting-edge digital tools and analytics to provide actionable insights and accelerate growth.",
      progress: 88,
    },
  ];

  const [activeId, setActiveId] = useState(null);
  const progressRefs = useRef([]);

  useEffect(() => {
    function animateProgress() {
      progressRefs.current.forEach((bar, index) => {
        if (bar) {
          bar.style.width = reasonsData[index].progress + "%";
        }
      });
    }

    function isInViewport(el) {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }

    if (isInViewport(progressRefs.current[0])) {
      animateProgress();
      window.removeEventListener("scroll", animateProgress);
    } else {
      window.addEventListener("scroll", animateProgress);
    }

    return () => window.removeEventListener("scroll", animateProgress);
  }, [reasonsData]);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote:
        "Their consulting expertise transformed our business strategy. We gained clarity, focus, and measurable growth in just months.",
      name: "Aishwrya K.",
      img: "https://i.pinimg.com/736x/dd/fc/ac/ddfcac65a67bc5ed50019958e99acfdd.jpg",
    },
    {
      id: 2,
      quote:
        "The team provided personalized solutions that aligned perfectly with our company goals and culture. Highly recommend their services.",
      name: "Mohammad .",
      img: "https://i.pinimg.com/1200x/52/ab/34/52ab34f9d702a8d2ce624e8ed27111c9.jpg",
    },
    {
      id: 3,
      quote:
        "From digital transformation to operational improvements, their insights helped us innovate and streamline processes effectively.",
      name: "shreya S.",
      img: "https://i.pinimg.com/736x/ec/a5/bd/eca5bdf288baf3d4645f8a2f40a64ed0.jpg",
    },
    {
      id: 4,
      quote:
        "Professional, proactive, and results-driven consultants who truly care about delivering business value and client success.",
      name: "Thomas R.",
      img: "https://i.pinimg.com/736x/ec/c9/ce/ecc9cee1b24de7ebcbfbabd9def1b1f2.jpg",
    },
  ];

  // Use the same testimonials for centered section (or customize if needed)
  const centeredTestimonials = testimonials;

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Section 1 - Hero */}
      <section className="hero">
        <video
          className="hero-video"
          src={aboutvideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="hero-overlay">
          <h1>About Us</h1>
          <p>
            Partner with us to transform your ideas into innovative solutions
            that drive lasting success
          </p>
        </div>
      </section>

      {/* Section 2 - Our Story */}
     <section className="our-story-section">
  <div className="content-wrapper">
    <h1>Our Story</h1>
    <p>
      We are a team of dedicated business consultants focused on delivering
      innovative solutions to help your company thrive in a rapidly evolving
      market. Our expertise spans strategic planning, digital transformation,
      and operational excellence. By understanding your unique challenges, we
      craft tailored strategies that drive growth, efficiency, and competitive
      advantage — empowering your business to succeed in today's dynamic
      landscape.
    </p>

    {/* CTA Button */}
    
<Link to="/services" className="story-btn">Know More</Link>
  </div>

  <div className="image-wrapper">
    <img src={ourstory} alt="Business Consulting" />
  </div>
</section>


      {/* Section 4 - Vision & Mission */}
      <section className="vision-mission-section" ref={sectionRef}>
        <div className="header-bg">
          <h2>Vision & Mission</h2>
        </div>
        <div className="cards-container">
          <div className="card">
            <img src={ov} alt="Vision Icon" className="icon" />
            <h3>Vision</h3>
            <p>
              To be the most trusted and preferred real estate partner,
              delivering premium villas, apartments, and commercial properties
              that redefine modern living.
            </p>
          </div>
          <div className="card">
            <img src={om} alt="Mission Icon" className="icon" />
            <h3>Mission</h3>
            <p>
              To connect people with their dream properties by offering
              transparent services, innovative designs, and personalized
              solutions tailored to every lifestyle and budget.
            </p>
          </div>
          <div className="card">
            <img src={og} alt="Goal Icon" className="icon" />
            <h3>Goal</h3>
            <p>
              To create sustainable, customer-focused communities that combine
              luxury, comfort, and convenience, ensuring long-term value for our
              clients.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Why Choose Us */}
      <section className={darkMode ? "why-choose-us dark-mode" : "why-choose-us"}>
        <h2 className="section-title">Why Choose Us</h2>
        <div className="reasons-container">
          {reasonsData.map(({ id, title, description, progress }) => (
            <div
              key={id}
              className={`reason-card ${activeId === id ? "active" : ""}`}
              onClick={() => setActiveId(activeId === id ? null : id)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") setActiveId(activeId === id ? null : id);
              }}
              role="button"
              aria-expanded={activeId === id}
            >
              <div className="reason-header">
                <h3>{title}</h3>
                <div className="progress-bar-bg" aria-label={`${title} progress`}>
                  <div
                    className="progress-bar-fill"
                    ref={(el) => (progressRefs.current[id - 1] = el)}
                    style={{ width: "0%" }}
                  >
                    <span className="progress-text">{progress}%</span>
                  </div>
                </div>
              </div>
              {activeId === id && <p className="reason-description">{description}</p>}
            </div>
          ))}
        </div>
      </section>



      {/* New Section - Consulting Testimonials */}
      <section className="consulting-testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            
            <h2>What Our Clients Says</h2>
            <p className="intro-text">
              We are proud to have helped businesses across various industries optimize their strategies and achieve their goals through tailored consulting solutions: Our commitment to excellence, transparent dealings, and personalized service has earned us the trust of clients worldwide. From startups to established enterprises, our clients consistently praise our team’s dedication, market knowledge, and ability to deliver results.
            </p>
          </div>

          <div className="testimonials-cards">
            {testimonials.map(({ id, quote, name, img }) => (
              <div key={id} className="testimonial-card">
                <p className="quote">“{quote}”</p>
                <div className="client-info">
                  <img src={img} alt={name} className="client-photo" />
                  <strong className="client-name">{name}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="centered-testimonial-section">
        
        <h2 className="section-title">Words from Our Clients</h2>

        {centeredTestimonials.map(({ id, quote, name, img }) => (
          <div key={id} className="centered-testimonial">
            <p className="quote">“{quote}”</p>
            <div className="testimonial-author">
              <img src={img} alt={name} className="author-img" />
              <span className="author-name">{name}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default AboutUs;
