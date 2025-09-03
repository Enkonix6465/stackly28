import React, { useState, useEffect } from "react";
import "./Outsourcing.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";

import img1 from "../images/image1.jpg";
import os from "../images/os.jpg";
import ms from "../images/ms.jpg";
import opm from "../images/opm.jpg";
import cd from "../images/cd.jpg";
import da from "../images/da.jpg";
import cs from "../images/cs.jpg";

// Translations object
const translations = {
  en: {
    heroTitle: "Outsourcing of Talent",
    heroDesc: "Outsource Top Talent for Your Business Success",
    heroBtn: "Get Talent Solutions",
    sectionDesc: "Access a global network of skilled professionals across IT, marketing, operations, and more. We help you build high-performing teams without the overhead — tailored to your business needs.",
    features: [
      "👩‍💻 Expert Professionals – Vetted talent across multiple domains.",
      "🌍 Global Reach – Hire remotely from a diverse talent pool.",
      "📈 Flexible Engagement – Scale teams on demand, from project-based to long-term."
    ],
    expertiseTitle: "Our Talent Expertise",
    talentItems: [
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
    ],
    whyTitle: "Why Outsource with Stackly",
    why: [
      {
        title: "🎯 Targeted Hiring",
        desc: "We match you with professionals who align with your exact business needs, culture, and goals."
      },
      {
        title: "🧠 Industry Expertise",
        desc: "Our talent comes with deep domain experience in IT, marketing, operations, and more."
      },
      {
        title: "💡 Cost Efficiency",
        desc: "Reduce overheads while maintaining high performance — pay only for what you need."
      }
    ],
    processTitle: "How We Deliver Top Talent",
    processSteps: [
      {
        step: 1,
        title: "Define Your Needs",
        desc: "Share your talent needs, project scope, and desired outcomes — we align with your vision."
      },
      {
        step: 2,
        title: "Curate Ideal Talent",
        desc: "We match you with professionals from our global network — handpicked and vetted."
      },
      {
        step: 3,
        title: "Onboard & Scale",
        desc: "Start collaborating with your outsourced team — quickly and seamlessly."
      }
    ],
    readyTitle: "Do you have any question about our services?",
    readyDesc: "We provide a free consultation so let's talk with us!",
    callBtn: "CALL FOR FREE CONSULTATION"
  },
  ar: {
    heroTitle: "الاستعانة بالمواهب",
    heroDesc: "استعن بأفضل المواهب لنجاح عملك",
    heroBtn: "احصل على حلول المواهب",
    sectionDesc: "احصل على شبكة عالمية من المحترفين المهرة في تقنية المعلومات، التسويق، العمليات والمزيد. نساعدك في بناء فرق عالية الأداء دون تكاليف إضافية — حسب احتياجات عملك.",
    features: [
      "👩‍💻 محترفون خبراء – مواهب مدققة في مجالات متعددة.",
      "🌍 وصول عالمي – وظف عن بعد من مجموعة مواهب متنوعة.",
      "📈 مرونة في التوظيف – وسع الفرق حسب الحاجة، من مشاريع قصيرة إلى طويلة الأمد."
    ],
    expertiseTitle: "خبرتنا في المواهب",
    talentItems: [
      {
        title: "أخصائيو التسويق",
        subtitle: "خبراء التسويق الرقمي وتحسين محركات البحث والمحتوى.",
        img: ms,
      },
      {
        title: "مديرو العمليات",
        subtitle: "تبسيط العمليات التجارية وسير العمل.",
        img: opm,
      },
      {
        title: "مصممون مبدعون",
        subtitle: "تصميم واجهات المستخدم والجرافيك والعلامة التجارية.",
        img: cd,
      },
      {
        title: "محللو البيانات",
        subtitle: "رؤى قابلة للتنفيذ لاتخاذ قرارات أكثر ذكاءً.",
        img: da,
      },
      {
        title: "دعم العملاء",
        subtitle: "فرق دعم موثوقة على مدار الساعة.",
        img: cs,
      },
    ],
    whyTitle: "لماذا تستعين بالمواهب مع Stackly",
    why: [
      {
        title: "🎯 توظيف مستهدف",
        desc: "نطابقك مع محترفين يتوافقون مع احتياجات عملك وثقافتك وأهدافك."
      },
      {
        title: "🧠 خبرة صناعية",
        desc: "مواهبنا لديها خبرة عميقة في تقنية المعلومات والتسويق والعمليات والمزيد."
      },
      {
        title: "💡 كفاءة التكلفة",
        desc: "قلل التكاليف مع الحفاظ على الأداء العالي — ادفع فقط لما تحتاجه."
      }
    ],
    processTitle: "كيف نوفر أفضل المواهب",
    processSteps: [
      {
        step: 1,
        title: "تحديد احتياجاتك",
        desc: "شاركنا احتياجاتك من المواهب ونطاق المشروع والنتائج المرجوة — نتماشى مع رؤيتك."
      },
      {
        step: 2,
        title: "اختيار المواهب المثالية",
        desc: "نطابقك مع محترفين من شبكتنا العالمية — مختارون ومدققون."
      },
      {
        step: 3,
        title: "الانضمام والتوسع",
        desc: "ابدأ التعاون مع فريقك الخارجي بسرعة وسلاسة."
      }
    ],
    readyTitle: "هل لديك أي سؤال عن خدماتنا؟",
    readyDesc: "نقدم استشارة مجانية، فلنتحدث الآن!",
    callBtn: "اتصل للاستشارة المجانية"
  },
  he: {
    heroTitle: "מיקור כישרונות",
    heroDesc: "העסק כישרונות מובילים להצלחת העסק שלך",
    heroBtn: "קבל פתרונות כישרון",
    sectionDesc: "גישה לרשת גלובלית של אנשי מקצוע מיומנים ב-IT, שיווק, תפעול ועוד. אנו עוזרים לך לבנות צוותים ביצועיים ללא עלויות מיותרות — בהתאמה לצרכי העסק שלך.",
    features: [
      "👩‍💻 אנשי מקצוע מומחים – כישרונות שנבדקו במגוון תחומים.",
      "🌍 הגעה גלובלית – גיוס מרחוק ממאגר כישרונות מגוון.",
      "📈 גמישות – הגדלת צוותים לפי דרישה, מפרויקטים ועד לטווח ארוך."
    ],
    expertiseTitle: "הניסיון שלנו בכישרונות",
    talentItems: [
      {
        title: "מומחי שיווק",
        subtitle: "שיווק דיגיטלי, SEO ותוכן.",
        img: ms,
      },
      {
        title: "מנהלי תפעול",
        subtitle: "ייעול תהליכים עסקיים וזרימות עבודה.",
        img: opm,
      },
      {
        title: "מעצבים יצירתיים",
        subtitle: "UI/UX, עיצוב גרפי ומיתוג.",
        img: cd,
      },
      {
        title: "אנליסטים",
        subtitle: "תובנות לפעולה לקבלת החלטות חכמות.",
        img: da,
      },
      {
        title: "תמיכת לקוחות",
        subtitle: "צוותי תמיכה אמינים 24/7.",
        img: cs,
      },
    ],
    whyTitle: "למה לבחור ב-Stackly למיקור כישרונות",
    why: [
      {
        title: "🎯 גיוס ממוקד",
        desc: "התאמה לאנשי מקצוע התואמים לצרכי העסק, התרבות והמטרות שלך."
      },
      {
        title: "🧠 מומחיות תעשייתית",
        desc: "הכישרונות שלנו מגיעים עם ניסיון עמוק ב-IT, שיווק, תפעול ועוד."
      },
      {
        title: "💡 יעילות בעלויות",
        desc: "הפחת עלויות תוך שמירה על ביצועים גבוהים — תשלם רק על מה שאתה צריך."
      }
    ],
    processTitle: "איך אנו מספקים כישרונות מובילים",
    processSteps: [
      {
        step: 1,
        title: "הגדרת צרכים",
        desc: "שתף את צרכי הכישרון, היקף הפרויקט והתוצאות הרצויות — אנו מתאימים לחזון שלך."
      },
      {
        step: 2,
        title: "איתור כישרון אידיאלי",
        desc: "התאמה לאנשי מקצוע מהרשת הגלובלית שלנו — נבחרים ונבדקים."
      },
      {
        step: 3,
        title: "הצטרפות והתרחבות",
        desc: "התחל לעבוד עם הצוות החיצוני שלך — במהירות ובקלות."
      }
    ],
    readyTitle: "יש לך שאלה על השירותים שלנו؟",
    readyDesc: "אנו מספקים ייעוץ חינם — דבר איתנו!",
    callBtn: "התקשר לייעוץ חינם"
  }
};

