// src/pages/Services.js
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/Darkmodecontext";
import { Link } from "react-router-dom";

import "./Home.css";
import "./Services.css";
import videoser from "../images/videoser.mp4";
import services1 from "../images/services1.jpg";
import services2 from "../images/services2.jpg";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";

import helpingImg from "../images/helping.png";
import bulbImg from "../images/bulb.png";
import comboChartImg from "../images/combo chart.png";

// Add translations object for all languages
const translations = {
  en: {
    heroTitle: "Our Services",
    leadershipTitle: "Leadership and Team Coaching",
    leadershipDesc:
      "Empower your leaders and strengthen your teams with our personalized coaching programs. We focus on developing effective leadership skills, improving communication, and fostering collaboration to drive productivity and engagement. Our tailored coaching helps unlock potential, resolve conflicts, and build resilient teams ready to face today’s business challenges. Our Leadership and Team Coaching services are designed to cultivate strong, confident leaders who inspire and motivate their teams. Through one-on-one and group coaching sessions, we help leaders develop critical skills such as emotional intelligence, strategic thinking, and decision-making. We also focus on enhancing team dynamics by promoting effective communication, trust-building, and conflict resolution. By fostering a culture of continuous learning and collaboration, we enable teams to perform at their highest potential. Our approach is tailored to your organization’s unique needs.",
    coreTitle: "Our Core Business Solutions",
    coreDesc:
      "Discover how our tailored services help modern businesses grow, scale, and stay competitive in a dynamic world.",
    serviceCards: [
      { title: "Outsourcing of Talent", img: image1, link: "/outsourcing" },
      { title: "Mobile Apps Development", img: image2, link: "/mobileapps" },
      { title: "Website Maintenance Service", img: image3, link: "/websiteservice" },
      { title: "Digital Strategy Consulting", img: image4, link: "/digitalstratagy" },
      { title: "Cloud Integration", img: image5, link: "/cloudintegration" },
      { title: "Customer Experience Solutions", img: image6, link: "/customersolutions" },
    ],
    apartTitle: "What Sets Us Apart",
    apartDesc: "Discover the unique strengths that empower our consulting and business solutions.",
    features: [
      {
        icon: <img src={helpingImg} alt="Helping" className="feature-icon" />,
        title: "Client-Centric Approach",
        description: "We prioritize your unique business needs to deliver tailored solutions that truly make an impact.",
        strength: 95,
      },
      {
        icon: <img src={bulbImg} alt="Bulb" className="feature-icon" />,
        title: "Innovative Strategies",
        description: "Our team leverages cutting-edge technology and forward-thinking to keep you ahead of the curve.",
        strength: 90,
      },
      {
        icon: <img src={comboChartImg} alt="Combo Chart" className="feature-icon" />,
        title: "Proven Results",
        description: "Our solutions consistently drive measurable growth and sustainable success for our clients.",
        strength: 92,
      },
    ],
    expTitle: "Our Expertise in Numbers",
    expRings: [
      { label: "Talent Procure", percent: 85, color: "var(--ring-blue)" },
      { label: "Mobile Apps", percent: 75, color: "var(--ring-green)" },
      { label: "Web Support", percent: 90, color: "var(--ring-orange)" },
    ],
    quotes: [
      {
        text: "Their innovative approach transformed our business model.",
        author: "CEO, TechCorp",
      },
      {
        text: "Reliable and professional services every time.",
        author: "Founder, StartUpX",
      },
      {
        text: "Helped us scale quickly with their talent outsourcing.",
        author: "HR Head, GrowthInc",
      },
    ],
  },
  ar: {
    heroTitle: "خدماتنا",
    leadershipTitle: "تدريب القيادة والفريق",
    leadershipDesc:
      "عزز قادة فريقك وقوِ الفرق من خلال برامج التدريب الشخصية لدينا. نركز على تطوير مهارات القيادة الفعالة وتحسين التواصل وتعزيز التعاون لزيادة الإنتاجية والمشاركة. يساعد تدريبنا المخصص على إطلاق الإمكانات وحل النزاعات وبناء فرق قوية جاهزة لمواجهة تحديات الأعمال اليوم. تم تصميم خدمات تدريب القيادة والفريق لدينا لتنمية قادة أقوياء واثقين يلهمون ويحفزون فرقهم. من خلال جلسات تدريب فردية وجماعية، نساعد القادة على تطوير مهارات حاسمة مثل الذكاء العاطفي والتفكير الاستراتيجي واتخاذ القرار. نركز أيضًا على تعزيز ديناميكيات الفريق من خلال تعزيز التواصل الفعال وبناء الثقة وحل النزاعات. من خلال تعزيز ثقافة التعلم المستمر والتعاون، نمكن الفرق من الأداء بأعلى إمكاناتها. نهجنا مصمم خصيصًا لاحتياجات مؤسستك.",
    coreTitle: "حلول الأعمال الأساسية لدينا",
    coreDesc: "اكتشف كيف تساعد خدماتنا المخصصة الشركات الحديثة على النمو والتوسع والبقاء في المنافسة في عالم ديناميكي.",
    serviceCards: [
      { title: "الاستعانة بالمواهب", img: image1, link: "/outsourcing" },
      { title: "تطوير تطبيقات الجوال", img: image2, link: "/mobileapps" },
      { title: "خدمة صيانة الموقع", img: image3, link: "/websiteservice" },
      { title: "استشارات الاستراتيجية الرقمية", img: image4, link: "/digitalstratagy" },
      { title: "تكامل السحابة", img: image5, link: "/cloudintegration" },
      { title: "حلول تجربة العملاء", img: image6, link: "/customersolutions" },
    ],
    apartTitle: "ما الذي يميزنا",
    apartDesc: "اكتشف نقاط القوة الفريدة التي تعزز حلولنا الاستشارية والتجارية.",
    features: [
      {
        icon: <img src={helpingImg} alt="Helping" className="feature-icon" />,
        title: "نهج يركز على العميل",
        description: "نحن نعطي الأولوية لاحتياجات عملك الفريدة لتقديم حلول مخصصة تحدث فرقًا حقيقيًا.",
        strength: 95,
      },
      {
        icon: <img src={bulbImg} alt="Bulb" className="feature-icon" />,
        title: "استراتيجيات مبتكرة",
        description: "يستفيد فريقنا من التكنولوجيا المتقدمة والتفكير المستقبلي لإبقائك في المقدمة.",
        strength: 90,
      },
      {
        icon: <img src={comboChartImg} alt="Combo Chart" className="feature-icon" />,
        title: "نتائج مثبتة",
        description: "تحقق حلولنا نموًا ملموسًا ونجاحًا مستدامًا لعملائنا.",
        strength: 92,
      },
    ],
    expTitle: "خبرتنا بالأرقام",
    expRings: [
      { label: "توظيف المواهب", percent: 85, color: "var(--ring-blue)" },
      { label: "تطبيقات الجوال", percent: 75, color: "var(--ring-green)" },
      { label: "دعم المواقع", percent: 90, color: "var(--ring-orange)" },
    ],
    quotes: [
      {
        text: "نهجهم المبتكر غير نموذج أعمالنا.",
        author: "الرئيس التنفيذي، تك كورب",
      },
      {
        text: "خدمات موثوقة واحترافية في كل مرة.",
        author: "المؤسس، ستارت أب إكس",
      },
      {
        text: "ساعدونا على التوسع بسرعة من خلال الاستعانة بالمواهب.",
        author: "رئيس الموارد البشرية، جروث إنك",
      },
    ],
  },
  he: {
    heroTitle: "השירותים שלנו",
    leadershipTitle: "אימון מנהיגות וצוות",
    leadershipDesc:
      "העצם את המנהיגים שלך וחזק את הצוותים עם תוכניות אימון מותאמות אישית. אנו מתמקדים בפיתוח מיומנויות מנהיגות אפקטיביות, שיפור תקשורת וטיפוח שיתופי פעולה להנעת פרודוקטיביות ומעורבות. האימון שלנו מסייע לממש פוטנציאל, לפתור קונפליקטים ולבנות צוותים עמידים המוכנים לאתגרים העסקיים של היום. שירותי אימון המנהיגות והצוות שלנו נועדו לטפח מנהיגים חזקים ובטוחים שמעצימים ומניעים את הצוותים שלהם. באמצעות אימון אישי וקבוצתי, אנו מסייעים למנהיגים לפתח מיומנויות קריטיות כמו אינטליגנציה רגשית, חשיבה אסטרטגית וקבלת החלטות. אנו מתמקדים גם בשיפור הדינמיקה הצוותית באמצעות תקשורת אפקטיבית, בניית אמון ופתרון קונפליקטים. על ידי טיפוח תרבות של למידה מתמדת ושיתוף פעולה, אנו מאפשרים לצוותים להגיע לביצועים מיטביים. הגישה שלנו מותאמת לצרכים הייחודיים של הארגון שלך.",
    coreTitle: "פתרונות הליבה העסקיים שלנו",
    coreDesc: "גלה כיצד השירותים המותאמים שלנו מסייעים לעסקים מודרניים לצמוח, להתרחב ולהישאר תחרותיים בעולם דינמי.",
    serviceCards: [
      { title: "מיקור כישרונות", img: image1, link: "/outsourcing" },
      { title: "פיתוח אפליקציות מובייל", img: image2, link: "/mobileapps" },
      { title: "שירות תחזוקת אתר", img: image3, link: "/websiteservice" },
      { title: "ייעוץ אסטרטגיה דיגיטלית", img: image4, link: "/digitalstratagy" },
      { title: "אינטגרציית ענן", img: image5, link: "/cloudintegration" },
      { title: "פתרונות חווית לקוח", img: image6, link: "/customersolutions" },
    ],
    apartTitle: "מה מייחד אותנו",
    apartDesc: "גלה את החוזקות הייחודיות שמעצימות את פתרונות הייעוץ והעסק שלנו.",
    features: [
      {
        icon: <img src={helpingImg} alt="Helping" className="feature-icon" />,
        title: "גישה ממוקדת לקוח",
        description: "אנו נותנים עדיפות לצרכים העסקיים הייחודיים שלך כדי לספק פתרונות מותאמים אישית שמייצרים השפעה אמיתית.",
        strength: 95,
      },
      {
        icon: <img src={bulbImg} alt="Bulb" className="feature-icon" />,
        title: "אסטרטגיות חדשניות",
        description: "הצוות שלנו משתמש בטכנולוגיה מתקדמת ובחשיבה עתידית כדי לשמור אותך מוביל.",
        strength: 90,
      },
      {
        icon: <img src={comboChartImg} alt="Combo Chart" className="feature-icon" />,
        title: "תוצאות מוכחות",
        description: "הפתרונות שלנו מניבים צמיחה מדידה והצלחה בת קיימא ללקוחותינו.",
        strength: 92,
      },
    ],
    expTitle: "הניסיון שלנו במספרים",
    expRings: [
      { label: "רכש כישרונות", percent: 85, color: "var(--ring-blue)" },
      { label: "אפליקציות מובייל", percent: 75, color: "var(--ring-green)" },
      { label: "תמיכת אתרים", percent: 90, color: "var(--ring-orange)" },
    ],
    quotes: [
      {
        text: "הגישה החדשנית שלהם שינתה את מודל העסק שלנו.",
        author: "מנכ\"ל, טקקורפ",
      },
      {
        text: "שירותים אמינים ומקצועיים בכל פעם.",
        author: "מייסד, סטארטאפ איקס",
      },
      {
        text: "עזרו לנו להתרחב במהירות עם מיקור כישרונות.",
        author: "ראש משאבי אנוש, גרות' אינק",
      },
    ],
  },
};

