import React from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/Darkmodecontext";  // Ensure this is properly provided
import samplevid from "../images/samplevid.mp4";
import blog from "../images/blog.mp4";
import "./Blog.css";

function Blog() {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  // Navigation handler (not used in your snippet, but kept if needed)
  const handleGetStarted = (path) => {
    navigate(path);
  };

  const processSteps = [
    {
      step: 1,
      title: "Consultation & Discovery",
      description:
        "We start by understanding your business objectives, challenges, and vision to tailor the best approach.",
    },
    {
      step: 2,
      title: "Strategic Planning",
      description:
        "Our team analyzes your needs and designs a custom, scalable strategy to achieve your goals.",
    },
    {
      step: 3,
      title: "Implementation",
      description:
        "We execute the plan efficiently, integrating solutions seamlessly to drive impact and minimize disruption.",
    },
    {
      step: 4,
      title: "Continuous Support",
      description:
        "Post-implementation, we provide ongoing optimization and guidance to ensure sustained success.",
    },
  ];

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Hero Section */}
      <section className="hero">
        <video
          className="hero-video"
          src={samplevid}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay">
          <h1>Blog</h1>
        </div>
      </section>

      {/* Business Solutions Section */}
     <section className="bs-section">
  <div className="bs-content">
    <h2>Your Path to Effective Solutions</h2>
    <p>
      At Stackly, our approach to business solutions is grounded in deep
      analysis, custom strategy, and ongoing support. We believe that
      every organization is unique, so our solutions are too.
    </p>

    <div className="bs-steps-container">
      {processSteps.map(({ step, title, description }) => (
        <div className="bs-step-card" key={step}>
          <div className="bs-step-number">{step}</div>
          <div className="bs-step-info">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Articles Section */}
      <section className="art-section">
  <article className="art-article">
    <h2 className="art-title">
      Unlocking Business Potential through Strategic Consulting
    </h2>
    <p className="art-intro">
      In today’s competitive landscape, businesses need more than just quick fixes — they require tailored strategies that drive sustainable growth. Strategic consulting helps companies identify untapped opportunities, streamline operations, and align their teams with long-term goals.
    </p>
    <ul className="art-list">
      <li>Deep-dive assessments to understand core challenges</li>
      <li>Customized action plans based on data-driven insights</li>
      <li>Implementation support to ensure smooth adoption</li>
      <li>Continuous monitoring for ongoing improvements</li>
    </ul>
    <p className="art-summary">
      By partnering with expert consultants, organizations can transform uncertainty into clarity and position themselves for lasting success.
    </p>
  </article>

  <article className="art-article">
    <h2 className="art-title">
      How Business Solutions Drive Digital Transformation
    </h2>
    <p className="art-intro">
      Digital transformation is no longer optional; it’s essential for survival. Business solutions tailored to digital needs enable companies to innovate rapidly, enhance customer experiences, and optimize processes. Consultants guide businesses in adopting the right technologies while minimizing disruption.
    </p>
    <ul className="art-list">
      <li>Aligning digital tools with business objectives</li>
      <li>Leveraging cloud, AI, and automation for efficiency</li>
      <li>Change management to empower teams during transitions</li>
      <li>Measuring ROI to validate technology investments</li>
    </ul>
    <p className="art-summary">
      A strategic approach to business solutions empowers companies to stay agile and competitive in a fast-evolving market.
    </p>
  </article>
</section>


      {/* Content with Video Section */}
      <section className="business-video-section">
  <div className="business-video-section__text">
    <p className="business-video-section__label">GLOBAL PROFESSIONALS NETWORK</p>
    <h1 className="business-video-section__title">World Wide Business</h1>
    <p className="business-video-section__description">
      Stackly is a leading IT company based in New Delhi and operating worldwide by serving customers. Stackly is an ISO 9001, 20000, and 27001 certified organisation. We provide best-in-class IT solutions for your business to grow to new heights of success.
    </p>
  </div>
  <div className="business-video-section__video">
    <video controls>
      <source src={blog} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</section>





      <section className="cta-navigation-section">
  <div className="cta-content">
    <h2>Ready to Transform Your Business?</h2>
    <button onClick={() => handleGetStarted("/blog2")} className="cta-button">
      Explore Consulting Services
    </button>
  </div>
</section>

    </div>
  );
}

export default Blog;
