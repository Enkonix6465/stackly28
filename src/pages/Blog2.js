import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog2.css";

// Translations object
const translations = {
  en: {
    title: "🧭 Explore Our Services: Empowering Your Business Forward",
    points: [
      {
        heading: "💼 1. Business Consulting",
        desc: "We analyze your operations, challenges, and goals to deliver custom strategies that streamline processes and drive growth."
      },
      {
        heading: "🧑‍💻 2. Digital Transformation",
        desc: "Upgrade your business with cutting-edge digital solutions—from workflow automation to cloud integration and analytics."
      },
      {
        heading: "🎯 3. Marketing & Branding",
        desc: "Build a powerful brand and reach your audience with targeted digital marketing, SEO, content strategy, and more."
      },
      {
        heading: "📱 4. App & Web Development",
        desc: "From concept to launch, we design and build scalable web and mobile applications tailored to your business needs."
      },
      {
        heading: "🔐 5. Cybersecurity Solutions",
        desc: "Protect your digital assets with robust cybersecurity frameworks, threat assessments, and compliance strategies."
      }
    ],
    readMore: "Explore all services →"
  },
  ar: {
    title: "🧭 استكشف خدماتنا: تمكين عملك نحو الأمام",
    points: [
      {
        heading: "💼 1. استشارات الأعمال",
        desc: "نحلل عملياتك وتحدياتك وأهدافك لتقديم استراتيجيات مخصصة تبسط العمليات وتدفع النمو."
      },
      {
        heading: "🧑‍💻 2. التحول الرقمي",
        desc: "قم بترقية عملك بحلول رقمية متقدمة من أتمتة سير العمل إلى تكامل السحابة والتحليلات."
      },
      {
        heading: "🎯 3. التسويق والعلامة التجارية",
        desc: "ابنِ علامة تجارية قوية وحقق وصولًا لجمهورك من خلال التسويق الرقمي المستهدف، وتحسين محركات البحث، واستراتيجية المحتوى، والمزيد."
      },
      {
        heading: "📱 4. تطوير التطبيقات والمواقع",
        desc: "من الفكرة إلى الإطلاق، نصمم ونبني تطبيقات ويب وجوال قابلة للتوسع ومخصصة لاحتياجات عملك."
      },
      {
        heading: "🔐 5. حلول الأمن السيبراني",
        desc: "احمِ أصولك الرقمية من خلال أطر أمن سيبراني قوية وتقييمات التهديدات واستراتيجيات الامتثال."
      }
    ],
    readMore: "استكشف جميع الخدمات →"
  },
  he: {
    title: "🧭 גלה את השירותים שלנו: מקדמים את העסק שלך קדימה",
    points: [
      {
        heading: "💼 1. ייעוץ עסקי",
        desc: "אנו מנתחים את הפעילות, האתגרים והמטרות שלך כדי לספק אסטרטגיות מותאמות שמייעלות תהליכים ומקדמות צמיחה."
      },
      {
        heading: "🧑‍💻 2. טרנספורמציה דיגיטלית",
        desc: "שדרג את העסק שלך עם פתרונות דיגיטליים מתקדמים — מאוטומציה ועד אינטגרציה בענן וניתוחים."
      },
      {
        heading: "🎯 3. שיווק ומיתוג",
        desc: "בנה מותג חזק והגיע לקהל שלך עם שיווק דיגיטלי ממוקד, SEO, אסטרטגיית תוכן ועוד."
      },
      {
        heading: "📱 4. פיתוח אפליקציות ואתרים",
        desc: "מהרעיון ועד ההשקה, אנו מעצבים ומפתחים אפליקציות ואתרי אינטרנט סקלאביליים המותאמים לעסק שלך."
      },
      {
        heading: "🔐 5. פתרונות סייבר",
        desc: "הגן על הנכסים הדיגיטליים שלך עם מסגרות סייבר חזקות, הערכות איומים ואסטרטגיות רגולציה."
      }
    ],
    readMore: "גלה את כל השירותים →"
  }
};

const getLanguage = () => localStorage.getItem("language") || "en";

const Blog2 = () => {
  const [language, setLanguage] = useState(getLanguage());

  useEffect(() => {
    const handleLanguageChange = () => setLanguage(getLanguage());
    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  const t = translations[language];

  return (
    <section className="ai-data-section">
      <div className="ai-data-card">
        <h2 className="ai-data-title">{t.title}</h2>
        {t.points.map((point, idx) => (
          <div className="ai-point" data-aos="fade-up" data-aos-delay={idx * 100} key={idx}>
            <h3>{point.heading}</h3>
            <p>{point.desc}</p>
          </div>
        ))}
        <Link to="/services" className="ai-read-more">
          {t.readMore}
        </Link>
      </div>
    </section>
  );
};

export default Blog2;
