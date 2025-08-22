import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// other imports...

import "./Home.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";
import homevideo from "../images/homevid.mp4";
import one from "../images/1.jpg";
import tick from "../images/tick.svg";
import cross from "../images/wrong.svg";
import rocket from "../images/rocket.png";
import cloud from "../images/cloud.png";
import idea from "../images/idea.png";
import chart from "../images/chart.png";

function Home() {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store formData in localStorage or send to backend here
    console.log("Consultation form submitted:", formData);
    alert("Thank you for your interest! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setShowForm(false);
  };
  

  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Hero Section */}
      <section className="hero">
        <video
          className="hero-video"
          src={homevideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="hero-overlay">
          <h1>Empowering your vision for a brighter tomorrow.</h1>
          <p>
            Partner with us to transform your ideas into innovative solutions that drive lasting success
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => handleGetStarted("/services")}>
              Discover More
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Fixed Consultation Section */}
      <section className="consultation-section">
        <div className="consultation-container">
          <div className="consultation-image">
            <img src={one} alt="Business Solutions" />
          </div>
          <div className="consultation-content">
            <h2>Consulting & Business Solutions</h2>
           <p>
  We help businesses adapt, evolve, and thrive in a fast-paced digital world by 
  offering tailored solutions in digital strategy, business transformation, 
  and operations optimization — turning challenges into opportunities. Our expert 
  team leverages advanced analytics, cutting-edge technology, and industry best 
  practices to streamline workflows, enhance customer experiences, reduce costs,
   and accelerate growth. Whether you're a startup or an enterprise, we provide 
   data-driven insights, strategic planning, and hands-on execution that deliver 
   measurable outcomes and sustainable success. From innovation roadmaps to scalable 
   solutions, we partner with you to unlock your business’s full potential and stay ahead 
   in an ever-changing market. Our consulting services also emphasize risk management, 
   regulatory compliance, and digital security to safeguard your operations. We foster a 
   culture of continuous improvement, ensuring your strategies evolve alongside emerging
    trends and technologies. With a commitment to transparency and collaboration, we empower 
    your teams to drive impactful change and achieve long-term business resilience. By integrating
     sustainability and ethical practices, we help future-proof your business while enhancing brand 
     reputation and stakeholder trust.
</p>

            <Link to="/contact" className="cta-btn">
  Get a Consultation
</Link>
          </div>
        </div>
      </section>





      {/* Innovative Section */}
      <section className="innovative-section">
        <section class="flip-section">
  
</section>

        <div className="container">
          <h2 className="section-title">Innovative Solutions That Drive Real Impact</h2>
          <p className="section-subtitle">We don’t follow trends we create them.</p>
          <p className="section-description">
            At <strong>Stackly</strong>, innovation is at the core of everything we do.
            We rethink traditional consulting by integrating emerging technologies, future-proof strategies, and bold thinking to deliver smarter, faster.
          </p>

          <div className="features-grid">
            <div className="feature-box">
<h4>
  <img
    src={rocket}
    alt="Rocket Icon"
    style={{ width: '20px', height: '20px', marginRight: '8px', verticalAlign: 'middle' }}
  />
  AI-Enhanced Strategy
</h4>
              <p>Predict market trends & customer behavior using advanced analytics & machine learning.</p>
            </div>

            <div className="feature-box">
             <h4>
  <img
    src={cloud}
    alt="Cloud Icon"
    style={{ width: '20px', height: '20px', marginRight: '8px', verticalAlign: 'middle' }}
  />
  Cloud-Driven Scalability
</h4>

              <p>Modernize your infrastructure and unlock new levels of efficiency and flexibility.</p>
            </div>

            <div className="feature-box">
<h4>
  <img
    src={idea}
    alt="Intelligent Automation Icon"
    style={{ width: '20px', height: '20px', marginRight: '8px', verticalAlign: 'middle' }}
  />
  Intelligent Automation.
</h4>              <p>Eliminate guesswork with real-time data dashboards and decision automation.</p>
            </div>

            <div className="feature-box">
              <h4>
  <img
    src={chart}
    alt="Strategic Foresight Icon"
    style={{ width: '20px', height: '20px', marginRight: '8px', verticalAlign: 'middle' }}
  />
  Strategic foresight
