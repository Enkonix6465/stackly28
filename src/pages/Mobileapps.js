import React from "react";
import "./Outsourcing.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";

import img2 from "../images/image2.jpg";
import app from "../images/app.jpg";

// Import talent grid images correctly
import ios from "../images/ios.jpg";
import ui from "../images/ui.jpg";
import and from "../images/and.jpg";
import mt from "../images/mt.jpg";
import pm from "../images/pm.jpg";

const talentItems = [
  {
    title: "iOS Developers",
    subtitle: "Building seamless and efficient iOS apps.",
    img: ios,
  },
  {
    title: "Android Developers",
    subtitle: "Expertise in Kotlin and Java for robust Android apps.",
    img: ui,
  },
  {
    title: "UI/UX Designers",
    subtitle: "Designing intuitive and engaging mobile experiences.",
    img: and,
  },
  {
    title: "QA Testers",
    subtitle: "Ensuring your app is bug-free and performs flawlessly.",
    img: mt,
  },
  {
    title: "Project Managers",
    subtitle: "Managing timelines and deliveries efficiently.",
    img: pm,
  },
];

function Outsourcing() {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <section className="hero">
        <img className="hero-video" src={img2} alt="Mobile Apps Development hero" />
        <div className="hero-overlay">
          <h1>Mobile Apps Development</h1>
        </div>
      </section>

      <section className="cloud-section">
        <div className="cloud-container">
          {/* Left Content */}
          <div className="cloud-content">
            <h2>Build High-Performance Mobile Apps Tailored to Your Needs</h2>
            <p>
              From concept to launch, we deliver custom mobile applications on both iOS and Android platforms. Our team blends innovation with usability to create apps that engage and delight users.
            </p>

            <ul className="cloud-features">
              <li>
                📱{" "}
                <span>
                  Cross-Platform Expertise – Native and hybrid app development.
                </span>
              </li>
              <li>
                🚀{" "}
                <span>Fast Delivery – Agile workflows ensure timely releases.</span>
              </li>
              <li>
                🔒{" "}
                <span>
                  Secure and Scalable – Built for growth with industry best practices.
                </span>
              </li>
            </ul>

            <button
              className="cloud-btn"
              onClick={() => handleGetStarted("/contact")}
            >
              Get Mobile App Solutions
            </button>
          </div>

          {/* Right Side Image */}
          <div className="cloud-image">
            <img src={app} alt="Mobile Apps Development" />
          </div>
        </div>
      </section>

      {/* Talent grid section */}
      <section className="talent-grid-section">
        <h2>Our Mobile App Development Expertise</h2>
        <div className="talent-grid">
          {talentItems.map(({ title, subtitle, img }, index) => (
            <div
              className="talent-item"
              key={index}
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="overlay">
                <div className="text-content">
                  <h4>{title}</h4>
                  <p>{subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="why-outsource">
        <h2>Why Choose Us for Your Mobile Apps?</h2>
        <div className="why-container">
          <div className="why-item">
            <h3>⚙️ Technical Excellence</h3>
            <p>
              Skilled developers using the latest tools and frameworks for flawless apps.
            </p>
          </div>
          <div className="why-item">
            <h3>🎯 User-Centered Design</h3>
            <p>
              Creating intuitive interfaces that provide outstanding user experiences.
            </p>
          </div>
          <div className="why-item">
            <h3>💡 Innovation Focus</h3>
            <p>
              Incorporating cutting-edge features like AI, AR, and real-time analytics.
            </p>
          </div>
        </div>
      </section>

      <section className="outsourcing-process">
        <h2>How We Develop Your Mobile App</h2>

        <div className="process-steps">
          <div className="step-line">
            <div className="step-number">1</div>
            <div className="step-info">
              <h4>Discover & Plan</h4>
              <p>
                Understand your app goals, target users, and business objectives.
              </p>
            </div>
          </div>

          <div className="step-line">
            <div className="step-number">2</div>
            <div className="step-info">
              <h4>Design & Develop</h4>
              <p>
                Craft UI/UX designs and develop the app with agile iterations.
              </p>
            </div>
          </div>

          <div className="step-line">
            <div className="step-number">3</div>
            <div className="step-info">
              <h4>Test & Launch</h4>
              <p>Perform comprehensive testing and deploy to app stores.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-mode-section">
        <div className="content">
          <h2>Questions about our mobile app services?</h2>
          <p>Contact us for a free consultation and let’s get started!</p>
        </div>
        <button className="call-btn">CALL FOR FREE CONSULTATION</button>
      </section>
    </div>
  );
}

export default Outsourcing;
