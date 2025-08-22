import React from "react";
import { Link } from "react-router-dom"; // 👈 Import Link
import "./Blog2.css";

const Blog2 = () => {
  return (
    <section className="ai-data-section">
      <div className="ai-data-card">
        <h2 className="ai-data-title">🧭 Explore Our Services: Empowering Your Business Forward</h2>

        <div className="ai-point" data-aos="fade-up">
          <h3>💼 1. Business Consulting</h3>
          <p>
            We analyze your operations, challenges, and goals to deliver custom strategies that streamline processes and drive growth.
          </p>
        </div>

        <div className="ai-point" data-aos="fade-up" data-aos-delay="100">
          <h3>🧑‍💻 2. Digital Transformation</h3>
          <p>
            Upgrade your business with cutting-edge digital solutions—from workflow automation to cloud integration and analytics.
          </p>
        </div>

        <div className="ai-point" data-aos="fade-up" data-aos-delay="200">
          <h3>🎯 3. Marketing & Branding</h3>
          <p>
            Build a powerful brand and reach your audience with targeted digital marketing, SEO, content strategy, and more.
          </p>
        </div>

        <div className="ai-point" data-aos="fade-up" data-aos-delay="300">
          <h3>📱 4. App & Web Development</h3>
          <p>
            From concept to launch, we design and build scalable web and mobile applications tailored to your business needs.
          </p>
        </div>

        <div className="ai-point" data-aos="fade-up" data-aos-delay="400">
          <h3>🔐 5. Cybersecurity Solutions</h3>
          <p>
            Protect your digital assets with robust cybersecurity frameworks, threat assessments, and compliance strategies.
          </p>
        </div>

        <Link to="/services" className="ai-read-more">
          Explore all services →
        </Link>
      </div>
    </section>
  );
};

export default Blog2;
