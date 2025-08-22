import React from "react";
import "./Outsourcing.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";

import img4 from "../images/image4.jpg";
import digital from "../images/digital.jpg";

// Import talent grid images correctly
import ms from "../images/ms.jpg";
import opm from "../images/opm.jpg";
import cd from "../images/cd.jpg";
import da from "../images/da.jpg";
import per from "../images/per.jpg";

const talentItems = [
  {
    title: "Market Analysis",
    subtitle: "Identifying opportunities and competitive insights.",
    img: ms,
  },
  {
    title: "Customer Segmentation",
    subtitle: "Targeting the right audience with precision.",
    img: opm,
  },
  {
    title: "Channel Strategy",
    subtitle: "Optimizing digital channels for maximum impact.",
    img: cd,
  },
  {
    title: "Content Strategy",
    subtitle: "Crafting messaging that resonates and converts.",
    img: da,
  },
  {
    title: "Performance Tracking",
    subtitle: "Measuring KPIs to refine and improve strategies.",
    img: per,
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
        <img className="hero-video" src={img4} alt="Digital Strategy Consulting hero" />
        <div className="hero-overlay">
          <h1>Digital Strategy Consulting</h1>
        </div>
      </section>

      <section className="cloud-section">
        <div className="cloud-container">
          {/* Left Content */}
          <div className="cloud-content">
            <h2>Unlock Your Business Potential with Expert Digital Strategies</h2>
            <p>
              We help you craft and execute digital strategies that align with your business goals, driving growth, engagement, and long-term success.
            </p>

            <ul className="cloud-features">
              <li>
                📈{" "}
                <span>
                  Data-Driven Insights – Leverage analytics to make informed decisions.
                </span>
              </li>
              <li>
                🎯{" "}
                <span>Targeted Campaigns – Reach your ideal customers efficiently.</span>
              </li>
              <li>
                🔄{" "}
                <span>
                  Continuous Optimization – Adapt strategies based on performance metrics.
                </span>
              </li>
            </ul>

            <button
              className="cloud-btn"
              onClick={() => handleGetStarted("/contact")}
            >
              Get Digital Strategy Consulting
            </button>
          </div>

          {/* Right Side Image */}
          <div className="cloud-image">
            <img src={digital} alt="Digital Strategy Consulting" />
          </div>
        </div>
      </section>

      {/* Talent grid section */}
      <section className="talent-grid-section">
        <h2>Our Digital Strategy Expertise</h2>
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
        <h2>Why Choose Us for Digital Strategy Consulting?</h2>
        <div className="why-container">
          <div className="why-item">
            <h3>💡 Strategic Expertise</h3>
            <p>
              Proven frameworks and industry knowledge to craft winning strategies.
            </p>
          </div>
          <div className="why-item">
            <h3>🔍 Analytical Approach</h3>
            <p>
              Deep data analysis ensures every decision drives measurable results.
            </p>
          </div>
          <div className="why-item">
            <h3>🤝 Collaborative Partnership</h3>
            <p>
              We work closely with your team to align goals and ensure success.
            </p>
          </div>
        </div>
      </section>

      <section className="outsourcing-process">
        <h2>Our Digital Strategy Consulting Process</h2>

        <div className="process-steps">
          <div className="step-line">
            <div className="step-number">1</div>
            <div className="step-info">
              <h4>Discovery & Research</h4>
              <p>
                Understand your business, industry, and target audience.
              </p>
            </div>
          </div>

          <div className="step-line">
            <div className="step-number">2</div>
            <div className="step-info">
              <h4>Strategy Development</h4>
              <p>
                Craft tailored digital strategies that align with your goals.
              </p>
            </div>
          </div>

          <div className="step-line">
            <div className="step-number">3</div>
            <div className="step-info">
              <h4>Execution & Optimization</h4>
              <p>Implement strategies and continuously optimize for better outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-mode-section">
        <div className="content">
          <h2>Ready to elevate your digital presence?</h2>
          <p>Contact us today for a free consultation and start transforming your business.</p>
        </div>
        <button className="call-btn">CALL FOR FREE CONSULTATION</button>
      </section>
    </div>
  );
}

export default Outsourcing;
