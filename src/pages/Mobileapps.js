import React, { useState, useEffect } from "react";
import "./Outsourcing.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";

import img2 from "../images/image2.jpg";
import app from "../images/app.jpg";
import ios from "../images/ios.jpg";
import ui from "../images/ui.jpg";
import and from "../images/and.jpg";
import mt from "../images/mt.jpg";
import pm from "../images/pm.jpg";

// Translations object
const translations = {
  en: {
    heroTitle: "Mobile Apps Development",
    heroDesc: "Build High-Performance Mobile Apps Tailored to Your Needs",
    heroBtn: "Get Mobile App Solutions",
    sectionDesc: "From concept to launch, we deliver custom mobile applications on both iOS and Android platforms. Our team blends innovation with usability to create apps that engage and delight users.",
    features: [
      "📱 Cross-Platform Expertise – Native and hybrid app development.",
      "🚀 Fast Delivery – Agile workflows ensure timely releases.",
      "🔒 Secure and Scalable – Built for growth with industry best practices."
    ],
    expertiseTitle: "Our Mobile App Development Expertise",
    talentItems: [
      {
        title: "iOS Developers",
        subtitle: "Building seamless and efficient iOS apps.",
        img: ios,
      },
      {
        title: "Android Developers",
        subtitle: "Expertise in Kotlin and Java for robust Android apps.",
        img: ui,
      },
      {
        title: "UI/UX Designers",
        subtitle: "Designing intuitive and engaging mobile experiences.",
        img: and,
      },
      {
        title: "QA Testers",
        subtitle: "Ensuring your app is bug-free and performs flawlessly.",
        img: mt,
      },
      {
        title: "Project Managers",
        subtitle: "Managing timelines and deliveries efficiently.",
        img: pm,
      },
    ],
    whyTitle: "Why Choose Us for Your Mobile Apps?",
    why: [
      {
        title: "⚙️ Technical Excellence",
        desc: "Skilled developers using the latest tools and frameworks for flawless apps."
      },
      {
        title: "🎯 User-Centered Design",
        desc: "Creating intuitive interfaces that provide outstanding user experiences."
      },
      {
        title: "💡 Innovation Focus",
        desc: "Incorporating cutting-edge features like AI, AR, and real-time analytics."
      }
    ],
    processTitle: "How We Develop Your Mobile App",
    processSteps: [
      {
        step: 1,
        title: "Discover & Plan",
        desc: "Understand your app goals, target users, and business objectives."
      },
      {
        step: 2,
        title: "Design & Develop",
        desc: "Craft UI/UX designs and develop the app with agile iterations."
      },
      {
        step: 3,
        title: "Test & Launch",
        desc: "Perform comprehensive testing and deploy to app stores."
      }
    ],
    readyTitle: "Questions about our mobile app services?",
    readyDesc: "Contact us for a free consultation and let’s get started!",
    callBtn: "CALL FOR FREE CONSULTATION"
  },
  ar: {
    heroTitle: "تطوير تطبيقات الجوال",
    heroDesc: "ابنِ تطبيقات جوال عالية الأداء مصممة خصيصًا لاحتياجاتك",
    heroBtn: "احصل على حلول تطبيقات الجوال",
    sectionDesc: "من الفكرة إلى الإطلاق، نقدم تطبيقات جوال مخصصة على منصتي iOS وAndroid. يجمع فريقنا بين الابتكار وسهولة الاستخدام لإنشاء تطبيقات تجذب وتبهر المستخدمين.",
    features: [
      "📱 خبرة عبر الأنظمة – تطوير تطبيقات أصلية وهجينة.",
      "🚀 تسليم سريع – سير عمل مرن يضمن الإطلاق في الوقت المناسب.",
      "🔒 آمن وقابل للتوسع – مصمم للنمو وفق أفضل الممارسات."
    ],
    expertiseTitle: "خبرتنا في تطوير تطبيقات الجوال",
    talentItems: [
      {
        title: "مطورو iOS",
        subtitle: "بناء تطبيقات iOS سلسة وفعالة.",
        img: ios,
      },
      {
        title: "مطورو Android",
        subtitle: "خبرة في Kotlin وJava لتطبيقات Android قوية.",
        img: ui,
      },
      {
        title: "مصممو UI/UX",
        subtitle: "تصميم تجارب جوال بديهية وجذابة.",
        img: and,
      },
      {
        title: "مختبرو الجودة",
        subtitle: "ضمان خلو التطبيق من الأخطاء وأداءه المثالي.",
        img: mt,
      },
      {
        title: "مديرو المشاريع",
        subtitle: "إدارة الجداول الزمنية والتسليم بكفاءة.",
        img: pm,
      },
    ],
    whyTitle: "لماذا تختارنا لتطبيقات الجوال؟",
    why: [
      {
        title: "⚙️ تميز تقني",
        desc: "مطورون ماهرون يستخدمون أحدث الأدوات والأطر لتطبيقات مثالية."
      },
      {
        title: "🎯 تصميم يركز على المستخدم",
        desc: "إنشاء واجهات بديهية توفر تجربة مستخدم رائعة."
      },
      {
        title: "💡 تركيز على الابتكار",
        desc: "دمج ميزات متقدمة مثل الذكاء الاصطناعي والواقع المعزز والتحليلات الفورية."
      }
    ],
    processTitle: "كيف نطور تطبيق الجوال الخاص بك",
    processSteps: [
      {
        step: 1,
        title: "الاكتشاف والتخطيط",
        desc: "فهم أهداف التطبيق والجمهور المستهدف وأهداف العمل."
      },
      {
        step: 2,
        title: "التصميم والتطوير",
        desc: "تصميم واجهات المستخدم وتجربة المستخدم وتطوير التطبيق بأسلوب مرن."
      },
      {
        step: 3,
        title: "الاختبار والإطلاق",
        desc: "إجراء اختبارات شاملة ونشر التطبيق في المتاجر."
      }
    ],
    readyTitle: "أسئلة حول خدمات تطبيقات الجوال؟",
    readyDesc: "اتصل بنا للحصول على استشارة مجانية ولنبدأ!",
    callBtn: "اتصل للاستشارة المجانية"
  },
  he: {
    heroTitle: "פיתוח אפליקציות מובייל",
    heroDesc: "בנה אפליקציות מובייל ביצועיות המותאמות לצרכים שלך",
    heroBtn: "קבל פתרונות אפליקציות מובייל",
    sectionDesc: "מהרעיון ועד ההשקה, אנו מספקים אפליקציות מותאמות ל-iOS ולאנדרואיד. הצוות שלנו משלב חדשנות עם שימושיות ליצירת אפליקציות שמרתקות ומשמחות משתמשים.",
    features: [
      "📱 מומחיות חוצת פלטפורמות – פיתוח אפליקציות מקוריות והיברידיות.",
      "🚀 אספקה מהירה – תהליכי עבודה אג'יליים להבטחת השקה בזמן.",
      "🔒 מאובטח וסקלאבילי – בנוי לצמיחה לפי תקני התעשייה."
    ],
    expertiseTitle: "הניסיון שלנו בפיתוח אפליקציות מובייל",
    talentItems: [
      {
        title: "מפתחי iOS",
        subtitle: "בניית אפליקציות iOS חלקות ויעילות.",
        img: ios,
      },
      {
        title: "מפתחי Android",
        subtitle: "מומחיות ב-Kotlin ו-Java לאפליקציות אנדרואיד חזקות.",
        img: ui,
      },
      {
        title: "מעצבי UI/UX",
        subtitle: "עיצוב חוויות מובייל אינטואיטיביות ומרתקות.",
        img: and,
      },
      {
        title: "בודקי QA",
        subtitle: "הבטחת אפליקציה נקייה מתקלות וביצועים מושלמים.",
        img: mt,
      },
      {
        title: "מנהלי פרויקטים",
        subtitle: "ניהול לוחות זמנים ומסירה ביעילות.",
        img: pm,
      },
    ],
    whyTitle: "למה לבחור בנו לאפליקציות מובייל?",
    why: [
      {
        title: "⚙️ מצוינות טכנית",
        desc: "מפתחים מיומנים המשתמשים בכלים ובמסגרות החדישים ביותר."
      },
      {
        title: "🎯 עיצוב ממוקד משתמש",
        desc: "יצירת ממשקים אינטואיטיביים לחוויית משתמש יוצאת דופן."
      },
      {
        title: "💡 מיקוד בחדשנות",
        desc: "שילוב תכונות מתקדמות כמו AI, AR וניתוחים בזמן אמת."
      }
    ],
    processTitle: "איך אנו מפתחים את אפליקציית המובייל שלך",
    processSteps: [
      {
        step: 1,
        title: "גילוי ותכנון",
        desc: "הבנת מטרות האפליקציה, קהל היעד ומטרות העסק."
      },
      {
        step: 2,
        title: "עיצוב ופיתוח",
        desc: "עיצוב UI/UX ופיתוח האפליקציה באיטרציות אג'יליות."
      },
      {
        step: 3,
        title: "בדיקה והשקה",
        desc: "בדיקות מקיפות והשקה לחנויות האפליקציות."
      }
    ],
    readyTitle: "שאלות על שירותי אפליקציות מובייל?",
    readyDesc: "צור קשר לייעוץ חינם ונתחיל!",
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
        <img className="hero-video" src={img2} alt={t.heroTitle} />
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
            <img src={app} alt={t.heroTitle} />
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