function Outsourcing() {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    const handleLanguageChange = () => setLanguage(localStorage.getItem("language") || "en");
    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  const t = translations[language];

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <section className="hero">
        <img className="hero-video" src={img1} alt={t.heroTitle} />
        <div className="hero-overlay">
          <h1>{t.heroTitle}</h1>
        </div>
      </section>

      <section className="cloud-section">
        <div className="cloud-container">
          {/* Left Content */}
          <div className="cloud-content">
            <h2>{t.heroDesc}</h2>
            <p>{t.sectionDesc}</p>

            <ul className="cloud-features">
              {t.features.map((feature, idx) => (
                <li key={idx}>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className="cloud-btn"
              onClick={() => handleGetStarted("/contact")}
            >
              {t.heroBtn}
            </button>
          </div>

          {/* Right Side Image */}
          <div className="cloud-image">
            <img src={os} alt={t.heroTitle} />
          </div>
        </div>
      </section>

      {/* Talent grid section */}
      <section className="talent-grid-section">
        <h2>{t.expertiseTitle}</h2>
        <div className="talent-grid">
          {t.talentItems.map(({ title, subtitle, img }, index) => (
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
        <h2>{t.whyTitle}</h2>
        <div className="why-container">
          {t.why.map((item, idx) => (
            <div className="why-item" key={idx}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="outsourcing-process">
        <h2>{t.processTitle}</h2>
        <div className="process-steps">
          {t.processSteps.map((step, idx) => (
            <div className="step-line" key={idx}>
              <div className="step-number">{step.step}</div>
              <div className="step-info">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="dark-mode-section">
        <div className="content">
          <h2>{t.readyTitle}</h2>
          <p>{t.readyDesc}</p>
        </div>
        <button className="call-btn">{t.callBtn}</button>
      </section>
    </div>
  );
}

export default Outsourcing;
