import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/Darkmodecontext";
import samplevid from "../images/samplevid.mp4";
import blog from "../images/blog.mp4";
import "./Blog.css";

// Translations object
const translations = {
  en: {
    blogTitle: "Blog",
    pathTitle: "Your Path to Effective Solutions",
    pathDesc:
      "At Stackly, our approach to business solutions is grounded in deep analysis, custom strategy, and ongoing support. We believe that every organization is unique, so our solutions are too.",
    processSteps: [
      {
        step: 1,
        title: "Consultation & Discovery",
        description:
          "We start by understanding your business objectives, challenges, and vision to tailor the best approach.",
      },
      {
        step: 2,
        title: "Strategic Planning",
        description:
          "Our team analyzes your needs and designs a custom, scalable strategy to achieve your goals.",
      },
      {
        step: 3,
        title: "Implementation",
        description:
          "We execute the plan efficiently, integrating solutions seamlessly to drive impact and minimize disruption.",
      },
      {
        step: 4,
        title: "Continuous Support",
        description:
          "Post-implementation, we provide ongoing optimization and guidance to ensure sustained success.",
      },
    ],
    articles: [
      {
        title: "Unlocking Business Potential through Strategic Consulting",
        intro:
          "In today’s competitive landscape, businesses need more than just quick fixes — they require tailored strategies that drive sustainable growth. Strategic consulting helps companies identify untapped opportunities, streamline operations, and align their teams with long-term goals.",
        list: [
          "Deep-dive assessments to understand core challenges",
          "Customized action plans based on data-driven insights",
          "Implementation support to ensure smooth adoption",
          "Continuous monitoring for ongoing improvements",
        ],
        summary:
          "By partnering with expert consultants, organizations can transform uncertainty into clarity and position themselves for lasting success.",
      },
      {
        title: "How Business Solutions Drive Digital Transformation",
        intro:
          "Digital transformation is no longer optional; it’s essential for survival. Business solutions tailored to digital needs enable companies to innovate rapidly, enhance customer experiences, and optimize processes. Consultants guide businesses in adopting the right technologies while minimizing disruption.",
        list: [
          "Aligning digital tools with business objectives",
          "Leveraging cloud, AI, and automation for efficiency",
          "Change management to empower teams during transitions",
          "Measuring ROI to validate technology investments",
        ],
        summary:
          "A strategic approach to business solutions empowers companies to stay agile and competitive in a fast-evolving market.",
      },
    ],
    videoLabel: "GLOBAL PROFESSIONALS NETWORK",
    videoTitle: "World Wide Business",
    videoDesc:
      "Stackly is a leading IT company based in New Delhi and operating worldwide by serving customers. Stackly is an ISO 9001, 20000, and 27001 certified organisation. We provide best-in-class IT solutions for your business to grow to new heights of success.",
    ctaTitle: "Ready to Transform Your Business?",
    ctaButton: "Explore Consulting Services",
  },
  ar: {
    blogTitle: "مدونة",
    pathTitle: "طريقك نحو حلول فعالة",
    pathDesc:
      "في Stackly، يعتمد نهجنا في حلول الأعمال على التحليل العميق والاستراتيجية المخصصة والدعم المستمر. نحن نؤمن بأن كل مؤسسة فريدة، لذلك حلولنا كذلك.",
    processSteps: [
      {
        step: 1,
        title: "الاستشارة والاكتشاف",
        description: "نبدأ بفهم أهداف عملك وتحدياتك ورؤيتك لتقديم أفضل نهج.",
      },
      {
        step: 2,
        title: "التخطيط الاستراتيجي",
        description: "يقوم فريقنا بتحليل احتياجاتك وتصميم استراتيجية مخصصة وقابلة للتوسع لتحقيق أهدافك.",
      },
      {
        step: 3,
        title: "التنفيذ",
        description: "ننفذ الخطة بكفاءة، ونقوم بدمج الحلول بسلاسة لتحقيق التأثير وتقليل الاضطرابات.",
      },
      {
        step: 4,
        title: "الدعم المستمر",
        description: "بعد التنفيذ، نقدم تحسينات مستمرة وإرشادات لضمان النجاح المستدام.",
      },
    ],
    articles: [
      {
        title: "إطلاق إمكانات الأعمال من خلال الاستشارات الاستراتيجية",
        intro:
          "في بيئة تنافسية اليوم، تحتاج الشركات إلى أكثر من حلول سريعة — فهي بحاجة إلى استراتيجيات مخصصة تحقق نموًا مستدامًا. تساعد الاستشارات الاستراتيجية الشركات على تحديد الفرص غير المستغلة، وتبسيط العمليات، ومواءمة الفرق مع الأهداف طويلة الأمد.",
        list: [
          "تقييمات معمقة لفهم التحديات الأساسية",
          "خطط عمل مخصصة بناءً على رؤى قائمة على البيانات",
          "دعم التنفيذ لضمان التبني السلس",
          "مراقبة مستمرة للتحسينات المستمرة",
        ],
        summary:
          "من خلال التعاون مع مستشارين خبراء، يمكن للمؤسسات تحويل عدم اليقين إلى وضوح ووضع نفسها لتحقيق نجاح دائم.",
      },
      {
        title: "كيف تدفع حلول الأعمال التحول الرقمي",
        intro:
          "لم يعد التحول الرقمي خيارًا؛ بل أصبح ضروريًا للبقاء. تتيح حلول الأعمال المصممة للاحتياجات الرقمية للشركات الابتكار بسرعة، وتعزيز تجارب العملاء، وتحسين العمليات. يوجه المستشارون الشركات في اعتماد التقنيات المناسبة مع تقليل الاضطرابات.",
        list: [
          "مواءمة الأدوات الرقمية مع أهداف العمل",
          "الاستفادة من السحابة والذكاء الاصطناعي والأتمتة لتحقيق الكفاءة",
          "إدارة التغيير لتمكين الفرق أثناء التحولات",
          "قياس العائد على الاستثمار للتحقق من جدوى الاستثمارات التقنية",
        ],
        summary:
          "تمكن الاستراتيجية المدروسة لحلول الأعمال الشركات من البقاء مرنة وتنافسية في سوق سريع التطور.",
      },
    ],
    videoLabel: "شبكة المحترفين العالمية",
    videoTitle: "أعمال حول العالم",
    videoDesc:
      "Stackly هي شركة تقنية رائدة مقرها نيودلهي وتعمل عالميًا من خلال خدمة العملاء. Stackly هي منظمة معتمدة ISO 9001 و20000 و27001. نحن نقدم حلول تقنية معلومات من الدرجة الأولى لنمو عملك إلى آفاق جديدة من النجاح.",
    ctaTitle: "جاهز لتحويل عملك؟",
    ctaButton: "استكشف خدمات الاستشارات",
  },
  he: {
    blogTitle: "בלוג",
    pathTitle: "הדרך שלך לפתרונות אפקטיביים",
    pathDesc:
      "ב-Stackly, הגישה שלנו לפתרונות עסקיים מבוססת על ניתוח מעמיק, אסטרטגיה מותאמת ותמיכה מתמשכת. אנו מאמינים שכל ארגון הוא ייחודי, ולכן גם הפתרונות שלנו.",
    processSteps: [
      {
        step: 1,
        title: "ייעוץ וגילוי",
        description: "מתחילים בהבנת מטרות העסק שלך, אתגרים וחזון כדי להתאים את הגישה הטובה ביותר.",
      },
      {
        step: 2,
        title: "תכנון אסטרטגי",
        description: "הצוות שלנו מנתח את הצרכים שלך ומעצב אסטרטגיה מותאמת וסקלאבילית להשגת המטרות.",
      },
      {
        step: 3,
        title: "יישום",
        description: "אנו מבצעים את התוכנית ביעילות, משלבים פתרונות בצורה חלקה כדי לייצר השפעה ולמזער הפרעות.",
      },
      {
        step: 4,
        title: "תמיכה מתמשכת",
        description: "לאחר היישום, אנו מספקים אופטימיזציה והכוונה מתמשכת להבטחת הצלחה מתמשכת.",
      },
    ],
    articles: [
      {
        title: "מימוש פוטנציאל עסקי באמצעות ייעוץ אסטרטגי",
        intro:
          "בנוף התחרותי של היום, עסקים זקוקים ליותר מתיקונים מהירים — הם זקוקים לאסטרטגיות מותאמות שמניעות צמיחה בת קיימא. ייעוץ אסטרטגי מסייע לחברות לזהות הזדמנויות לא מנוצלות, לייעל תהליכים וליישר צוותים עם מטרות ארוכות טווח.",
        list: [
          "הערכות מעמיקות להבנת אתגרים מרכזיים",
          "תוכניות פעולה מותאמות המבוססות על תובנות נתונים",
          "תמיכה ביישום להבטחת הטמעה חלקה",
          "מעקב מתמשך לשיפורים שוטפים",
        ],
        summary:
          "בשיתוף פעולה עם יועצים מומחים, ארגונים יכולים להפוך אי ודאות לבהירות ולמצב את עצמם להצלחה מתמשכת.",
      },
      {
        title: "איך פתרונות עסקיים מניעים טרנספורמציה דיגיטלית",
        intro:
          "טרנספורמציה דיגיטלית אינה אופציה; היא חיונית להישרדות. פתרונות עסקיים מותאמים לצרכים דיגיטליים מאפשרים לחברות לחדש במהירות, לשפר חוויות לקוח ולייעל תהליכים. יועצים מדריכים עסקים באימוץ הטכנולוגיות הנכונות תוך מזעור הפרעות.",
        list: [
          "יישור כלים דיגיטליים עם מטרות עסקיות",
          "ניצול ענן, בינה מלאכותית ואוטומציה ליעילות",
          "ניהול שינוי להעצמת צוותים במהלך מעברים",
          "מדידת ROI לאימות השקעות טכנולוגיות",
        ],
        summary:
          "גישה אסטרטגית לפתרונות עסקיים מאפשרת לחברות להישאר גמישות ותחרותיות בשוק המשתנה במהירות.",
      },
    ],
    videoLabel: "רשת מקצוענים גלובלית",
    videoTitle: "עסקים ברחבי העולם",
    videoDesc:
      "Stackly היא חברת IT מובילה שבסיסה בניו דלהי ופועלת ברחבי העולם בשירות לקוחות. Stackly היא ארגון מוסמך ISO 9001, 20000 ו-27001. אנו מספקים פתרונות IT מהשורה הראשונה לצמיחת העסק שלך לגבהים חדשים של הצלחה.",
    ctaTitle: "מוכן לשנות את העסק שלך؟",
    ctaButton: "גלה שירותי ייעוץ",
  },
};

