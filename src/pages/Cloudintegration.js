import React from "react";
import "./Outsourcing.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";

import img5 from "../images/image5.jpg";
import cin from "../images/cin.jpg";

// Import talent grid images correctly
import ms from "../images/ms.jpg";
import opm from "../images/opm.jpg";
import cd from "../images/cd.jpg";
import da from "../images/da.jpg";
import cs from "../images/cs.jpg";

const talentItems = [
  {
    title: "Cloud Migration",
    subtitle: "Seamless transition from on-premises to cloud infrastructure.",
    img: ms,
  },
  {
    title: "API Integration",
    subtitle: "Connecting your applications for efficient data flow.",
    img: opm,
  },
  {
    title: "Hybrid Cloud Solutions",
    subtitle: "Combining on-premises and cloud for flexibility and control.",
    img: cd,
  },
  {
    title: "Cloud Security",
    subtitle: "Implementing robust security protocols for your cloud environment.",
    img: da,
  },
  {
    title: "Monitoring & Support",
    subtitle: "24/7 cloud infrastructure monitoring and technical support.",
    img: cs,
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
        <img className="hero-video" src={img5} alt="Cloud Integration Services hero" />
        <div className="hero-overlay">
          <h1>Cloud Integration Services</h1>
        </div>
      </section>

      <section className="cloud-section">
        <div className="cloud-container">
          {/* Left Content */}
          <div className="cloud-content">
            <h2>Integrate and Optimize Your Cloud Infrastructure Seamlessly</h2>
            <p>
              Our cloud integration services enable your business to connect applications, data, and services for improved scalability, agility, and efficiency.
            </p>

            <ul className="cloud-features">
              <li>
                ☁️{" "}
                <span>
                  Scalable Solutions – Grow your infrastructure effortlessly with cloud technologies.
                </span>
              </li>
              <li>
                🔗{" "}
                <span>Reliable Connectivity – Ensure smooth integration across platforms and services.</span>
              </li>
              <li>
                🔒{" "}
                <span>
                  Secure Architecture – Protect your data with best-in-class security measures.
                </span>
              </li>
            </ul>

            <button
              className="cloud-btn"
              onClick={() => handleGetStarted("/contact")}
            >
              Get Cloud Integration Solutions
            </button>
          </div>

          {/* Right Side Image */}
          <div className="cloud-image">
            <img src={cin} alt="Cloud Integration Services" />
          </div>
        </div>
      </section>

      {/* Talent grid section */}
      <section className="talent-grid-section">
        <h2>Our Cloud Integration Expertise</h2>
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
        <h2>Why Choose Us for Cloud Integration?</h2>
        <div className="why-container">
          <div className="why-item">
            <h3>🚀 Proven Expertise</h3>
            <p>
              Experienced engineers delivering tailored cloud solutions for your business needs.
            </p>
          </div>
          <div className="why-item">
            <h3>🔍 Comprehensive Support</h3>
            <p>
              End-to-end management from planning to implementation and beyond.
            </p>
          </div>
          <div className="why-item">
            <h3>🔐 Security Focused</h3>
            <p>
              Security-first approach to protect your cloud assets and data.
            </p>
          </div>
        </div>
      </section>

      <section className="outsourcing-process">
        <h2>Our Cloud Integration Process</h2>

        <div className="process-steps">
          <div className="step-line">
            <div className="step-number">1</div>
            <div className="step-info">
              <h4>Assessment & Planning</h4>
              <p>
                Analyze existing infrastructure and define integration goals.
              </p>
            </div>
          </div>

          <div className="step-line">
            <div className="step-number">2</div>
            <div className="step-info">
              <h4>Implementation</h4>
              <p>
                Execute cloud migrations and integrations with minimal disruption.
              </p>
            </div>
          </div>

          <div className="step-line">
            <div className="step-number">3</div>
            <div className="step-info">
              <h4>Monitoring & Optimization</h4>
              <p>Continuous monitoring and performance tuning for peak efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-mode-section">
        <div className="content">
          <h2>Ready to streamline your cloud infrastructure?</h2>
          <p>Contact us today for a free consultation and start integrating your cloud systems effortlessly.</p>
        </div>
        <button className="call-btn">CALL FOR FREE CONSULTATION</button>
      </section>
    </div>
  );
}

export default Outsourcing;
