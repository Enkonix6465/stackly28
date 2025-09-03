import React, { useState, useEffect } from "react";
import "./Outsourcing.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";

import img5 from "../images/image5.jpg";
import cin from "../images/cin.jpg";
import ms from "../images/ms.jpg";
import opm from "../images/opm.jpg";
import cd from "../images/cd.jpg";
import da from "../images/da.jpg";
import cs from "../images/cs.jpg";

// Translations object
const translations = {
  en: {
    heroTitle: "Cloud Integration Services",
    heroDesc: "Integrate and Optimize Your Cloud Infrastructure Seamlessly",
    heroBtn: "Get Cloud Integration Solutions",
    sectionDesc: "Our cloud integration services enable your business to connect applications, data, and services for improved scalability, agility, and efficiency.",
    features: [
      "Scalable Solutions – Grow your infrastructure effortlessly with cloud technologies.",
      "Reliable Connectivity – Ensure smooth integration across platforms and services.",
      "Secure Architecture – Protect your data with best-in-class security measures."
    ],
    expertiseTitle: "Our Cloud Integration Expertise",
    talentItems: [
      {
        title: "Cloud Migration",
        subtitle: "Seamless transition from on-premises to cloud infrastructure.",
        img: ms,
      },
      {
        title: "API Integration",
        subtitle: "Connecting your applications for efficient data flow.",
        img: opm,
      },
      {
        title: "Hybrid Cloud Solutions",
        subtitle: "Combining on-premises and cloud for flexibility and control.",
        img: cd,
      },
      {
        title: "Cloud Security",
        subtitle: "Implementing robust security protocols for your cloud environment.",
        img: da,
      },
      {
        title: "Monitoring & Support",
        subtitle: "24/7 cloud infrastructure monitoring and technical support.",
        img: cs,
      },
    ],
    whyTitle: "Why Choose Us for Cloud Integration?",
    why: [
      {
        title: "🚀 Proven Expertise",
        desc: "Experienced engineers delivering tailored cloud solutions for your business needs."
      },
      {
        title: "🔍 Comprehensive Support",
        desc: "End-to-end management from planning to implementation and beyond."
      },
      {
        title: "🔐 Security Focused",
        desc: "Security-first approach to protect your cloud assets and data."
      }
    ],
    processTitle: "Our Cloud Integration Process",
    processSteps: [
      {
        step: 1,
        title: "Assessment & Planning",
        desc: "Analyze existing infrastructure and define integration goals."
      },
      {
        step: 2,
        title: "Implementation",
        desc: "Execute cloud migrations and integrations with minimal disruption."
      },
      {
        step: 3,
        title: "Monitoring & Optimization",
        desc: "Continuous monitoring and performance tuning for peak efficiency."
      }
    ],
    readyTitle: "Ready to streamline your cloud infrastructure?",
    readyDesc: "Contact us today for a free consultation and start integrating your cloud systems effortlessly.",
    callBtn: "CALL FOR FREE CONSULTATION"
  },
  ar: {
    heroTitle: "خدمات تكامل السحابة",
    heroDesc: "قم بدمج وتحسين بنية السحابة الخاصة بك بسلاسة",
    heroBtn: "احصل على حلول تكامل السحابة",
    sectionDesc: "تمكنك خدمات تكامل السحابة لدينا من ربط التطبيقات والبيانات والخدمات لتحسين قابلية التوسع والمرونة والكفاءة.",
    features: [
      "حلول قابلة للتوسع – نمِ بنيتك التحتية بسهولة باستخدام تقنيات السحابة.",
      "اتصال موثوق – ضمان تكامل سلس عبر المنصات والخدمات.",
      "بنية آمنة – حماية بياناتك بأفضل إجراءات الأمان."
    ],
    expertiseTitle: "خبرتنا في تكامل السحابة",
    talentItems: [
      {
        title: "ترحيل السحابة",
        subtitle: "انتقال سلس من البنية المحلية إلى السحابة.",
        img: ms,
      },
      {
        title: "تكامل واجهات البرمجة",
        subtitle: "ربط تطبيقاتك لتدفق بيانات فعال.",
        img: opm,
      },
      {
        title: "حلول السحابة الهجينة",
        subtitle: "دمج المحلي والسحابة لتحقيق المرونة والسيطرة.",
        img: cd,
      },
      {
        title: "أمان السحابة",
        subtitle: "تنفيذ بروتوكولات أمان قوية لبيئة السحابة الخاصة بك.",
        img: da,
      },
      {
        title: "المراقبة والدعم",
        subtitle: "مراقبة ودعم بنية السحابة على مدار الساعة.",
        img: cs,
      },
    ],
    whyTitle: "لماذا تختارنا لتكامل السحابة؟",
    why: [
      {
        title: "🚀 خبرة مثبتة",
        desc: "مهندسون ذوو خبرة يقدمون حلول سحابة مخصصة لاحتياجات عملك."
      },
      {
        title: "🔍 دعم شامل",
        desc: "إدارة شاملة من التخطيط إلى التنفيذ وما بعده."
      },
      {
        title: "🔐 تركيز على الأمان",
        desc: "نهج يركز على الأمان لحماية أصول وبيانات السحابة الخاصة بك."
      }
    ],
    processTitle: "عملية تكامل السحابة لدينا",
    processSteps: [
      {
        step: 1,
        title: "التقييم والتخطيط",
        desc: "تحليل البنية الحالية وتحديد أهداف التكامل."
      },
      {
        step: 2,
        title: "التنفيذ",
        desc: "تنفيذ عمليات الترحيل والتكامل السحابي بأقل قدر من التعطيل."
      },
      {
        step: 3,
        title: "المراقبة والتحسين",
        desc: "مراقبة مستمرة وتحسين الأداء لتحقيق الكفاءة القصوى."
      }
    ],
    readyTitle: "جاهز لتحسين بنية السحابة الخاصة بك؟",
    readyDesc: "اتصل بنا اليوم للحصول على استشارة مجانية وابدأ في دمج أنظمة السحابة بسهولة.",
    callBtn: "اتصل للاستشارة المجانية"
  },
  he: {
    heroTitle: "שירותי אינטגרציית ענן",
    heroDesc: "שלב ואופטימיז את תשתית הענן שלך בקלות",
    heroBtn: "קבל פתרונות אינטגרציית ענן",
    sectionDesc: "שירותי אינטגרציית הענן שלנו מאפשרים לעסק שלך לחבר אפליקציות, נתונים ושירותים לשיפור סקלאביליות, גמישות ויעילות.",
    features: [
      "פתרונות סקלאביליים – הגדל את התשתית שלך בקלות עם טכנולוגיות ענן.",
      "קישוריות אמינה – אינטגרציה חלקה בין פלטפורמות ושירותים.",
      "ארכיטקטורה מאובטחת – הגן על הנתונים שלך עם אמצעי אבטחה מתקדמים."
    ],
    expertiseTitle: "הניסיון שלנו באינטגרציית ענן",
    talentItems: [
      {
        title: "הגירה לענן",
        subtitle: "מעבר חלק מתשתית מקומית לענן.",
        img: ms,
      },
      {
        title: "אינטגרציית API",
        subtitle: "חיבור אפליקציות לזרימת נתונים יעילה.",
        img: opm,
      },
      {
        title: "פתרונות ענן היברידיים",
        subtitle: "שילוב מקומי וענן לגמישות ושליטה.",
        img: cd,
      },
      {
        title: "אבטחת ענן",
        subtitle: "יישום פרוטוקולי אבטחה מתקדמים לסביבת הענן שלך.",
        img: da,
      },
      {
        title: "ניטור ותמיכה",
        subtitle: "ניטור ותמיכה בתשתית הענן 24/7.",
        img: cs,
      },
    ],
    whyTitle: "למה לבחור בנו לאינטגרציית ענן?",
    why: [
      {
        title: "🚀 מומחיות מוכחת",
        desc: "מהנדסים מנוסים מספקים פתרונות ענן מותאמים לצרכי העסק שלך."
      },
      {
        title: "🔍 תמיכה מקיפה",
        desc: "ניהול מקצה לקצה מהתכנון ועד היישום ומעבר לכך."
      },
      {
        title: "🔐 ממוקד אבטחה",
        desc: "גישה ממוקדת אבטחה להגנה על נכסי ונתוני הענן שלך."
      }
    ],
    processTitle: "תהליך אינטגרציית הענן שלנו",
    processSteps: [
      {
        step: 1,
        title: "הערכה ותכנון",
        desc: "ניתוח תשתית קיימת והגדרת מטרות אינטגרציה."
      },
      {
        step: 2,
        title: "יישום",
        desc: "ביצוע הגירות ואינטגרציות ענן עם מינימום הפרעה.",
      },
      {
        step: 3,
        title: "ניטור ואופטימיזציה",
        desc: "ניטור מתמשך ושיפור ביצועים ליעילות מרבית."
      }
    ],
    readyTitle: "מוכן לייעל את תשתית הענן שלך?",
    readyDesc: "צור קשר היום לייעוץ חינם והתחל לשלב מערכות ענן בקלות.",
    callBtn: "התקשר לייעוץ חינם"
  }
};

function Cloudintegration() {
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
        <img className="hero-video" src={img5} alt={t.heroTitle} />
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
            <img src={cin} alt={t.heroTitle} />
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

export default Cloudintegration;
