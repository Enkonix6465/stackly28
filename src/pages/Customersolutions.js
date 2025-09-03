import React, { useState, useEffect } from "react";
import "./Outsourcing.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";

import img6 from "../images/image6.jpg";
import cus from "../images/cus.jpg";
import ms from "../images/ms.jpg";
import opm from "../images/opm.jpg";
import cd from "../images/cd.jpg";
import da from "../images/da.jpg";
import cs from "../images/cs.jpg";

// Translations object
const translations = {
  en: {
    heroTitle: "Customer Experience Solutions",
    heroDesc: "Enhance Engagement and Build Lasting Customer Relationships",
    heroBtn: "Get Customer Experience Solutions",
    sectionDesc: "Our customer experience solutions help you deliver personalized, seamless interactions that drive satisfaction and loyalty.",
    features: [
      "🤝 Customer-Centric Design – Craft experiences that resonate and delight.",
      "📊 Data-Driven Insights – Use analytics to understand and predict customer needs.",
      "🔄 Continuous Improvement – Iterate and optimize for better engagement."
    ],
    expertiseTitle: "Our Customer Experience Expertise",
    talentItems: [
      {
        title: "Customer Journey Mapping",
        subtitle: "Visualizing customer interactions to enhance experience.",
        img: ms,
      },
      {
        title: "Omnichannel Support",
        subtitle: "Seamless experience across all communication channels.",
        img: opm,
      },
      {
        title: "Personalization",
        subtitle: "Tailoring content and offers to individual customer needs.",
        img: cd,
      },
      {
        title: "Feedback & Analytics",
        subtitle: "Collecting and analyzing customer insights for improvement.",
        img: da,
      },
      {
        title: "Loyalty Programs",
        subtitle: "Designing initiatives to boost customer retention and satisfaction.",
        img: cs,
      },
    ],
    whyTitle: "Why Choose Us for Customer Experience Solutions?",
    why: [
      {
        title: "🌟 Proven Methodologies",
        desc: "Using best practices and innovative tools to enhance every customer touchpoint."
      },
      {
        title: "🔍 Insight-Driven",
        desc: "Leveraging data and feedback to create impactful experiences."
      },
      {
        title: "🤝 Collaborative Approach",
        desc: "Partnering closely with your team to align goals and deliver results."
      }
    ],
    processTitle: "Our Customer Experience Process",
    processSteps: [
      {
        step: 1,
        title: "Research & Insights",
        desc: "Understand your customers’ needs, behaviors, and pain points."
      },
      {
        step: 2,
        title: "Design & Implementation",
        desc: "Develop tailored solutions to improve interactions and satisfaction."
      },
      {
        step: 3,
        title: "Measurement & Optimization",
        desc: "Track performance and continuously enhance customer experiences."
      }
    ],
    readyTitle: "Ready to transform your customer experience?",
    readyDesc: "Contact us today for a free consultation and start creating loyal, engaged customers.",
    callBtn: "CALL FOR FREE CONSULTATION"
  },
  ar: {
    heroTitle: "حلول تجربة العملاء",
    heroDesc: "عزز التفاعل وابنِ علاقات دائمة مع العملاء",
    heroBtn: "احصل على حلول تجربة العملاء",
    sectionDesc: "تساعدك حلول تجربة العملاء لدينا على تقديم تفاعلات شخصية وسلسة تزيد من الرضا والولاء.",
    features: [
      "🤝 تصميم يركز على العميل – ابتكر تجارب تلامس وتبهر العملاء.",
      "📊 رؤى قائمة على البيانات – استخدم التحليلات لفهم وتوقع احتياجات العملاء.",
      "🔄 تحسين مستمر – طور وحسن باستمرار لتحقيق تفاعل أفضل."
    ],
    expertiseTitle: "خبرتنا في تجربة العملاء",
    talentItems: [
      {
        title: "رسم رحلة العميل",
        subtitle: "تصور تفاعلات العميل لتعزيز التجربة.",
        img: ms,
      },
      {
        title: "دعم متعدد القنوات",
        subtitle: "تجربة سلسة عبر جميع قنوات التواصل.",
        img: opm,
      },
      {
        title: "التخصيص",
        subtitle: "تخصيص المحتوى والعروض لاحتياجات كل عميل.",
        img: cd,
      },
      {
        title: "التغذية الراجعة والتحليلات",
        subtitle: "جمع وتحليل رؤى العملاء للتحسين.",
        img: da,
      },
      {
        title: "برامج الولاء",
        subtitle: "تصميم مبادرات لتعزيز الاحتفاظ بالعملاء ورضاهم.",
        img: cs,
      },
    ],
    whyTitle: "لماذا تختارنا لحلول تجربة العملاء؟",
    why: [
      {
        title: "🌟 منهجيات مثبتة",
        desc: "استخدام أفضل الممارسات والأدوات المبتكرة لتحسين كل نقطة تواصل مع العميل."
      },
      {
        title: "🔍 مدفوع بالرؤى",
        desc: "الاستفادة من البيانات والتغذية الراجعة لإنشاء تجارب مؤثرة."
      },
      {
        title: "🤝 نهج تعاوني",
        desc: "الشراكة الوثيقة مع فريقك لمواءمة الأهداف وتحقيق النتائج."
      }
    ],
    processTitle: "عملية تجربة العملاء لدينا",
    processSteps: [
      {
        step: 1,
        title: "البحث والرؤى",
        desc: "فهم احتياجات وسلوكيات ونقاط ألم العملاء."
      },
      {
        step: 2,
        title: "التصميم والتنفيذ",
        desc: "تطوير حلول مخصصة لتحسين التفاعلات والرضا."
      },
      {
        step: 3,
        title: "القياس والتحسين",
        desc: "تتبع الأداء وتحسين تجارب العملاء باستمرار."
      }
    ],
    readyTitle: "جاهز لتحويل تجربة عملائك؟",
    readyDesc: "اتصل بنا اليوم للحصول على استشارة مجانية وابدأ في إنشاء عملاء مخلصين ومتفاعلين.",
    callBtn: "اتصل للاستشارة المجانية"
  },
  he: {
    heroTitle: "פתרונות חווית לקוח",
    heroDesc: "שפר מעורבות ובנה קשרים ארוכי טווח עם לקוחות",
    heroBtn: "קבל פתרונות חווית לקוח",
    sectionDesc: "פתרונות חווית הלקוח שלנו עוזרים לך לספק אינטראקציות מותאמות אישית וחלקות שמקדמות שביעות רצון ונאמנות.",
    features: [
      "🤝 עיצוב ממוקד לקוח – צור חוויות שמרגשות ומשמחות.",
      "📊 תובנות מבוססות נתונים – השתמש באנליטיקות להבנת צרכי הלקוח.",
      "🔄 שיפור מתמיד – שפר וחדש למעורבות טובה יותר."
    ],
    expertiseTitle: "הניסיון שלנו בחווית לקוח",
    talentItems: [
      {
        title: "מיפוי מסע לקוח",
        subtitle: "המחשת אינטראקציות לקוח לשיפור החוויה.",
        img: ms,
      },
      {
        title: "תמיכה רב-ערוצית",
        subtitle: "חווית לקוח חלקה בכל ערוצי התקשורת.",
        img: opm,
      },
      {
        title: "התאמה אישית",
        subtitle: "התאמת תוכן והצעות לצרכי כל לקוח.",
        img: cd,
      },
      {
        title: "משוב וניתוחים",
        subtitle: "איסוף וניתוח תובנות לקוח לשיפור.",
        img: da,
      },
      {
        title: "תוכניות נאמנות",
        subtitle: "עיצוב יוזמות להגדלת נאמנות ושביעות רצון לקוחות.",
        img: cs,
      },
    ],
    whyTitle: "למה לבחור בנו לחווית לקוח?",
    why: [
      {
        title: "🌟 מתודולוגיות מוכחות",
        desc: "שימוש בשיטות עבודה מומלצות וכלים חדשניים לשיפור כל נקודת מגע עם הלקוח."
      },
      {
        title: "🔍 מונע תובנות",
        desc: "מינוף נתונים ומשוב ליצירת חוויות משמעותיות."
      },
      {
        title: "🤝 גישה שיתופית",
        desc: "עבודה צמודה עם הצוות שלך ליישור מטרות והשגת תוצאות."
      }
    ],
    processTitle: "תהליך חווית הלקוח שלנו",
    processSteps: [
      {
        step: 1,
        title: "מחקר ותובנות",
        desc: "הבנת צרכים, התנהגויות ונקודות כאב של לקוחות."
      },
      {
        step: 2,
        title: "עיצוב ויישום",
        desc: "פיתוח פתרונות מותאמים לשיפור אינטראקציות ושביעות רצון.",
      },
      {
        step: 3,
        title: "מדידה ואופטימיזציה",
        desc: "מעקב אחר ביצועים ושיפור מתמיד של חווית הלקוח."
      }
    ],
    readyTitle: "מוכן לשדרג את חווית הלקוח שלך?",
    readyDesc: "צור קשר היום לייעוץ חינם והתחל ליצור לקוחות נאמנים ומעורבים.",
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
        <img className="hero-video" src={img6} alt={t.heroTitle} />
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
            <img src={cus} alt={t.heroTitle} />
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
