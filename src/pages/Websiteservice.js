import React from "react";
import "./Outsourcing.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";

import img3 from "../images/image3.jpg";
import web from "../images/web.jpg";

// Import talent grid images correctly
import back from "../images/back.jpg";
import site from "../images/opm.jpg";
import sec from "../images/cd.jpg";
import content from "../images/da.jpg";
import cs from "../images/cs.jpg";

const talentItems = [
  {
    title: "Website Monitoring",
    subtitle: "Constant uptime and performance tracking.",
    img: site,
  },
  {
    title: "Content Updates",
    subtitle: "Keep your site fresh with timely updates.",
    img: content,
  },
  {
    title: "Security Management",
    subtitle: "Regular vulnerability scans and patching.",
    img: sec,
  },
  {
    title: "Backup & Recovery",
    subtitle: "Automated backups with quick restore options.",
    img: back,
  },
  {
    title: "Technical Support",
    subtitle: "Reliable assistance for any website issues.",
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
        <img className="hero-video" src={img3} alt="Website Maintenance Services hero" />
        <div className="hero-overlay">
          <h1>Website Maintenance Services</h1>
        </div>
      </section>

      <section className="cloud-section">
        <div className="cloud-container">
          {/* Left Content */}
          <div className="cloud-content">
            <h2>Keep Your Website Secure, Updated, and Running Smoothly</h2>
            <p>
              Our comprehensive website maintenance services ensure your site stays current, secure, and performs optimally — so you can focus on your business.
            </p>

            <ul className="cloud-features">
              <li>
                🔄{" "}
                <span>
                  Regular Updates – Plugins, themes, and content refreshed routinely.
                </span>
              </li>
              <li>
                🔐{" "}
                <span>Security Checks – Proactive monitoring and malware protection.</span>
              </li>
              <li>
                📊{" "}
                <span>
                  Performance Optimization – Fast loading and smooth user experience.
                </span>
              </li>
            </ul>

            <button
              className="cloud-btn"
              onClick={() => handleGetStarted("/contact")}
            >
              Get Website Maintenance
            </button>
          </div>

          {/* Right Side Image */}
          <div className="cloud-image">
            <img src={web} alt="Website Maintenance Services" />
          </div>
        </div>
      </section>

      {/* Talent grid section */}
      <section className="talent-grid-section">
        <h2>Our Website Maintenance Expertise</h2>
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
        <h2>Why Choose Us for Website Maintenance?</h2>
        <div className="why-container">
          <div className="why-item">
            <h3>🛠️ Proactive Management</h3>
            <p>
              We prevent issues before they impact your website and users.
            </p>
          </div>
          <div className="why-item">
            <h3>⏱️ Timely Updates</h3>
            <p>
              Stay ahead with regular content and software updates to avoid vulnerabilities.
            </p>
          </div>
          <div className="why-item">
            <h3>🔧 Expert Support</h3>
            <p>
              Fast and reliable technical assistance whenever you need it.
            </p>
          </div>
        </div>
      </section>

      <section className="outsourcing-process">
        <h2>How We Maintain Your Website</h2>

        <div className="process-steps">
          <div className="step-line">
            <div className="step-number">1</div>
            <div className="step-info">
              <h4>Audit & Plan</h4>
              <p>
                Evaluate your site’s current health and outline a maintenance schedule.
              </p>
            </div>
          </div>

          <div className="step-line">
            <div className="step-number">2</div>
            <div className="step-info">
              <h4>Update & Secure</h4>
              <p>
                Perform routine updates, backups, and security hardening.
              </p>
            </div>
          </div>

          <div className="step-line">
            <div className="step-number">3</div>
            <div className="step-info">
              <h4>Monitor & Support</h4>
              <p>Continuous monitoring and responsive support for your website.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-mode-section">
        <div className="content">
          <h2>Need help maintaining your website?</h2>
          <p>Contact us today for a free consultation and keep your website in top shape!</p>
        </div>
        <button className="call-btn">CALL FOR FREE CONSULTATION</button>
      </section>
    </div>
  );
}

export default Outsourcing;
