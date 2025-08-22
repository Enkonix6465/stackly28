import React from "react";
import "./Outsourcing.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";

import img1 from "../images/image1.jpg";
import os from "../images/os.jpg";

// Import talent grid images correctly
import ms from "../images/ms.jpg";
import opm from "../images/opm.jpg";
import cd from "../images/cd.jpg";
import da from "../images/da.jpg";
import cs from "../images/cs.jpg";

const talentItems = [
  {
    title: "Marketing Specialists",
    subtitle: "Digital marketing, SEO, and content pros.",
    img: ms,
  },
  {
    title: "Operations Managers",
    subtitle: "Streamline business processes & workflows.",
    img: opm,
  },
  {
    title: "Creative Designers",
    subtitle: "UI/UX, graphic design, and branding.",
    img: cd,
  },
  {
    title: "Data Analysts",
    subtitle: "Actionable insights for smarter decisions.",
    img: da,
  },
  {
    title: "Customer Support",
    subtitle: "Reliable 24/7 support teams.",
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
        <img className="hero-video" src={img1} alt="Outsourcing hero" />
        <div className="hero-overlay">
          <h1>Outsourcing of Talent</h1>
        </div>
      </section>

      <section className="cloud-section">
        <div className="cloud-container">
          {/* Left Content */}
          <div className="cloud-content">
            <h2>Outsource Top Talent for Your Business Success</h2>
            <p>
              Access a global network of skilled professionals across IT,
              marketing, operations, and more. We help you build
              high-performing teams without the overhead — tailored to your
              business needs.
            </p>

            <ul className="cloud-features">
              <li>
                👩‍💻{" "}
                <span>
                  Expert Professionals – Vetted talent across multiple domains.
                </span>
              </li>
              <li>
                🌍{" "}
                <span>Global Reach – Hire remotely from a diverse talent pool.</span>
              </li>
              <li>
                📈{" "}
                <span>
                  Flexible Engagement – Scale teams on demand, from project-based
                  to long-term.
                </span>
              </li>
            </ul>

            <button
              className="cloud-btn"
              onClick={() => handleGetStarted("/contact")}
            >
              Get Talent Solutions
            </button>
          </div>

          {/* Right Side Image */}
          <div className="cloud-image">
            <img src={os} alt="Outsourcing Talent" />
          </div>
        </div>
      </section>

      {/* Talent grid section */}
      <section className="talent-grid-section">
        <h2>Our Talent Expertise</h2>
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
        <h2>Why Outsource with Stackly</h2>
        <div className="why-container">
          <div className="why-item">
            <h3>🎯 Targeted Hiring</h3>
            <p>
              We match you with professionals who align with your exact business
              needs, culture, and goals.
            </p>
          </div>
          <div className="why-item">
            <h3>🧠 Industry Expertise</h3>
            <p>
              Our talent comes with deep domain experience in IT, marketing,
              operations, and more.
            </p>
          </div>
          <div className="why-item">
            <h3>💡 Cost Efficiency</h3>
            <p>
              Reduce overheads while maintaining high performance — pay only for
              what you need.
            </p>
          </div>
        </div>
      </section>

      <section className="outsourcing-process">
        <h2>How We Deliver Top Talent</h2>

        <div className="process-steps">
          <div className="step-line">
            <div className="step-number">1</div>
            <div className="step-info">
              <h4>Define Your Needs</h4>
              <p>
                Share your talent needs, project scope, and desired outcomes — we
                align with your vision.
              </p>
            </div>
          </div>

          <div className="step-line">
            <div className="step-number">2</div>
            <div className="step-info">
              <h4>Curate Ideal Talent</h4>
              <p>
                We match you with professionals from our global network — handpicked
                and vetted.
              </p>
            </div>
          </div>

          <div className="step-line">
            <div className="step-number">3</div>
            <div className="step-info">
              <h4>Onboard & Scale</h4>
              <p>Start collaborating with your outsourced team — quickly and seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-mode-section">
        <div className="content">
          <h2>Do you have any question about our services?</h2>
          <p>We provide a free consultation so let's talk with us!</p>
        </div>
        <button className="call-btn">CALL FOR FREE CONSULTATION</button>
      </section>
    </div>
  );
}

export default Outsourcing;
