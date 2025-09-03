import React, { useState, useEffect, useRef } from "react";
import "./Home2.css";
import { useDarkMode } from "../context/Darkmodecontext";
import aboutvid from "../images/aboutvid.mp4";
import businessImg from "../images/businessImg.jpg";
import { Link } from "react-router-dom";
import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.jpg";
import logo3 from "../images/logo3.jpg";
import logo4 from "../images/logo4.jpg";
import logo5 from "../images/logo5.jpg";

const logos = [
  { src: logo1, alt: "Merck" },
  { src: logo2, alt: "Gusto" },
  { src: logo3, alt: "HCA Healthcare" },
  { src: logo4, alt: "Logo 4" },
  { src: logo5, alt: "Logo 5" },
];

// Translations object
const translations = {
  en: {
    heroTitle: "Driving Success Through Insightful Solutions.",
    heroDesc: "Partnering with you to transform challenges into opportunities.",
    offerTitle: "What We Offer",
    itConsulting: "IT Consulting",
    itConsultingDesc: "Our IT consulting team will provide you with the highly available technology platform that you need.",
    cybersecurity: "Cybersecurity Consulting",
    cybersecurityDesc: "Protect your digital assets with end-to-end cybersecurity strategies, threat monitoring, and compliance support.",
    marketing: "Marketing",
    marketingDesc: "Increase your business presence and generate leads with AI-powered Digital Marketing, Ads & SEO.",
    dataAnalytics: "Data Analytics",
    dataAnalyticsDesc: "Unlock actionable insights from your data using advanced analytics, dashboards, and AI-driven reporting tools.",
    iotai: "IoT & AI",
    iotaiDesc: "Our AI-based IoT solutions use machine learning for risk reduction, efficiency & cost savings.",
    cloudServices: "Cloud Services",
    cloudServicesDesc: "Modernize your infrastructure with scalable, secure, and cost-effective cloud solutions tailored to your business needs.",
    partnersTitle: "Our Network of Trusted Property Partners",
    partnersSubtitle: "We collaborate with top developers, builders, and property consultants to bring you premium real estate opportunities.",
    workApproach: "Our Work Approach",
    workSubtitle: "A streamlined process designed to deliver quality results efficiently",
    discovery: "Initial Discovery",
    discoveryDesc: "We begin by understanding your business goals and requirements to tailor the best solution.",
    planning: "Planning & Strategy",
    planningDesc: "Our team crafts a detailed project plan and roadmap aligned with your objectives.",
    development: "Development & Testing",
    developmentDesc: "We develop robust software with continuous testing to ensure high quality and reliability.",
    launch: "Launch & Support",
    launchDesc: "After deployment, we provide ongoing support to ensure smooth operation and improvements.",
    achievements: "Our Achievements",
    happyClients: "Happy Clients",
    projectsCompleted: "Projects Completed",
    industriesServed: "Industries Served",
    yearsExperience: "Years of Experience",
    businessSolutions: "Tailored Business Solutions",
    businessDesc: "We don’t offer one-size-fits-all. Our consultation services are customized to your business goals, challenges, and industry.",
    strategy: "Strategy & Growth Consulting",
    processOpt: "Business Process Optimization",
    digitalTrans: "Digital Transformation Advisory",
    marketEntry: "Market Entry & Expansion Plans",
    getConsult: "Get Free Consultation"
  },
  ar: {
    heroTitle: "قيادة النجاح من خلال حلول مدروسة.",
    heroDesc: "نتعاون معك لتحويل التحديات إلى فرص.",
    offerTitle: "ماذا نقدم",
    itConsulting: "استشارات تقنية المعلومات",
    itConsultingDesc: "سيقدم لك فريق استشارات تقنية المعلومات لدينا منصة تقنية عالية التوافر تحتاجها.",
    cybersecurity: "استشارات الأمن السيبراني",
    cybersecurityDesc: "احمِ أصولك الرقمية باستراتيجيات أمن سيبراني شاملة، ومراقبة التهديدات، ودعم الامتثال.",
    marketing: "التسويق",
    marketingDesc: "زد من حضور عملك وحقق المزيد من العملاء المحتملين من خلال التسويق الرقمي المدعوم بالذكاء الاصطناعي والإعلانات وتحسين محركات البحث.",
    dataAnalytics: "تحليل البيانات",
    dataAnalyticsDesc: "اكتشف رؤى قابلة للتنفيذ من بياناتك باستخدام التحليلات المتقدمة ولوحات المعلومات وأدوات التقارير المدعومة بالذكاء الاصطناعي.",
    iotai: "إنترنت الأشياء والذكاء الاصطناعي",
    iotaiDesc: "تستخدم حلول إنترنت الأشياء المدعومة بالذكاء الاصطناعي لدينا التعلم الآلي لتقليل المخاطر وزيادة الكفاءة وتوفير التكاليف.",
    cloudServices: "خدمات السحابة",
    cloudServicesDesc: "حدث بنيتك التحتية بحلول سحابية قابلة للتوسع وآمنة وفعالة من حيث التكلفة ومصممة خصيصًا لاحتياجات عملك.",
    partnersTitle: "شبكة شركائنا الموثوقين في العقارات",
    partnersSubtitle: "نتعاون مع أفضل المطورين والبنائين ومستشاري العقارات لتقديم فرص عقارية مميزة.",
    workApproach: "نهج عملنا",
    workSubtitle: "عملية مبسطة مصممة لتقديم نتائج عالية الجودة بكفاءة",
    discovery: "الاكتشاف الأولي",
    discoveryDesc: "نبدأ بفهم أهداف عملك واحتياجاتك لتقديم أفضل حل.",
    planning: "التخطيط والاستراتيجية",
    planningDesc: "يصمم فريقنا خطة مشروع مفصلة وخريطة طريق تتماشى مع أهدافك.",
    development: "التطوير والاختبار",
    developmentDesc: "نطور برامج قوية مع اختبارات مستمرة لضمان الجودة العالية والموثوقية.",
    launch: "الإطلاق والدعم",
    launchDesc: "بعد النشر، نقدم دعمًا مستمرًا لضمان التشغيل السلس والتحسينات.",
    achievements: "إنجازاتنا",
    happyClients: "عملاء سعداء",
    projectsCompleted: "المشاريع المنجزة",
    industriesServed: "الصناعات المخدومة",
    yearsExperience: "سنوات الخبرة",
    businessSolutions: "حلول أعمال مخصصة",
    businessDesc: "لا نقدم حلولًا موحدة. خدمات الاستشارات لدينا مخصصة لأهداف عملك وتحدياتك وصناعتك.",
    strategy: "استشارات الاستراتيجية والنمو",
    processOpt: "تحسين العمليات التجارية",
    digitalTrans: "استشارات التحول الرقمي",
    marketEntry: "خطط دخول السوق والتوسع",
    getConsult: "احصل على استشارة مجانية"
  },
  he: {
    heroTitle: "הצלחה מונעת באמצעות פתרונות תובנתיים.",
    heroDesc: "שותפים איתך להפוך אתגרים להזדמנויות.",
    offerTitle: "מה אנחנו מציעים",
    itConsulting: "ייעוץ IT",
    itConsultingDesc: "צוות הייעוץ שלנו יספק לך את פלטפורמת הטכנולוגיה הזמינה שאתה צריך.",
    cybersecurity: "ייעוץ סייבר",
    cybersecurityDesc: "הגן על הנכסים הדיגיטליים שלך עם אסטרטגיות סייבר מקיפות, ניטור איומים ותמיכה ברגולציה.",
    marketing: "שיווק",
    marketingDesc: "הגדל את הנוכחות העסקית שלך וייצר לידים עם שיווק דיגיטלי מבוסס AI, פרסום וקידום אתרים.",
    dataAnalytics: "אנליטיקת נתונים",
    dataAnalyticsDesc: "גלה תובנות מהנתונים שלך באמצעות אנליטיקות מתקדמות, לוחות מחוונים וכלי דיווח מבוססי AI.",
    iotai: "IoT ובינה מלאכותית",
    iotaiDesc: "הפתרונות שלנו מבוססי AI ו-IoT משתמשים בלמידת מכונה להפחתת סיכונים, יעילות וחיסכון בעלויות.",
    cloudServices: "שירותי ענן",
    cloudServicesDesc: "חדש את התשתית שלך עם פתרונות ענן סקלאביליים, מאובטחים ומשתלמים המותאמים לעסק שלך.",
    partnersTitle: "רשת שותפי הנדל\"ן המהימנים שלנו",
    partnersSubtitle: "אנו משתפים פעולה עם מפתחים, בונים ויועצי נדל\"ן מובילים כדי להביא לך הזדמנויות נדל\"ן פרימיום.",
    workApproach: "הגישה שלנו לעבודה",
    workSubtitle: "תהליך ממוקד תוצאה שנועד לספק תוצאות איכותיות ביעילות",
    discovery: "גילוי ראשוני",
    discoveryDesc: "מתחילים בהבנת מטרות העסק שלך ודרישותיך כדי להתאים את הפתרון הטוב ביותר.",
    planning: "תכנון ואסטרטגיה",
    planningDesc: "הצוות שלנו בונה תוכנית פרויקט מפורטת ומפת דרכים התואמת את יעדיך.",
    development: "פיתוח ובדיקות",
    developmentDesc: "מפתחים תוכנה חזקה עם בדיקות מתמשכות להבטחת איכות גבוהה ואמינות.",
    launch: "השקה ותמיכה",
    launchDesc: "לאחר ההשקה, אנו מספקים תמיכה שוטפת להבטחת פעולה חלקה ושיפורים.",
    achievements: "ההישגים שלנו",
    happyClients: "לקוחות מרוצים",
    projectsCompleted: "פרויקטים שהושלמו",
    industriesServed: "ענפים בהם פעלנו",
    yearsExperience: "שנות ניסיון",
    businessSolutions: "פתרונות עסקיים מותאמים אישית",
    businessDesc: "אנו לא מציעים פתרון אחד לכולם. שירותי הייעוץ שלנו מותאמים למטרות, אתגרים וענף העסק שלך.",
    strategy: "ייעוץ אסטרטגיה וצמיחה",
    processOpt: "ייעול תהליכים עסקיים",
    digitalTrans: "ייעוץ טרנספורמציה דיגיטלית",
    marketEntry: "תוכניות כניסה לשוק והתרחבות",
    getConsult: "קבל ייעוץ חינם"
  }
};