const getLanguage = () => localStorage.getItem("language") || "en";

function Blog() {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const [language, setLanguage] = useState(getLanguage());

  useEffect(() => {
    const handleLanguageChange = () => setLanguage(getLanguage());
    window.addEventListener("languageChanged", handleLanguageChange);
    return () =>
      window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  const t = translations[language];

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Hero Section */}
      <section className="hero">
        <video
          className="hero-video"
          src={samplevid}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay">
          <h1>{t.blogTitle}</h1>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="bs-section">
        <div className="bs-content">
          <h2>{t.pathTitle}</h2>
          <p>{t.pathDesc}</p>
          <div className="bs-steps-container">
            {t.processSteps.map(({ step, title, description }) => (
              <div className="bs-step-card" key={step}>
                <div className="bs-step-number">{step}</div>
                <div className="bs-step-info">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="art-section">
        {t.articles.map((article, idx) => (
          <article className="art-article" key={idx}>
            <h2 className="art-title">{article.title}</h2>
            <p className="art-intro">{article.intro}</p>
            <ul className="art-list">
              {article.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="art-summary">{article.summary}</p>
          </article>
        ))}
      </section>

      {/* Content with Video Section */}
      <section className="business-video-section">
        <div className="business-video-section__text">
          <p className="business-video-section__label">{t.videoLabel}</p>
          <h1 className="business-video-section__title">{t.videoTitle}</h1>
          <p className="business-video-section__description">{t.videoDesc}</p>
        </div>
        <div className="business-video-section__video">
          <video controls>
            <source src={blog} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="cta-navigation-section">
        <div className="cta-content">
          <h2>{t.ctaTitle}</h2>
          <button
            onClick={() => handleGetStarted("/blog2")}
            className="cta-button"
          >
            {t.ctaButton}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Blog;