const getLanguage = () => localStorage.getItem("language") || "en";

const Services = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef(null);

  const ringsRef = useRef(null);
  const [animateRings, setAnimateRings] = useState(false);

  const [currentQuote, setCurrentQuote] = useState(0);

  const [language, setLanguage] = useState(getLanguage());

  useEffect(() => {
    const handleLanguageChange = () => setLanguage(getLanguage());
    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  const t = translations[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateProgress(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateRings(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ringsRef.current) {
      observer.observe(ringsRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % t.quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [t.quotes.length]);

  const handleGetStarted = (path) => {
    navigate(path);
  };

  const ringBackgroundStroke = darkMode ? "#001f3f" : "#ddd";
  const ringTextColor = darkMode ? "#eee" : "#222";

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Hero Section */}
      <section className="hero">
        <video
          className="hero-video"
          src={videoser}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="hero-overlay">
          <h1>{t.heroTitle}</h1>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="coaching-solutions-section">
        <div className="coaching-content-wrapper">
          <div className="coaching-images-wrapper">
            <img
              src={services1}
              alt="Consulting Team"
              className="coaching-image coaching-image-top"
            />
            <img
              src={services2}
              alt="Business Success"
              className="coaching-image coaching-image-bottom"
            />
          </div>
          <div className="coaching-text-content">
            <h2>{t.leadershipTitle}</h2>
            <p>{t.leadershipDesc}</p>
          </div>
        </div>
      </section>

      {/* Services Boxes Section */}
      <section className="core-solutions-heading">
        <h2>{t.coreTitle}</h2>
        <p>{t.coreDesc}</p>
      </section>

      <section className="core-solutions-boxes">
        {t.serviceCards.map((service, index) => (
          <div className="core-solution-box" key={index}>
            <img src={service.img} alt={service.title} />
            <div className="core-box-overlay">
              <h3>{service.title}</h3>
              <Link to={service.link} className="core-box-arrow-link">
                <span className="core-box-arrow">→</span>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* What Sets Us Apart Section */}
      <section className="apart-section" ref={sectionRef}>
        <h2 className="apart-main-heading">{t.apartTitle}</h2>
        <p className="apart-subheading">{t.apartDesc}</p>
        <div className="apart-features-container">
          {t.features.map(({ icon, title, description, strength }, index) => (
            <div className="apart-feature-card" key={index}>
              <div className="apart-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="apart-strength-bar">
                <div
                  className="apart-progress"
                  style={{
                    width: animateProgress ? `${strength}%` : "0%",
                    transition: "width 2s ease-in-out",
                  }}
                  aria-label={`${strength}% strength`}
                ></div>
              </div>
              <span className="apart-strength-value">{strength}%</span>
            </div>
          ))}
        </div>
      </section>

      {/* Animated Circular Rings Section */}
      <section ref={ringsRef} className={`exp-section ${darkMode ? "exp-dark" : "exp-light"}`}>
        <h2 className="exp-heading">{t.expTitle}</h2>
        <div className="exp-rings-container">
          {t.expRings.map(({ label, percent, color }, idx) => (
            <div key={idx} className="exp-ring-wrapper">
              <svg viewBox="0 0 36 36" className="exp-ring-svg">
                <circle
                  cx="18"
                  cy="18"
                  r="15.9155"
                  fill="none"
                  stroke="var(--ring-bg)"
                  strokeWidth="3"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.9155"
                  fill="none"
                  stroke={color}
                  strokeWidth="3"
                  strokeDasharray={animateRings ? `${percent}, 100` : "0, 100"}
                  strokeLinecap="round"
                  className="exp-ring-progress"
                />
              </svg>
              <div className="exp-ring-percent">{animateRings ? percent : 0}%</div>
              <p className="exp-ring-label">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Carousel Section */}
      <section className={`qc-carousel ${darkMode ? "qc-dark" : "qc-light"}`}>
        <p className="qc-quote-text">"{t.quotes[currentQuote].text}"</p>
        <p className="qc-quote-author">— {t.quotes[currentQuote].author}</p>
      </section>
    </div>
  );
};

export default Services;
