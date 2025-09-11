import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../images/logo.png";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";

// Translations object
const translations = {
  en: {
    about: "Stackly empowers businesses with cutting-edge cloud, AI, and cybersecurity solutions to transform your digital future.",
    quickLinks: "Quick Links",
    home: "Home",
    aboutUs: "About Us",
    services: "Services",
    blog: "Blog",
    contact: "Contact",
    servicesTitle: "Services",
    cloud: "Outsourcing Of Talent",
    customerFirst: "Mobile Apps Development",
    cybersecurity: "Website Maintanance Service",
    dataAI: "Digital Stratagy Consulting",
    enterpriseMgmt: "Cloud Itegration",
    intelligentIndustry: "Customer Experiance Solutions",
    connect: "Connect with us",
    email: "Email",
    phone: "Phone",
    scrollTop: "Scroll to top",
    copyright: "All rights reserved By ESS."
  },
  ar: {
    about: "تمكن Stackly الشركات بحلول السحابة والذكاء الاصطناعي والأمن السيبراني المتقدمة لتحويل مستقبلك الرقمي.",
    quickLinks: "روابط سريعة",
    home: "الرئيسية",
    aboutUs: "من نحن",
    services: "الخدمات",
    blog: "مدونة",
    contact: "اتصل بنا",
    servicesTitle: "الخدمات",
    cloud: "السحابة",
    customerFirst: "العميل أولاً",
    cybersecurity: "الأمن السيبراني",
    dataAI: "البيانات والذكاء الاصطناعي",
    enterpriseMgmt: "إدارة المؤسسات",
    intelligentIndustry: "الصناعة الذكية",
    connect: "تواصل معنا",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    scrollTop: "العودة للأعلى",
    copyright: "جميع الحقوق محفوظة لـ ESS."
  },
  he: {
    about: "Stackly מעצימה עסקים עם פתרונות ענן, AI וסייבר מתקדמים לשינוי העתיד הדיגיטלי שלך.",
    quickLinks: "קישורים מהירים",
    home: "בית",
    aboutUs: "אודות",
    services: "שירותים",
    blog: "בלוג",
    contact: "צור קשר",
    servicesTitle: "שירותים",
    cloud: "ענן",
    customerFirst: "לקוח תחילה",
    cybersecurity: "סייבר",
    dataAI: "נתונים & AI",
    enterpriseMgmt: "ניהול ארגוני",
    intelligentIndustry: "תעשייה חכמה",
    connect: "התחברו איתנו",
    email: "אימייל",
    phone: "טלפון",
    scrollTop: "גלול למעלה",
    copyright: "כל הזכויות שמורות ל-ESS."
  }
};

const getLanguage = () => localStorage.getItem("language") || "en";

const Footer = () => {
  const [language, setLanguage] = useState(getLanguage());
  const t = translations[language];

  useEffect(() => {
    const handleLanguageChange = () => setLanguage(getLanguage());
    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and About */}
        <div className="footer-section">
          <img src={logo} alt="Stackly Logo" className="footer-logo" />
          <p className="footer-description">{t.about}</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>{t.quickLinks}</h4>
          <ul>
            <li><Link to="/home">{t.home}</Link></li>
            <li><Link to="/about">{t.aboutUs}</Link></li>
            <li><Link to="/services">{t.services}</Link></li>
            <li><Link to="/blog">{t.blog}</Link></li>
            <li><Link to="/contact">{t.contact}</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>{t.servicesTitle}</h4>
          <ul>
            <li><Link to="/outsourcing">{t.cloud}</Link></li>
            <li><Link to="/mobileapps">{t.customerFirst}</Link></li>
            <li><Link to="/websiteservice">{t.cybersecurity}</Link></li>
            <li><Link to="/digitalstratagy">{t.dataAI}</Link></li>
            <li><Link to="/cloudintegration">{t.enterpriseMgmt}</Link></li>
            <li><Link to="/customersolutions">{t.intelligentIndustry}</Link></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="footer-section">
          <h4>{t.connect}</h4>
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/login"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a
              href="https://www.twitter.com/"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitter}
                alt="Twitter"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a
              href="https://mail.instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
          <h3 className="footer-contact-heading" style={{ margin: "18px 0 6px" }}>{t.email} &amp; {t.phone}</h3>
          <p className="footer-contact" style={{ fontWeight: "bold" }}>
            {t.email}: support@stackly.com<br />
            {t.phone}: +1 (800) 123-4567
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        {/* Scroll to Top Button */}
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t.scrollTop}
          title={t.scrollTop}
        >
          ⬆️
        </button>
        <p>
          © {new Date().getFullYear()} Stackly. {t.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;