import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


// other imports...

import "./Home.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";
import homevideo from "../images/homevid.mp4";
import one from "../images/1.jpg";
import tick from "../images/tick.svg";
import cross from "../images/wrong.svg";
import rocket from "../images/rocket.png";
import cloud from "../images/cloud.png";
import idea from "../images/idea.png";
import chart from "../images/chart.png";

const translations = {
  en: {
    heroTitle: "Empowering your vision for a brighter tomorrow.",
    heroDesc: "Partner with us to transform your ideas into innovative solutions that drive lasting success",
    discoverMore: "Discover More",
    consultingTitle: "Consulting & Business Solutions",
    consultingDesc: "We help businesses adapt, evolve, and thrive in a fast-paced digital world by offering tailored solutions in digital strategy, business transformation, and operations optimization — turning challenges into opportunities. Our expert team leverages advanced analytics, cutting-edge technology, and industry best practices to streamline workflows, enhance customer experiences, reduce costs, and accelerate growth. Whether you're a startup or an enterprise, we provide data-driven insights, strategic planning, and hands-on execution that deliver measurable outcomes and sustainable success. From innovation roadmaps to scalable solutions, we partner with you to unlock your business’s full potential and stay ahead in an ever-changing market. Our consulting services also emphasize risk management, regulatory compliance, and digital security to safeguard your operations. We foster a culture of continuous improvement, ensuring your strategies evolve alongside emerging trends and technologies. With a commitment to transparency and collaboration, we empower your teams to drive impactful change and achieve long-term business resilience. By integrating sustainability and ethical practices, we help future-proof your business while enhancing brand reputation and stakeholder trust.",
    getConsultation: "Get a Consultation",
    innovativeTitle: "Innovative Solutions That Drive Real Impact",
    innovativeSubtitle: "We don’t follow trends we create them.",
    innovativeDesc: "At Stackly, innovation is at the core of everything we do. We rethink traditional consulting by integrating emerging technologies, future-proof strategies, and bold thinking to deliver smarter, faster.",
    aiStrategy: "AI-Enhanced Strategy",
    aiStrategyDesc: "Predict market trends & customer behavior using advanced analytics & machine learning.",
    cloudScalability: "Cloud-Driven Scalability",
    cloudScalabilityDesc: "Modernize your infrastructure and unlock new levels of efficiency and flexibility.",
    intelligentAutomation: "Intelligent Automation.",
    intelligentAutomationDesc: "Eliminate guesswork with real-time data dashboards and decision automation.",
    strategicForesight: "Strategic foresight",
    strategicForesightDesc: "Stay ahead with solutions designed for what’s next — not just what’s now.",
    getConsultationBtn: "Get a Consultation",
    exploreServicesBtn: "Explore Services",
    zigzagTitle: "Solving Business Challenges, Step by Step",
    zigzagSubtitle: "We help you tackle the core pain points one solution at a time.",
    zigzagProblems: [
      { problem: "Scattered Processes", solution: "We streamline workflows to boost clarity and productivity." },
      { problem: "Outdated Technology", solution: "We modernize your tech infrastructure affordably and securely." },
      { problem: "Growth Plateau", solution: "We unlock scaling through optimized strategies and automation." },
      { problem: "Weak Digital Presence", solution: "We enhance visibility with bold digital transformation strategies." }
    ],
    processTitle: "Our Consultation Process",
    processSubtitle: "From understanding your needs to delivering measurable impact — here's how we collaborate.",
    steps: [
      { title: "Initial Consultation", desc: "We connect to understand your business goals, challenges, and current workflows." },
      { title: "Strategic Planning", desc: "We design a custom strategy aligned to your operations, budget, and long-term vision." },
      { title: "Implementation", desc: "Our team guides deployment of solutions while maintaining clear communication with you." },
      { title: "Continuous Support", desc: "Post-deployment, we stay engaged — optimizing and evolving as your business grows." }
    ],
    curiousTitle: "Curious how we assist?",
    curiousDesc: "We provide a free consultation so let's talk with us!",
    getConsultForm: "Get a Consultation Form",
    submit: "Submit",
    thankYou: "Thank you! Your consultation request has been received.",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your Message"
  },
  ar: {
    heroTitle: "تمكين رؤيتك لغد أكثر إشراقًا.",
    heroDesc: "تعاون معنا لتحويل أفكارك إلى حلول مبتكرة تحقق نجاحًا دائمًا",
    discoverMore: "اكتشف المزيد",
    consultingTitle: "الاستشارات وحلول الأعمال",
    consultingDesc: "نساعد الشركات على التكيف والتطور والازدهار في عالم رقمي سريع من خلال تقديم حلول مخصصة في الاستراتيجية الرقمية، وتحول الأعمال، وتحسين العمليات — تحويل التحديات إلى فرص. يستخدم فريقنا الخبير التحليلات المتقدمة والتقنيات الحديثة وأفضل الممارسات الصناعية لتبسيط سير العمل، وتعزيز تجربة العملاء، وتقليل التكاليف، وتسريع النمو. سواء كنت شركة ناشئة أو مؤسسة، نقدم رؤى قائمة على البيانات، وتخطيط استراتيجي، وتنفيذ عملي يحقق نتائج قابلة للقياس ونجاحًا مستدامًا. من خرائط الابتكار إلى الحلول القابلة للتوسع، نتعاون معك لإطلاق إمكانات عملك الكاملة والبقاء في الصدارة في سوق متغير باستمرار. تركز خدماتنا الاستشارية أيضًا على إدارة المخاطر، والامتثال التنظيمي، والأمن الرقمي لحماية عملياتك. نعزز ثقافة التحسين المستمر، لضمان تطور استراتيجياتك مع الاتجاهات والتقنيات الناشئة. مع الالتزام بالشفافية والتعاون، نمكن فرقك من إحداث تغيير مؤثر وتحقيق مرونة أعمال طويلة الأمد. من خلال دمج الاستدامة والممارسات الأخلاقية، نساعد في تأمين مستقبل عملك مع تعزيز سمعة العلامة التجارية وثقة أصحاب المصلحة.",
    getConsultation: "احصل على استشارة",
    innovativeTitle: "حلول مبتكرة تحقق تأثيرًا حقيقيًا",
    innovativeSubtitle: "نحن لا نتبع الاتجاهات بل نخلقها.",
    innovativeDesc: "في Stackly، الابتكار هو جوهر كل ما نقوم به. نعيد التفكير في الاستشارات التقليدية من خلال دمج التقنيات الناشئة والاستراتيجيات المستقبلية والتفكير الجريء لتقديم حلول أكثر ذكاءً وسرعة.",
    aiStrategy: "استراتيجية معززة بالذكاء الاصطناعي",
    aiStrategyDesc: "توقع اتجاهات السوق وسلوك العملاء باستخدام التحليلات المتقدمة وتعلم الآلة.",
    cloudScalability: "قابلية التوسع السحابية",
    cloudScalabilityDesc: "حدث بنيتك التحتية وحقق مستويات جديدة من الكفاءة والمرونة.",
    intelligentAutomation: "الأتمتة الذكية.",
    intelligentAutomationDesc: "تخلص من التخمين باستخدام لوحات بيانات فورية وأتمتة اتخاذ القرار.",
    strategicForesight: "استشراف استراتيجي",
    strategicForesightDesc: "ابق في الصدارة مع حلول مصممة للمستقبل وليس فقط للحاضر.",
    getConsultationBtn: "احصل على استشارة",
    exploreServicesBtn: "استكشف الخدمات",
    zigzagTitle: "حل تحديات الأعمال خطوة بخطوة",
    zigzagSubtitle: "نساعدك على معالجة نقاط الألم الأساسية بحل واحد في كل مرة.",
    zigzagProblems: [
      { problem: "عمليات متفرقة", solution: "نبسط سير العمل لتعزيز الوضوح والإنتاجية." },
      { problem: "تقنية قديمة", solution: "نحدث البنية التحتية التقنية الخاصة بك بشكل آمن وفعال من حيث التكلفة." },
      { problem: "توقف النمو", solution: "نفتح آفاق التوسع من خلال استراتيجيات محسنة وأتمتة." },
      { problem: "حضور رقمي ضعيف", solution: "نعزز الرؤية من خلال استراتيجيات التحول الرقمي الجريئة." }
    ],
    processTitle: "عملية الاستشارة لدينا",
    processSubtitle: "من فهم احتياجاتك إلى تحقيق تأثير قابل للقياس — هكذا نتعاون.",
    steps: [
      { title: "الاستشارة الأولية", desc: "نتواصل لفهم أهداف عملك وتحدياتك وسير العمل الحالي." },
      { title: "التخطيط الاستراتيجي", desc: "نصمم استراتيجية مخصصة تتوافق مع عملياتك وميزانيتك ورؤيتك طويلة الأمد." },
      { title: "التنفيذ", desc: "يقوم فريقنا بتوجيه نشر الحلول مع الحفاظ على التواصل الواضح معك." },
      { title: "الدعم المستمر", desc: "بعد التنفيذ، نظل منخرطين — نعمل على التحسين والتطور مع نمو عملك." }
    ],
    curiousTitle: "هل أنت فضولي كيف نساعد؟",
    curiousDesc: "نقدم استشارة مجانية، فلنتحدث معنا!",
    getConsultForm: "احصل على نموذج استشارة",
    submit: "إرسال",
    thankYou: "شكرًا لك! تم استلام طلب الاستشارة الخاص بك.",
    namePlaceholder: "اسمك",
    emailPlaceholder: "بريدك الإلكتروني",
    messagePlaceholder: "رسالتك"
  },
  he: {
    heroTitle: "מעצימים את החזון שלך למחר בהיר יותר.",
    heroDesc: "הצטרף אלינו כדי להפוך רעיונות שלך לפתרונות חדשניים שמובילים להצלחה מתמשכת",
    discoverMore: "גלה עוד",
    consultingTitle: "ייעוץ ופתרונות עסקיים",
    consultingDesc: "אנחנו עוזרים לעסקים להסתגל, להתפתח ולשגשג בעולם דיגיטלי מהיר באמצעות פתרונות מותאמים באסטרטגיה דיגיטלית, טרנספורמציה עסקית ואופטימיזציה של תהליכים — הופכים אתגרים להזדמנויות. הצוות המומחה שלנו משתמש באנליטיקה מתקדמת, טכנולוגיה חדשנית ושיטות עבודה מובילות כדי לייעל תהליכים, לשפר חוויית לקוח, להקטין עלויות ולהאיץ צמיחה. בין אם אתה סטארטאפ או ארגון, אנו מספקים תובנות מבוססות נתונים, תכנון אסטרטגי וביצוע מעשי שמביאים לתוצאות מדידות והצלחה בת קיימא. ממפת דרכים לחדשנות ועד פתרונות ניתנים להרחבה, אנו שותפים איתך למימוש מלוא הפוטנציאל העסקי שלך ולהישארות מוביל בשוק המשתנה. שירותי הייעוץ שלנו מדגישים גם ניהול סיכונים, עמידה ברגולציה ואבטחה דיגיטלית לשמירה על פעילותך. אנו מטפחים תרבות של שיפור מתמיד, כדי להבטיח שהאסטרטגיות שלך יתפתחו עם מגמות וטכנולוגיות חדשות. עם מחויבות לשקיפות ושיתוף פעולה, אנו מעצימים את הצוותים שלך להוביל שינוי משמעותי ולהשיג עמידות עסקית ארוכת טווח. על ידי שילוב קיימות ונהלים אתיים, אנו מסייעים להבטיח את עתיד העסק שלך תוך שיפור מוניטין המותג ואמון בעלי העניין.",
    getConsultation: "קבל ייעוץ",
    innovativeTitle: "פתרונות חדשניים שמייצרים השפעה אמיתית",
    innovativeSubtitle: "אנחנו לא עוקבים אחרי טרנדים — אנחנו יוצרים אותם.",
    innovativeDesc: "ב-Stackly, חדשנות היא בלב כל מה שאנחנו עושים. אנו חושבים מחדש על ייעוץ מסורתי באמצעות שילוב טכנולוגיות מתקדמות, אסטרטגיות עתידיות וחשיבה נועזת כדי לספק פתרונות חכמים ומהירים יותר.",
    aiStrategy: "אסטרטגיה מבוססת בינה מלאכותית",
    aiStrategyDesc: "חזה מגמות שוק והתנהגות לקוחות באמצעות אנליטיקה מתקדמת ולמידת מכונה.",
    cloudScalability: "סקלאביליות מבוססת ענן",
    cloudScalabilityDesc: "חדש את התשתית שלך והשג רמות חדשות של יעילות וגמישות.",
    intelligentAutomation: "אוטומציה חכמה.",
    intelligentAutomationDesc: "בטל ניחושים עם לוחות נתונים בזמן אמת ואוטומציה של קבלת החלטות.",
    strategicForesight: "חזון אסטרטגי",
    strategicForesightDesc: "הישאר מוביל עם פתרונות שנבנו למה שיבוא — לא רק למה שעכשיו.",
    getConsultationBtn: "קבל ייעוץ",
    exploreServicesBtn: "גלה שירותים",
    zigzagTitle: "פותרים אתגרים עסקיים, שלב אחר שלב",
    zigzagSubtitle: "אנחנו עוזרים לך להתמודד עם נקודות הכאב המרכזיות — פתרון אחד בכל פעם.",
    zigzagProblems: [
      { problem: "תהליכים מפוזרים", solution: "אנחנו מייעלים תהליכים לשיפור בהירות ופרודוקטיביות." },
      { problem: "טכנולוגיה מיושנת", solution: "אנחנו מחדשים את התשתית הטכנולוגית שלך בצורה מאובטחת ומשתלמת." },
      { problem: "עצירת צמיחה", solution: "אנחנו פותחים אפשרויות להתרחבות באמצעות אסטרטגיות ואוטומציה מיטוביות." },
      { problem: "נוכחות דיגיטלית חלשה", solution: "אנחנו משפרים נראות עם אסטרטגיות טרנספורמציה דיגיטלית נועזות." }
    ],
    processTitle: "תהליך הייעוץ שלנו",
    processSubtitle: "מהבנת הצרכים שלך ועד השגת השפעה מדידה — כך אנו משתפים פעולה.",
    steps: [
      { title: "ייעוץ ראשוני", desc: "אנחנו מתחברים כדי להבין את מטרות העסק שלך, אתגרים ותהליכים קיימים." },
      { title: "תכנון אסטרטגי", desc: "אנחנו מעצבים אסטרטגיה מותאמת לפעילות, תקציב וחזון ארוך טווח שלך." },
      { title: "יישום", desc: "הצוות שלנו מדריך את הטמעת הפתרונות תוך שמירה על תקשורת ברורה איתך." },
      { title: "תמיכה מתמשכת", desc: "לאחר ההטמעה, אנו נשארים מעורבים — משפרים ומתפתחים עם צמיחת העסק שלך." }
    ],
    curiousTitle: "סקרן איך אנחנו מסייעים?",
    curiousDesc: "אנו מספקים ייעוץ חינם — בוא נדבר!",
    getConsultForm: "קבל טופס ייעוץ",
    submit: "שלח",
    thankYou: "תודה! בקשתך לייעוץ התקבלה.",
    namePlaceholder: "השם שלך",
    emailPlaceholder: "האימייל שלך",
    messagePlaceholder: "ההודעה שלך"
  }
};

