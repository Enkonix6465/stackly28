import React, { useState, useEffect } from "react";
import "./Outsourcing.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";

import img4 from "../images/image4.jpg";
import digital from "../images/digital.jpg";
import ms from "../images/ms.jpg";
import opm from "../images/opm.jpg";
import cd from "../images/cd.jpg";
import da from "../images/da.jpg";
import per from "../images/per.jpg";

// Translations object
const translations = {
  en: {
    heroTitle: "Digital Strategy Consulting",
    heroDesc: "Unlock Your Business Potential with Expert Digital Strategies",
    heroBtn: "Get Digital Strategy Consulting",
    sectionDesc: "We help you craft and execute digital strategies that align with your business goals, driving growth, engagement, and long-term success.",
    features: [
      "📈 Data-Driven Insights – Leverage analytics to make informed decisions.",
      "🎯 Targeted Campaigns – Reach your ideal customers efficiently.",
      "🔄 Continuous Optimization – Adapt strategies based on performance metrics."
    ],
    expertiseTitle: "Our Digital Strategy Expertise",
    talentItems: [
      {
        title: "Market Analysis",
        subtitle: "Identifying opportunities and competitive insights.",
        img: ms,
      },
      {
        title: "Customer Segmentation",
        subtitle: "Targeting the right audience with precision.",
        img: opm,
      },
      {
        title: "Channel Strategy",
        subtitle: "Optimizing digital channels for maximum impact.",
        img: cd,
      },
      {
        title: "Content Strategy",
        subtitle: "Crafting messaging that resonates and converts.",
        img: da,
      },
      {
        title: "Performance Tracking",
        subtitle: "Measuring KPIs to refine and improve strategies.",
        img: per,
      },
    ],
    whyTitle: "Why Choose Us for Digital Strategy Consulting?",
    why: [
      {
        title: "💡 Strategic Expertise",
        desc: "Proven frameworks and industry knowledge to craft winning strategies."
      },
      {
        title: "🔍 Analytical Approach",
        desc: "Deep data analysis ensures every decision drives measurable results."
      },
      {
        title: "🤝 Collaborative Partnership",
        desc: "We work closely with your team to align goals and ensure success."
      }
    ],
    processTitle: "Our Digital Strategy Consulting Process",
    processSteps: [
      {
        step: 1,
        title: "Discovery & Research",
        desc: "Understand your business, industry, and target audience."
      },
      {
        step: 2,
        title: "Strategy Development",
        desc: "Craft tailored digital strategies that align with your goals."
      },
      {
        step: 3,
        title: "Execution & Optimization",
        desc: "Implement strategies and continuously optimize for better outcomes."
      }
    ],
    readyTitle: "Ready to elevate your digital presence?",
    readyDesc: "Contact us today for a free consultation and start transforming your business.",
    callBtn: "CALL FOR FREE CONSULTATION"
  },
  ar: {
    heroTitle: "استشارات الاستراتيجية الرقمية",
    heroDesc: "افتح إمكانات عملك مع استراتيجيات رقمية خبيرة",
    heroBtn: "احصل على استشارات الاستراتيجية الرقمية",
    sectionDesc: "نساعدك في صياغة وتنفيذ استراتيجيات رقمية تتماشى مع أهداف عملك، وتدفع النمو والمشاركة والنجاح طويل الأمد.",
    features: [
      "📈 رؤى قائمة على البيانات – استخدم التحليلات لاتخاذ قرارات مستنيرة.",
      "🎯 حملات مستهدفة – الوصول إلى العملاء المثاليين بكفاءة.",
      "🔄 تحسين مستمر – تكييف الاستراتيجيات بناءً على مؤشرات الأداء."
    ],
    expertiseTitle: "خبرتنا في الاستراتيجية الرقمية",
    talentItems: [
      {
        title: "تحليل السوق",
        subtitle: "تحديد الفرص والرؤى التنافسية.",
        img: ms,
      },
      {
        title: "تقسيم العملاء",
        subtitle: "استهداف الجمهور المناسب بدقة.",
        img: opm,
      },
      {
        title: "استراتيجية القنوات",
        subtitle: "تحسين القنوات الرقمية لتحقيق أقصى تأثير.",
        img: cd,
      },
      {
        title: "استراتيجية المحتوى",
        subtitle: "صياغة رسائل مؤثرة ومحفزة للتحويل.",
        img: da,
      },
      {
        title: "تتبع الأداء",
        subtitle: "قياس مؤشرات الأداء لتحسين الاستراتيجيات.",
        img: per,
      },
    ],
    whyTitle: "لماذا تختارنا لاستشارات الاستراتيجية الرقمية؟",
    why: [
      {
        title: "💡 خبرة استراتيجية",
        desc: "أطر مثبتة ومعرفة صناعية لصياغة استراتيجيات ناجحة."
      },
      {
        title: "🔍 نهج تحليلي",
        desc: "تحليل بيانات عميق لضمان نتائج قابلة للقياس."
      },
      {
        title: "🤝 شراكة تعاونية",
        desc: "نعمل عن كثب مع فريقك لمواءمة الأهداف وضمان النجاح."
      }
    ],
    processTitle: "عملية استشارات الاستراتيجية الرقمية",
    processSteps: [
      {
        step: 1,
        title: "الاكتشاف والبحث",
        desc: "فهم عملك وصناعتك والجمهور المستهدف."
      },
      {
        step: 2,
        title: "تطوير الاستراتيجية",
        desc: "صياغة استراتيجيات رقمية مخصصة تتماشى مع أهدافك."
      },
      {
        step: 3,
        title: "التنفيذ والتحسين",
        desc: "تنفيذ الاستراتيجيات وتحسينها باستمرار لتحقيق نتائج أفضل."
      }
    ],
    readyTitle: "جاهز لتعزيز حضورك الرقمي؟",
    readyDesc: "اتصل بنا اليوم للحصول على استشارة مجانية وابدأ في تحويل عملك.",
    callBtn: "اتصل للاستشارة المجانية"
  },
  he: {
    heroTitle: "ייעוץ אסטרטגיה דיגיטלית",
    heroDesc: "ממש את פוטנציאל העסק שלך עם אסטרטגיות דיגיטליות מומחיות",
    heroBtn: "קבל ייעוץ אסטרטגיה דיגיטלית",
    sectionDesc: "אנו מסייעים לך לבנות וליישם אסטרטגיות דיגיטליות התואמות את מטרות העסק, ומקדמות צמיחה, מעורבות והצלחה ארוכת טווח.",
    features: [
      "📈 תובנות מבוססות נתונים – נצל אנליטיקות לקבלת החלטות מושכלות.",
      "🎯 קמפיינים ממוקדים – הגיע ללקוחות האידיאליים שלך ביעילות.",
      "🔄 אופטימיזציה מתמדת – התאם אסטרטגיות לפי מדדי ביצוע."
    ],
    expertiseTitle: "הניסיון שלנו באסטרטגיה דיגיטלית",
    talentItems: [
      {
        title: "ניתוח שוק",
        subtitle: "זיהוי הזדמנויות ותובנות תחרותיות.",
        img: ms,
      },
      {
        title: "סגמנטציה של לקוחות",
        subtitle: "מיקוד קהל מדויק.",
        img: opm,
      },
      {
        title: "אסטרטגיית ערוצים",
        subtitle: "אופטימיזציה של ערוצים דיגיטליים להשפעה מרבית.",
        img: cd,
      },
      {
        title: "אסטרטגיית תוכן",
        subtitle: "יצירת מסרים שמניעים וממירים.",
        img: da,
      },
      {
        title: "מעקב ביצועים",
        subtitle: "מדידת KPI לשיפור מתמיד.",
        img: per,
      },
    ],
    whyTitle: "למה לבחור בנו לייעוץ אסטרטגיה דיגיטלית?",
    why: [
      {
        title: "💡 מומחיות אסטרטגית",
        desc: "מודלים מוכחים וידע תעשייתי לבניית אסטרטגיות מנצחות."
      },
      {
        title: "🔍 גישה אנליטית",
        desc: "ניתוח נתונים מעמיק שמבטיח תוצאות מדידות."
      },
      {
        title: "🤝 שותפות שיתופית",
        desc: "עובדים בצמוד לצוות שלך ליישור מטרות ולהצלחה."
      }
    ],
    processTitle: "תהליך ייעוץ אסטרטגיה דיגיטלית",
    processSteps: [
      {
        step: 1,
        title: "גילוי ומחקר",
        desc: "הבנת העסק, הענף והקהל שלך."
      },
      {
        step: 2,
        title: "פיתוח אסטרטגיה",
        desc: "בניית אסטרטגיות דיגיטליות מותאמות למטרותיך."
      },
      {
        step: 3,
        title: "ביצוע ואופטימיזציה",
        desc: "יישום אסטרטגיות ואופטימיזציה מתמדת לתוצאות טובות יותר."
      }
    ],
    readyTitle: "מוכן להעצים את הנוכחות הדיגיטלית שלך?",
    readyDesc: "צור קשר היום לייעוץ חינם והתחל לשנות את העסק שלך.",
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
        <img className="hero-video" src={img4} alt={t.heroTitle} />
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
            <img src={digital} alt={t.heroTitle} />
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