const getLanguage = () => localStorage.getItem("language") || "en";

function formatNumber(num, suffix) {
  if (suffix === "K") {
    return (num / 1000).toFixed(1) + "K";
  }
  if (suffix === "M") {
    return (num / 1000000).toFixed(1) + "M";
  }
  return Math.ceil(num) + suffix;
}

function Home2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { darkMode } = useDarkMode();
  const countersRef = useRef([]);
  const [language, setLanguage] = useState(getLanguage());

  useEffect(() => {
    const handleLanguageChange = () => setLanguage(getLanguage());
    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  useEffect(() => {
    const counters = countersRef.current;
    let observer;

    const startCounting = (counter) => {
      if (!counter) return;
      const target = parseInt(counter.getAttribute("data-target"), 10);
      const suffix = counter.getAttribute("data-suffix") || "";
      let count = 0;
      const speed = 50;
      const increment = target / speed;

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = formatNumber(count, suffix);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = formatNumber(target, suffix);
        }
      };

      updateCount();
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          counters.forEach((counter) => {
            if (counter && counter.innerText === "0") {
              startCounting(counter);
            }
          });
          if (observer) observer.disconnect();
        }
      });
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5,
      });
      counters.forEach((counter) => {
        if (counter) observer.observe(counter);
      });
    } else {
      counters.forEach((counter) => {
        startCounting(counter);
      });
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const t = translations[language];

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* HERO SECTION */}
      <section className="hero">
        <video
          className="hero-video"
          src={aboutvid}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroDesc}</p>
        </div>
      </section>

      {/* FLIP SECTION */}
      <section className="flip-section">
        <div>
          <h2 className="flip-section-heading">{t.offerTitle}</h2>
          <div className="flip-box-container">
            {/* IT Consulting */}
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front green">
                  <h3>{t.itConsulting}</h3>
                  <p>{t.itConsultingDesc}</p>
                </div>
                <div className="flip-box-back">
                  <h3>{t.cybersecurity}</h3>
                  <p>{t.cybersecurityDesc}</p>
                </div>
              </div>
            </div>

            {/* Marketing */}
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front pink">
                  <h3>{t.marketing}</h3>
                  <p>{t.marketingDesc}</p>
                </div>
                <div className="flip-box-back">
                  <h3>{t.dataAnalytics}</h3>
                  <p>{t.dataAnalyticsDesc}</p>
                </div>
              </div>
            </div>

            {/* IoT & AI */}
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front blue">
                  <h3>{t.iotai}</h3>
                  <p>{t.iotaiDesc}</p>
                </div>
                <div className="flip-box-back">
                  <h3>{t.cloudServices}</h3>
                  <p>{t.cloudServicesDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="partners-section">
        <div className="container">
          <h2 className="partners-title">{t.partnersTitle}</h2>
          <p className="partners-subtitle">{t.partnersSubtitle}</p>

          <div className="partners-slider" style={{ overflow: "hidden" }}>
            <div className="partner-logos-slider">
              {[...logos, ...logos].map((logo, idx) => (
                <div
                  className="partner-logo"
                  key={idx}
                  style={{
                    flex: "0 0 auto",
                    maxWidth: "120px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "20px",
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORK PROCESS SECTION */}
      <section className="work-process-section">
        <h2 className="section-title">{t.workApproach}</h2>
        <p className="section-subtitle">{t.workSubtitle}</p>

        <div className="timeline">
          <div className="timeline-step">
            <div className="icon-circle">🔍</div>
            <h3>{t.discovery}</h3>
            <p>{t.discoveryDesc}</p>
          </div>

          <div className="timeline-step">
            <div className="icon-circle">📝</div>
            <h3>{t.planning}</h3>
            <p>{t.planningDesc}</p>
          </div>

          <div className="timeline-step">
            <div className="icon-circle">⚙️</div>
            <h3>{t.development}</h3>
            <p>{t.developmentDesc}</p>
          </div>

          <div className="timeline-step">
            <div className="icon-circle">🚀</div>
            <h3>{t.launch}</h3>
            <p>{t.launchDesc}</p>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section className="achievement-section">
        <div>
          <h2>{t.achievements}</h2>
          <div className="achievement-container">
            <div className="achievement-box">
              <h2
                className="counter"
                data-target="500"
                data-suffix="+"
                ref={(el) => (countersRef.current[0] = el)}
              >
                0
              </h2>
              <p>{t.happyClients}</p>
            </div>
            <div className="achievement-box">
              <h2
                className="counter"
                data-target="1200"
                data-suffix="K"
                ref={(el) => (countersRef.current[1] = el)}
              >
                0
              </h2>
              <p>{t.projectsCompleted}</p>
            </div>
            <div className="achievement-box">
              <h2
                className="counter"
                data-target="15"
                data-suffix=""
                ref={(el) => (countersRef.current[2] = el)}
              >
                0
              </h2>
              <p>{t.industriesServed}</p>
            </div>
            <div className="achievement-box">
              <h2
                className="counter"
                data-target="10"
                data-suffix="Y"
                ref={(el) => (countersRef.current[3] = el)}
              >
                0
              </h2>
              <p>{t.yearsExperience}</p>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS SOLUTIONS SECTION */}
      <section className="business-solutions">
        <div className="solutions-container">
          <div className="solutions-left">
            <h2>{t.businessSolutions}</h2>
            <p>{t.businessDesc}</p>
            <ul className="solution-list">
              <li>
                <span>📊</span> {t.strategy}
              </li>
              <li>
                <span>🧠</span> {t.processOpt}
              </li>
              <li>
                <span>💻</span> {t.digitalTrans}
              </li>
              <li>
                <span>🌐</span> {t.marketEntry}
              </li>
            </ul>
            <Link to="/contact" className="btn primary">
              {t.getConsult}
            </Link>
          </div>
          <div className="solutions-right">
            <img src={businessImg} alt="Business Consultation" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home2;
