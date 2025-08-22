// src/pages/Services.js
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/Darkmodecontext";
import { Link } from "react-router-dom";

import "./Home.css";
import "./Services.css";
import videoser from "../images/videoser.mp4";
import services1 from "../images/services1.jpg";
import services2 from "../images/services2.jpg";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";

import helpingImg from "../images/helping.png";
import bulbImg from "../images/bulb.png";
import comboChartImg from "../images/combo chart.png";

const Services = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  // State to trigger animation when "What Sets Us Apart" section is in view
  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef(null);

  // State to trigger animation for circular rings section
  const ringsRef = useRef(null);
  const [animateRings, setAnimateRings] = useState(false);

  // State and quotes for Quote Carousel
  const [currentQuote, setCurrentQuote] = useState(0);
  const quotes = [
    {
      text: "Their innovative approach transformed our business model.",
      author: "CEO, TechCorp",
    },
    {
      text: "Reliable and professional services every time.",
      author: "Founder, StartUpX",
    },
    {
      text: "Helped us scale quickly with their talent outsourcing.",
      author: "HR Head, GrowthInc",
    },
  ];

  // Intersection Observer for "What Sets Us Apart" section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateProgress(true);
          observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Intersection Observer for Animated Circular Rings section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateRings(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ringsRef.current) {
      observer.observe(ringsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Quote carousel interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  const handleGetStarted = (path) => {
    navigate(path);
  };

 const serviceCards = [
  { title: "Outsourcing of Talent", img: image1, link: "/outsourcing" },
  { title: "Mobile Apps Development", img: image2, link: "/mobileapps" },
  { title: "Website Maintenance Service", img: image3, link: "/websiteservice" },
  { title: "Digital Strategy Consulting", img: image4, link: "/digitalstratagy" },
  { title: "Cloud Integration", img: image5, link: "/cloudintegration" },
  { title: "Customer Experience Solutions", img: image6, link: "/customersolutions" },
];


  const features = [
    {
      icon: <img src={helpingImg} alt="Helping" className="feature-icon" />,
      title: "Client-Centric Approach",
      description:
        "We prioritize your unique business needs to deliver tailored solutions that truly make an impact.",
      strength: 95,
    },
    {
      icon: <img src={bulbImg} alt="Bulb" className="feature-icon" />,
      title: "Innovative Strategies",
      description:
        "Our team leverages cutting-edge technology and forward-thinking to keep you ahead of the curve.",
      strength: 90,
    },
    {
      icon: <img src={comboChartImg} alt="Combo Chart" className="feature-icon" />,
      title: "Proven Results",
      description:
        "Our solutions consistently drive measurable growth and sustainable success for our clients.",
      strength: 92,
    },
  ];

  // Colors for circular rings for dark and light mode
  const ringBackgroundStroke = darkMode ? "#001f3f" : "#ddd"; // Dark Blue or Light Grey background stroke
  const ringTextColor = darkMode ? "#eee" : "#222";

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Hero Section */}
      <section className="hero">
        <video
          className="hero-video"
          src={videoser}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="hero-overlay">
          <h1>Our Services</h1>
          
        </div>
      </section>

      {/* Leadership Section */}
<section className="coaching-solutions-section">
  <div className="coaching-content-wrapper">
    <div className="coaching-images-wrapper">
      <img
        src={services1}
        alt="Consulting Team"
        className="coaching-image coaching-image-top"
      />
      <img
        src={services2}
        alt="Business Success"
        className="coaching-image coaching-image-bottom"
      />
    </div>

    <div className="coaching-text-content">
      <h2>Leadership and Team Coaching</h2>
      <p>
        Empower your leaders and strengthen your teams with our personalized coaching programs. We focus on developing effective leadership skills, improving communication, and fostering collaboration to drive productivity and engagement. Our tailored coaching helps unlock potential, resolve conflicts, and build resilient teams ready to face today’s business challenges.

        Our Leadership and Team Coaching services are designed to cultivate strong, confident leaders who inspire and motivate their teams. Through one-on-one and group coaching sessions, we help leaders develop critical skills such as emotional intelligence, strategic thinking, and decision-making. We also focus on enhancing team dynamics by promoting effective communication, trust-building, and conflict resolution. By fostering a culture of continuous learning and collaboration, we enable teams to perform at their highest potential. Our approach is tailored to your organization’s unique needs.
      </p>
    </div>
  </div>
</section>

{/* Services Boxes Section */}
<section className="core-solutions-heading">
  <h2>Our Core Business Solutions</h2>
  <p>
    Discover how our tailored services help modern businesses grow, scale,
    and stay competitive in a dynamic world.
  </p>
</section>

<section className="core-solutions-boxes">
  {serviceCards.map((service, index) => (
    <div className="core-solution-box" key={index}>
      <img src={service.img} alt={service.title} />
      <div className="core-box-overlay">
        <h3>{service.title}</h3>
        <Link to={service.link} className="core-box-arrow-link">
          <span className="core-box-arrow">→</span>
        </Link>
      </div>
    </div>
  ))}
</section>


      {/* What Sets Us Apart Section */}
     <section className="apart-section" ref={sectionRef}>
  <h2 className="apart-main-heading">What Sets Us Apart</h2>
  <p className="apart-subheading">
    Discover the unique strengths that empower our consulting and business
    solutions.
  </p>

  <div className="apart-features-container">
    {features.map(({ icon, title, description, strength }, index) => (
      <div className="apart-feature-card" key={index}>
        <div className="apart-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="apart-strength-bar">
          <div
            className="apart-progress"
            style={{
              width: animateProgress ? `${strength}%` : "0%",
              transition: "width 2s ease-in-out",
            }}
            aria-label={`${strength}% strength`}
          ></div>
        </div>
        <span className="apart-strength-value">{strength}%</span>
      </div>
    ))}
  </div>
</section>


    
    
    
    
      {/* Animated Circular Rings Section */}
<section ref={ringsRef} className={`exp-section ${darkMode ? "exp-dark" : "exp-light"}`}>
  <h2 className="exp-heading">Our Expertise in Numbers</h2>
  <div className="exp-rings-container">
    {[
      { label: "Talent Procure", percent: 85, color: "var(--ring-blue)" },
      { label: "Mobile Apps", percent: 75, color: "var(--ring-green)" },
      { label: "Web Support", percent: 90, color: "var(--ring-orange)" },
    ].map(({ label, percent, color }, idx) => (
      <div key={idx} className="exp-ring-wrapper">
        <svg viewBox="0 0 36 36" className="exp-ring-svg">
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke="var(--ring-bg)"
            strokeWidth="3"
          />
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeDasharray={animateRings ? `${percent}, 100` : "0, 100"}
            strokeLinecap="round"
            className="exp-ring-progress"
          />
        </svg>
        <div className="exp-ring-percent">{animateRings ? percent : 0}%</div>
        <p className="exp-ring-label">{label}</p>
      </div>
    ))}
  </div>
</section>

{/* Quote Carousel Section */}
<section className={`qc-carousel ${darkMode ? "qc-dark" : "qc-light"}`}>
  <p className="qc-quote-text">"{quotes[currentQuote].text}"</p>
  <p className="qc-quote-author">— {quotes[currentQuote].author}</p>
</section>


    </div>
  );
};

export default Services;
