import React from "react";
import "./Outsourcing.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";

import img6 from "../images/image6.jpg";
import cus from "../images/cus.jpg";

// Import talent grid images correctly
import ms from "../images/ms.jpg";
import opm from "../images/opm.jpg";
import cd from "../images/cd.jpg";
import da from "../images/da.jpg";
import cs from "../images/cs.jpg";

const talentItems = [
  {
    title: "Customer Journey Mapping",
    subtitle: "Visualizing customer interactions to enhance experience.",
    img: ms,
  },
  {
    title: "Omnichannel Support",
    subtitle: "Seamless experience across all communication channels.",
    img: opm,
  },
  {
    title: "Personalization",
    subtitle: "Tailoring content and offers to individual customer needs.",
    img: cd,
  },
  {
    title: "Feedback & Analytics",
    subtitle: "Collecting and analyzing customer insights for improvement.",
    img: da,
  },
  {
    title: "Loyalty Programs",
    subtitle: "Designing initiatives to boost customer retention and satisfaction.",
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
        <img className="hero-video" src={img6} alt="Customer Experience Solutions hero" />
        <div className="hero-overlay">
          <h1>Customer Experience Solutions</h1>
        </div>
      </section>

      <section className="cloud-section">
        <div className="cloud-container">
          {/* Left Content */}
          <div className="cloud-content">
            <h2>Enhance Engagement and Build Lasting Customer Relationships</h2>
            <p>
              Our customer experience solutions help you deliver personalized, seamless interactions that drive satisfaction and loyalty.
            </p>

            <ul className="cloud-features">
              <li>
                🤝{" "}
                <span>
                  Customer-Centric Design – Craft experiences that resonate and delight.
                </span>
              </li>
              <li>
                📊{" "}
                <span>Data-Driven Insights – Use analytics to understand and predict customer needs.</span>
              </li>
              <li>
                🔄{" "}
                <span>
                  Continuous Improvement – Iterate and optimize for better engagement.
                </span>
              </li>
            </ul>

            <button
              className="cloud-btn"
              onClick={() => handleGetStarted("/contact")}
            >
              Get Customer Experience Solutions
            </button>
          </div>

          {/* Right Side Image */}
          <div className="cloud-image">
            <img src={cus} alt="Customer Experience Solutions" />
          </div>
        </div>
      </section>

      {/* Talent grid section */}
      <section className="talent-grid-section">
        <h2>Our Customer Experience Expertise</h2>
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
        <h2>Why Choose Us for Customer Experience Solutions?</h2>
        <div className="why-container">
          <div className="why-item">
            <h3>🌟 Proven Methodologies</h3>
            <p>
              Using best practices and innovative tools to enhance every customer touchpoint.
            </p>
          </div>
          <div className="why-item">
            <h3>🔍 Insight-Driven</h3>
            <p>
              Leveraging data and feedback to create impactful experiences.
            </p>
          </div>
          <div className="why-item">
            <h3>🤝 Collaborative Approach</h3>
            <p>
              Partnering closely with your team to align goals and deliver results.
            </p>
          </div>
        </div>
      </section>

      <section className="outsourcing-process">
        <h2>Our Customer Experience Process</h2>

        <div className="process-steps">
          <div className="step-line">
            <div className="step-number">1</div>
            <div className="step-info">
              <h4>Research & Insights</h4>
              <p>
                Understand your customers’ needs, behaviors, and pain points.
              </p>
            </div>
          </div>

          <div className="step-line">
            <div className="step-number">2</div>
            <div className="step-info">
              <h4>Design & Implementation</h4>
              <p>
                Develop tailored solutions to improve interactions and satisfaction.
              </p>
            </div>
          </div>

          <div className="step-line">
            <div className="step-number">3</div>
            <div className="step-info">
              <h4>Measurement & Optimization</h4>
              <p>Track performance and continuously enhance customer experiences.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-mode-section">
        <div className="content">
          <h2>Ready to transform your customer experience?</h2>
          <p>Contact us today for a free consultation and start creating loyal, engaged customers.</p>
        </div>
        <button className="call-btn">CALL FOR FREE CONSULTATION</button>
      </section>
    </div>
  );
}

export default Outsourcing;