</h4>
              <p>Stay ahead with solutions designed for what’s next — not just what’s now.</p>
            </div>
          </div>

          <div className="cta-buttons">
            <button className="primary-btn" onClick={() => handleGetStarted("/contact")}>
              Get a Consultation
            </button>
            <button className="secondary-btn" onClick={() => handleGetStarted("/services")}>
              Explore Services
            </button>
          </div>
        </div>
      </section>




<section className="zigzag-problems-section">
  <div className="zigzag-container">
    <h2 className="zigzag-title">Solving Business Challenges, Step by Step</h2>
    <p className="zigzag-subtitle">
      We help you tackle the core pain points one solution at a time.
    </p>

    <div className="zigzag-line">
      {/* Each zigzag item */}
      {[
        {
          problem: "Scattered Processes",
          solution: "We streamline workflows to boost clarity and productivity.",
        },
        {
          problem: "Outdated Technology",
          solution: "We modernize your tech infrastructure affordably and securely.",
        },
        {
          problem: "Growth Plateau",
          solution: "We unlock scaling through optimized strategies and automation.",
        },
        {
          problem: "Weak Digital Presence",
          solution: "We enhance visibility with bold digital transformation strategies.",
        },
      ].map((item, index) => (
        <div
          className={`zigzag-item ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
        >
          <div className="zigzag-bubble">
           <h4>
  <img src={cross} alt="Cross icon" style={{ width: '18px', marginRight: '6px', verticalAlign: 'middle' }} />
  <strong>{item.problem}</strong>
</h4>
<p>
  <img src={tick} alt="Check icon" style={{ width: '18px', marginRight: '6px', verticalAlign: 'middle' }} />
  {item.solution}
</p>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>






<section className="consultation-process">
  <div className="container">
    <h2 className="process-title">Our Consultation Process</h2>
    <p className="process-subtitle">
      From understanding your needs to delivering measurable impact — here's how we collaborate.
    </p>

    <div className="process-steps">
      <div className="step">
        <div className="step-number">01</div>
        <div className="step-content step1">
          <h3>Initial Consultation</h3>
          <p>We connect to understand your business goals, challenges, and current workflows.</p>
        </div>
      </div> 

      <div className="step">
        <div className="step-number">02</div>
        <div className="step-content step2">
          <h3>Strategic Planning</h3>
          <p>We design a custom strategy aligned to your operations, budget, and long-term vision.</p>
        </div>
      </div>

      <div className="step">
        <div className="step-number">03</div>
        <div className="step-content step3">
          <h3>Implementation</h3>
          <p>Our team guides deployment of solutions while maintaining clear communication with you.</p>
        </div>
      </div>

      <div className="step">
        <div className="step-number">04</div>
        <div className="step-content step4">
          <h3>Continuous Support</h3>
          <p>Post-deployment, we stay engaged — optimizing and evolving as your business grows.</p>
        </div>
      </div>
    </div>
  </div>
</section>






<section className="free-consult-section">
      <div className="free-consult-wrapper">
        <div className="free-consult-text">
          <h2><b>Curious how we assist?</b></h2>
          <p>We provide a free consultation so let's talk with us!</p>

          {!showForm && !submitted && (
            <button
              className="free-consult-btn"
              onClick={() => {
                setShowForm(true);
                setSubmitted(false);
              }}
            >
              Get a Consultation Form
            </button>
          )}

          {showForm && (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{ marginTop: "20px", maxWidth: "400px" }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              />
              <button
                type="submit"
                className="free-consult-btn"
                style={{ width: "100%" }}
              >
                Submit
              </button>
            </form>
          )}

          {submitted && !showForm && (
            <div
              style={{
                marginTop: "20px",
                padding: "15px",
                backgroundColor: "#4caf50",
                color: "white",
                borderRadius: "6px",
                maxWidth: "400px",
              }}
            >
              Thank you! Your consultation request has been received.
            </div>
          )}
        </div>
      </div>
    </section>


    </div>
  );
}

export default Home;
