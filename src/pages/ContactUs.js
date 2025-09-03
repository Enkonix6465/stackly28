import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from "../context/Darkmodecontext";
import cu from "../images/cu.jpg";
import contactvideo from "../images/contactvideo.mp4";
import "./ContactUs.css";

// Translations object
const translations = {
  en: {
    contactUs: "Contact Us",
    heroDesc: "Contact us today to schedule a consultation or to learn more about our services.",
    makeCall: "Make a Call",
    sales: "Sales: +233 456 789 788",
    service: "Service: +555-7890-123",
    sendEmail: "Send Email",
    support: "Support: stackly.com",
    visitOffice: "Visit Our Office",
    address1: "455 West Orchard Street",
    address2: "Kings Mountain",
    liveChat: "Live Chat",
    instantSupport: "Instant support via chat",
    available: "Available 24/7",
    formTitle: "Contact Us",
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    messageLabel: "Your Message",
    sendButton: "Send Message",
    successTitle: "✅ Submitted Successfully!",
    successDesc: "Thank you for reaching out. We’ll get back to you shortly.",
    bannerTitle: "Let’s Connect With Our Experts",
    bannerDesc: "We provide reliable IT solutions to drive your business forward. Reach out today!"
  },
  ar: {
    contactUs: "اتصل بنا",
    heroDesc: "اتصل بنا اليوم لتحديد موعد استشارة أو لمعرفة المزيد عن خدماتنا.",
    makeCall: "اتصل بنا",
    sales: "المبيعات: +233 456 789 788",
    service: "الخدمة: +555-7890-123",
    sendEmail: "أرسل بريد إلكتروني",
    support: "الدعم: stackly.com",
    visitOffice: "زر مكتبنا",
    address1: "455 شارع أورشارد الغربي",
    address2: "كينغز ماونتن",
    liveChat: "دردشة مباشرة",
    instantSupport: "دعم فوري عبر الدردشة",
    available: "متوفر 24/7",
    formTitle: "اتصل بنا",
    nameLabel: "اسمك",
    emailLabel: "بريدك الإلكتروني",
    messageLabel: "رسالتك",
    sendButton: "إرسال الرسالة",
    successTitle: "✅ تم الإرسال بنجاح!",
    successDesc: "شكرًا لتواصلك معنا. سنرد عليك قريبًا.",
    bannerTitle: "تواصل مع خبرائنا",
    bannerDesc: "نقدم حلول تقنية موثوقة لدفع عملك للأمام. تواصل معنا اليوم!"
  },
  he: {
    contactUs: "צור קשר",
    heroDesc: "צור קשר היום לקביעת ייעוץ או לקבלת מידע נוסף על השירותים שלנו.",
    makeCall: "התקשר אלינו",
    sales: "מכירות: +233 456 789 788",
    service: "שירות: +555-7890-123",
    sendEmail: "שלח אימייל",
    support: "תמיכה: stackly.com",
    visitOffice: "בקר במשרדנו",
    address1: "455 רחוב אורצ'רד מערב",
    address2: "קינגס מאונטיין",
    liveChat: "צ'אט חי",
    instantSupport: "תמיכה מיידית בצ'אט",
    available: "זמין 24/7",
    formTitle: "צור קשר",
    nameLabel: "השם שלך",
    emailLabel: "האימייל שלך",
    messageLabel: "ההודעה שלך",
    sendButton: "שלח הודעה",
    successTitle: "✅ נשלח בהצלחה!",
    successDesc: "תודה שפנית אלינו. נחזור אליך בקרוב.",
    bannerTitle: "התחבר עם המומחים שלנו",
    bannerDesc: "אנו מספקים פתרונות IT אמינים לקידום העסק שלך. צור קשר היום!"
  }
};

function ContactUs() {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const [submitted, setSubmitted] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    const handleLanguageChange = () => setLanguage(localStorage.getItem("language") || "en");
    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  const t = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <section className="hero">
        <video
          className="hero-video"
          src={contactvideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="hero-overlay">
          <h1>{t.contactUs}</h1>
          <p>{t.heroDesc}</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-card">
            <div className="icon-circle">📞</div>
            <h3>{t.makeCall}</h3>
            <p>{t.sales}</p>
            <p>{t.service}</p>
          </div>
          <div className="contact-card">
            <div className="icon-circle">✉️</div>
            <h3>{t.sendEmail}</h3>
            <p>{t.support}</p>
          </div>
          <div className="contact-card">
            <div className="icon-circle">📍</div>
            <h3>{t.visitOffice}</h3>
            <p>{t.address1}</p>
            <p>{t.address2}</p>
          </div>
          <div className="contact-card">
            <div className="icon-circle">💬</div>
            <h3>{t.liveChat}</h3>
            <p>{t.instantSupport}</p>
            <p>{t.available}</p>
          </div>
        </div>
      </section>

      <section className="contact-full">
        <div className="contact-left">
          <img src={cu} alt={t.contactUs} />
        </div>

        {!submitted ? (
          <div className="contact-right" id="formContainer">
            <h2>{t.formTitle}</h2>
            <form id="contactForm" onSubmit={handleSubmit}>
              <label htmlFor="name">{t.nameLabel}</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">{t.emailLabel}</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">{t.messageLabel}</label>
              <textarea id="message" name="message" rows="5" required></textarea>

              <button type="submit">{t.sendButton}</button>
            </form>
          </div>
        ) : (
          <div className="contact-right success-box" id="successMessage" style={{ display: "flex" }}>
            <h2>{t.successTitle}</h2>
            <p>{t.successDesc}</p>
          </div>
        )}
      </section>

      <section className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.081042933356!2d-122.41941538468158!3d37.774929779759424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2f0f5f9b%3A0x5f3c4e20e6b82a43!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1702462820472!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <section className="contact-banner">
        <div className="contact-banner-content">
          <h2>{t.bannerTitle}</h2>
          <p>{t.bannerDesc}</p>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
