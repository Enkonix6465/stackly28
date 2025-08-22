import React, { useState, useEffect, useRef } from "react";
import "./Home2.css";
import { useDarkMode } from "../context/Darkmodecontext";
import aboutvid from "../images/aboutvid.mp4";
import businessImg from "../images/businessImg.jpg";
import { Link } from "react-router-dom";
import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.jpg";
import logo3 from "../images/logo3.jpg";
import logo4 from "../images/logo4.jpg";
import logo5 from "../images/logo5.jpg";

const logos = [
  { src: logo1, alt: "Merck" },
  { src: logo2, alt: "Gusto" },
  { src: logo3, alt: "HCA Healthcare" },
  { src: logo4, alt: "Logo 4" },
  { src: logo5, alt: "Logo 5" },
];

function formatNumber(num, suffix) {
  if (suffix === "K") {
    return (num / 1000).toFixed(1) + "K";
  }
  if (suffix === "M") {
    return (num / 1000000).toFixed(1) + "M";
  }
  return Math.ceil(num) + suffix;
}

function Home2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { darkMode } = useDarkMode();
  const countersRef = useRef([]);

  useEffect(() => {
    const counters = countersRef.current;
    let observer;

    const startCounting = (counter) => {
      if (!counter) return;
      const target = parseInt(counter.getAttribute("data-target"), 10);
      const suffix = counter.getAttribute("data-suffix") || "";
      let count = 0;
      const speed = 50;
      const increment = target / speed;

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = formatNumber(count, suffix);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = formatNumber(target, suffix);
        }
      };

      updateCount();
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          counters.forEach((counter) => {
            if (counter && counter.innerText === "0") {
              startCounting(counter);
            }
          });
          if (observer) observer.disconnect();
        }
      });
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5, // Trigger when 50% of counter visible
      });
      counters.forEach((counter) => {
        if (counter) observer.observe(counter);
      });
    } else {
      // Fallback if IntersectionObserver not supported
      counters.forEach((counter) => {
        startCounting(counter);
      });
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* HERO SECTION */}
      <section className="hero">
        <video
          className="hero-video"
          src={aboutvid}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay">
          <h1>Driving Success Through Insightful Solutions.</h1>
          <p>Partnering with you to transform challenges into opportunities.</p>
        </div>
      </section>

      {/* FLIP SECTION */}
      <section className="flip-section">
        <div>
          <h2 className="flip-section-heading">What We Offer</h2>
          <div className="flip-box-container">
            {/* IT Consulting */}
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front green">
                  <h3>IT Consulting</h3>
                  <p>
                    Our IT consulting team will provide you with the highly
                    available technology platform that you need.
                  </p>
                </div>
                <div className="flip-box-back">
                  <h3>Cybersecurity Consulting</h3>
                  <p>
                    Protect your digital assets with end-to-end cybersecurity
                    strategies, threat monitoring, and compliance support.
                  </p>
                </div>
              </div>
            </div>

            {/* Marketing */}
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front pink">
                  <h3>Marketing</h3>
                  <p>
                    Increase your business presence and generate leads with
                    AI-powered Digital Marketing, Ads & SEO.
                  </p>
                </div>
                <div className="flip-box-back">
                  <h3>Data Analytics</h3>
                  <p>
                    Unlock actionable insights from your data using advanced
                    analytics, dashboards, and AI-driven reporting tools.
                  </p>
                </div>
              </div>
            </div>

            {/* IoT & AI */}
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front blue">
                  <h3>IoT & AI</h3>
                  <p>
                    Our AI-based IoT solutions use machine learning for risk
                    reduction, efficiency & cost savings.
                  </p>
                </div>
                <div className="flip-box-back">
                  <h3>Cloud Services</h3>
                  <p>
                    Modernize your infrastructure with scalable, secure, and
                    cost-effective cloud solutions tailored to your business
                    needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="partners-section">
        <div className="container">
          <h2 className="partners-title">
            Our Network of Trusted Property Partners
          </h2>
          <p className="partners-subtitle">
            We collaborate with top developers, builders, and property
            consultants to bring you premium real estate opportunities.
          </p>

          <div className="partners-slider" style={{ overflow: "hidden" }}>
            <div className="partner-logos-slider">
              {[...logos, ...logos].map((logo, idx) => (
                <div
                  className="partner-logo"
                  key={idx}
                  style={{
                    flex: "0 0 auto",
                    maxWidth: "120px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "20px",
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORK PROCESS SECTION */}
      <section className="work-process-section">
        <h2 className="section-title">Our Work Approach</h2>
        <p className="section-subtitle">
          A streamlined process designed to deliver quality results efficiently
        </p>

        <div className="timeline">
          <div className="timeline-step">
            <div className="icon-circle">🔍</div>
            <h3>Initial Discovery</h3>
            <p>
              We begin by understanding your business goals and requirements to
              tailor the best solution.
            </p>
          </div>

          <div className="timeline-step">
            <div className="icon-circle">📝</div>
            <h3>Planning & Strategy</h3>
            <p>
              Our team crafts a detailed project plan and roadmap aligned with
              your objectives.
            </p>
          </div>

          <div className="timeline-step">
            <div className="icon-circle">⚙️</div>
            <h3>Development & Testing</h3>
            <p>
              We develop robust software with continuous testing to ensure high
              quality and reliability.
            </p>
          </div>

          <div className="timeline-step">
            <div className="icon-circle">🚀</div>
            <h3>Launch & Support</h3>
            <p>
              After deployment, we provide ongoing support to ensure smooth
              operation and improvements.
            </p>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section className="achievement-section">
        <div>
          <h2>Our Achievements</h2>
          <div className="achievement-container">
            <div className="achievement-box">
              <h2
                className="counter"
                data-target="500"
                data-suffix="+"
                ref={(el) => (countersRef.current[0] = el)}
              >
                0
              </h2>
              <p>Happy Clients</p>
            </div>
            <div className="achievement-box">
              <h2
                className="counter"
                data-target="1200"
                data-suffix="K"
                ref={(el) => (countersRef.current[1] = el)}
              >
                0
              </h2>
              <p>Projects Completed</p>
            </div>
            <div className="achievement-box">
              <h2
                className="counter"
                data-target="15"
                data-suffix=""
                ref={(el) => (countersRef.current[2] = el)}
              >
                0
              </h2>
              <p>Industries Served</p>
            </div>
            <div className="achievement-box">
              <h2
                className="counter"
                data-target="10"
                data-suffix="Y"
                ref={(el) => (countersRef.current[3] = el)}
              >
                0
              </h2>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

    
    
      {/* BUSINESS SOLUTIONS SECTION */}
      <section className="business-solutions">
        <div className="solutions-container">
          <div className="solutions-left">
            <h2>Tailored Business Solutions</h2>
            <p>
              We don’t offer one-size-fits-all. Our consultation services are
              customized to your business goals, challenges, and industry.
            </p>
            <ul className="solution-list">
              <li>
                <span>📊</span> Strategy & Growth Consulting
              </li>
              <li>
                <span>🧠</span> Business Process Optimization
              </li>
              <li>
                <span>💻</span> Digital Transformation Advisory
              </li>
              <li>
                <span>🌐</span> Market Entry & Expansion Plans
              </li>
            </ul>
            <Link to="/contact" className="btn primary">
  Get Free Consultation
</Link>
          </div>
          <div className="solutions-right">
            <img src={businessImg} alt="Business Consultation" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home2;
