import React, { useState, useEffect } from "react";
import "./Outsourcing.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";

import img3 from "../images/image3.jpg";
import web from "../images/web.jpg";
import back from "../images/back.jpg";
import site from "../images/opm.jpg";
import sec from "../images/cd.jpg";
import content from "../images/da.jpg";
import cs from "../images/cs.jpg";

// Translations object
const translations = {
  en: {
    heroTitle: "Website Maintenance Services",
    heroDesc: "Keep Your Website Secure, Updated, and Running Smoothly",
    heroBtn: "Get Website Maintenance",
    sectionDesc: "Our comprehensive website maintenance services ensure your site stays current, secure, and performs optimally — so you can focus on your business.",
    features: [
      "🔄 Regular Updates – Plugins, themes, and content refreshed routinely.",
      "🔐 Security Checks – Proactive monitoring and malware protection.",
      "📊 Performance Optimization – Fast loading and smooth user experience."
    ],
    expertiseTitle: "Our Website Maintenance Expertise",
    talentItems: [
      {
        title: "Website Monitoring",
        subtitle: "Constant uptime and performance tracking.",
        img: site,
      },
      {
        title: "Content Updates",
        subtitle: "Keep your site fresh with timely updates.",
        img: content,
      },
      {
        title: "Security Management",
        subtitle: "Regular vulnerability scans and patching.",
        img: sec,
      },
      {
        title: "Backup & Recovery",
        subtitle: "Automated backups with quick restore options.",
        img: back,
      },
      {
        title: "Technical Support",
        subtitle: "Reliable assistance for any website issues.",
        img: cs,
      },
    ],
    whyTitle: "Why Choose Us for Website Maintenance?",
    why: [
      {
        title: "🛠️ Proactive Management",
        desc: "We prevent issues before they impact your website and users."
      },
      {
        title: "⏱️ Timely Updates",
        desc: "Stay ahead with regular content and software updates to avoid vulnerabilities."
      },
      {
        title: "🔧 Expert Support",
        desc: "Fast and reliable technical assistance whenever you need it."
      }
    ],
    processTitle: "How We Maintain Your Website",
    processSteps: [
      {
        step: 1,
        title: "Audit & Plan",
        desc: "Evaluate your site’s current health and outline a maintenance schedule."
      },
      {
        step: 2,
        title: "Update & Secure",
        desc: "Perform routine updates, backups, and security hardening."
      },
      {
        step: 3,
        title: "Monitor & Support",
        desc: "Continuous monitoring and responsive support for your website."
      }
    ],
    readyTitle: "Need help maintaining your website?",
    readyDesc: "Contact us today for a free consultation and keep your website in top shape!",
    callBtn: "CALL FOR FREE CONSULTATION"
  },
  ar: {
    heroTitle: "خدمات صيانة المواقع",
    heroDesc: "حافظ على موقعك آمنًا ومحدثًا ويعمل بسلاسة",
    heroBtn: "احصل على صيانة الموقع",
    sectionDesc: "تضمن خدمات صيانة المواقع الشاملة لدينا أن يبقى موقعك محدثًا وآمنًا ويعمل بأداء مثالي — حتى تتمكن من التركيز على عملك.",
    features: [
      "🔄 تحديثات منتظمة – تحديث الإضافات والقوالب والمحتوى بشكل دوري.",
      "🔐 فحوصات الأمان – مراقبة استباقية وحماية من البرمجيات الضارة.",
      "📊 تحسين الأداء – تحميل سريع وتجربة مستخدم سلسة."
    ],
    expertiseTitle: "خبرتنا في صيانة المواقع",
    talentItems: [
      {
        title: "مراقبة الموقع",
        subtitle: "مراقبة مستمرة للأداء والتشغيل.",
        img: site,
      },
      {
        title: "تحديث المحتوى",
        subtitle: "تحديثات منتظمة للحفاظ على الموقع حديثًا.",
        img: content,
      },
      {
        title: "إدارة الأمان",
        subtitle: "فحص الثغرات وتحديثات الأمان الدورية.",
        img: sec,
      },
      {
        title: "النسخ الاحتياطي والاستعادة",
        subtitle: "نسخ احتياطي تلقائي وخيارات استعادة سريعة.",
        img: back,
      },
      {
        title: "الدعم الفني",
        subtitle: "مساعدة موثوقة لأي مشاكل في الموقع.",
        img: cs,
      },
    ],
    whyTitle: "لماذا تختارنا لصيانة المواقع؟",
    why: [
      {
        title: "🛠️ إدارة استباقية",
        desc: "نمنع المشاكل قبل أن تؤثر على موقعك أو المستخدمين."
      },
      {
        title: "⏱️ تحديثات في الوقت المناسب",
        desc: "ابقَ متقدمًا بتحديثات منتظمة للمحتوى والبرمجيات لتجنب الثغرات."
      },
      {
        title: "🔧 دعم خبير",
        desc: "مساعدة فنية سريعة وموثوقة وقت الحاجة."
      }
    ],
    processTitle: "كيف نقوم بصيانة موقعك",
    processSteps: [
      {
        step: 1,
        title: "التدقيق والتخطيط",
        desc: "تقييم حالة الموقع الحالية ووضع جدول صيانة."
      },
      {
        step: 2,
        title: "التحديث والتأمين",
        desc: "تنفيذ التحديثات والنسخ الاحتياطي وتعزيز الأمان بشكل دوري."
      },
      {
        step: 3,
        title: "المراقبة والدعم",
        desc: "مراقبة مستمرة ودعم سريع لموقعك."
      }
    ],
    readyTitle: "تحتاج مساعدة في صيانة موقعك؟",
    readyDesc: "اتصل بنا اليوم للحصول على استشارة مجانية وابقَ موقعك في أفضل حالاته!",
    callBtn: "اتصل للاستشارة المجانية"
  },
  he: {
    heroTitle: "שירותי תחזוקת אתרים",
    heroDesc: "שמור על האתר שלך מאובטח, מעודכן ופועל חלק",
    heroBtn: "קבל תחזוקת אתר",
    sectionDesc: "שירותי תחזוקת האתרים המקיפים שלנו מבטיחים שהאתר שלך יישאר עדכני, מאובטח וביצועי — כדי שתוכל להתמקד בעסק שלך.",
    features: [
      "🔄 עדכונים שוטפים – תוספים, תבניות ותוכן מתעדכנים באופן קבוע.",
      "🔐 בדיקות אבטחה – ניטור יזום והגנה מפני נוזקות.",
      "📊 אופטימיזציית ביצועים – טעינה מהירה וחוויית משתמש חלקה."
    ],
    expertiseTitle: "הניסיון שלנו בתחזוקת אתרים",
    talentItems: [
      {
        title: "ניטור אתר",
        subtitle: "מעקב מתמיד אחר זמינות וביצועים.",
        img: site,
      },
      {
        title: "עדכוני תוכן",
        subtitle: "שמירה על אתר עדכני עם עדכונים בזמן.",
        img: content,
      },
      {
        title: "ניהול אבטחה",
        subtitle: "סריקות פגיעות ועדכונים שוטפים.",
        img: sec,
      },
      {
        title: "גיבוי ושחזור",
        subtitle: "גיבויים אוטומטיים ואפשרויות שחזור מהירות.",
        img: back,
      },
      {
        title: "תמיכה טכנית",
        subtitle: "סיוע אמין לכל בעיה באתר.",
        img: cs,
      },
    ],
    whyTitle: "למה לבחור בנו לתחזוקת אתרים?",
    why: [
      {
        title: "🛠️ ניהול יזום",
        desc: "מונעים בעיות לפני שהן משפיעות על האתר או המשתמשים שלך."
      },
      {
        title: "⏱️ עדכונים בזמן",
        desc: "הישאר מוביל עם עדכוני תוכן ותוכנה שוטפים למניעת פגיעויות."
      },
      {
        title: "🔧 תמיכה מקצועית",
        desc: "סיוע טכני מהיר ואמין בכל עת."
      }
    ],
    processTitle: "איך אנו מתחזקים את האתר שלך",
    processSteps: [
      {
        step: 1,
        title: "בדיקה ותכנון",
        desc: "הערכת מצב האתר ובניית לוח תחזוקה."
      },
      {
        step: 2,
        title: "עדכון ואבטחה",
        desc: "ביצוע עדכונים, גיבויים וחיזוק אבטחה באופן שוטף."
      },
      {
        step: 3,
        title: "ניטור ותמיכה",
        desc: "ניטור מתמשך ותמיכה מהירה לאתר שלך."
      }
    ],
    readyTitle: "צריך עזרה בתחזוקת האתר שלך?",
    readyDesc: "צור קשר היום לייעוץ חינם ושמור את האתר שלך במצב מעולה!",
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
        <img className="hero-video" src={img3} alt={t.heroTitle} />
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
            <img src={web} alt={t.heroTitle} />
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