// Get language from localStorage or default to 'en'
const getLanguage = () => localStorage.getItem("language") || "en";

function Home() {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [language, setLanguage] = useState(getLanguage());

  useEffect(() => {
    const handleLanguageChange = () => setLanguage(getLanguage());
    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  const t = translations[language];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store formData in localStorage or send to backend here
    console.log("Consultation form submitted:", formData);
    alert("Thank you for your interest! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setShowForm(false);
  };
  

  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Hero Section */}
      <section className="hero">
        <video
          className="hero-video"
          src={homevideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="hero-overlay">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroDesc}</p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => handleGetStarted("/services")}>
              {t.discoverMore}
            </button>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="consultation-section">
        <div className="consultation-container">
          <div className="consultation-image">
            <img src={one} alt="Business Solutions" />
          </div>
          <div className="consultation-content">
            <h2>{t.consultingTitle}</h2>
            <p>{t.consultingDesc}</p>
            <Link to="/contact" className="cta-btn">
              {t.getConsultation}
            </Link>
          </div>
        </div>
      </section>

      {/* Innovative Section */}
      <section className="innovative-section">
        <section className="flip-section"></section>
        <div className="container">
          <h2 className="section-title">{t.innovativeTitle}</h2>
          <p className="section-subtitle">{t.innovativeSubtitle}</p>
          <p className="section-description">{t.innovativeDesc}</p>

          <div className="features-grid">
            <div className="feature-box">
              <h4>
                <img src={rocket} alt="Rocket Icon" style={{ width: '20px', height: '20px', marginRight: '8px', verticalAlign: 'middle' }} />
                {t.aiStrategy}
              </h4>
              <p>{t.aiStrategyDesc}</p>
            </div>
            <div className="feature-box">
              <h4>
                <img src={cloud} alt="Cloud Icon" style={{ width: '20px', height: '20px', marginRight: '8px', verticalAlign: 'middle' }} />
                {t.cloudScalability}
              </h4>
              <p>{t.cloudScalabilityDesc}</p>
            </div>
            <div className="feature-box">
              <h4>
                <img src={idea} alt="Intelligent Automation Icon" style={{ width: '20px', height: '20px', marginRight: '8px', verticalAlign: 'middle' }} />
                {t.intelligentAutomation}
              </h4>
              <p>{t.intelligentAutomationDesc}</p>
            </div>
            <div className="feature-box">
              <h4>
                <img src={chart} alt="Strategic Foresight Icon" style={{ width: '20px', height: '20px', marginRight: '8px', verticalAlign: 'middle' }} />
                {t.strategicForesight}
              </h4>
              <p>{t.strategicForesightDesc}</p>
            </div>
          </div>

          <div className="cta-buttons">
            <button className="primary-btn" onClick={() => handleGetStarted("/contact")}>
              {t.getConsultationBtn}
            </button>
            <button className="secondary-btn" onClick={() => handleGetStarted("/services")}>
              {t.exploreServicesBtn}
            </button>
          </div>
        </div>
      </section>

      <section className="zigzag-problems-section">
        <div className="zigzag-container">
          <h2 className="zigzag-title">{t.zigzagTitle}</h2>
          <p className="zigzag-subtitle">{t.zigzagSubtitle}</p>
          <div className="zigzag-line">
            {t.zigzagProblems.map((item, index) => (
              <div className={`zigzag-item ${index % 2 === 0 ? "left" : "right"}`} key={index}>
                <div className="zigzag-bubble">
                  <h4>
                    <img src={cross} alt="Cross icon" style={{ width: '18px', marginRight: '6px', verticalAlign: 'middle' }} />
                    <strong>{item.problem}</strong>
                  </h4>
                  <p>
                    <img src={tick} alt="Check icon" style={{ width: '18px', marginRight: '6px', verticalAlign: 'middle' }} />
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="consultation-process bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900"
        >
          {t.processTitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-3 text-lg text-gray-600"
        >
          {t.processSubtitle}
        </motion.p>

        {/* Steps */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {t.steps.map((step, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="step-card relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8"
            >
              {/* Step number badge */}
              <div className="absolute -top-5 left-6 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                {`0${idx + 1}`}
              </div>

              {/* Step content */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      <section className="free-consult-section">
        <div className="free-consult-wrapper">
          <div className="free-consult-text">
            <h2><b>{t.curiousTitle}</b></h2>
            <p>{t.curiousDesc}</p>
            {!showForm && !submitted && (
              <button
                className="free-consult-btn"
                onClick={() => {
                  setShowForm(true);
                  setSubmitted(false);
                }}
              >
                {t.getConsultForm}
              </button>
            )}
            {showForm && (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{ marginTop: "20px", maxWidth: "400px" }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "12px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "12px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                  }}
                />
                <textarea
                  name="message"
                  placeholder={t.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "12px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                  }}
                />
                <button
                  type="submit"
                  className="free-consult-btn"
                  style={{ width: "100%" }}
                >
                  {t.submit}
                </button>
              </form>
            )}
            {submitted && !showForm && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "15px",
                  backgroundColor: "#4caf50",
                  color: "white",
                  borderRadius: "6px",
                  maxWidth: "400px",
                }}
              >
                {t.thankYou}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
