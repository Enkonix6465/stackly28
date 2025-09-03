import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AboutUs.css";
import { useDarkMode } from "../context/Darkmodecontext";
import aboutvideo from "../images/aboutvideo.mp4";
import ovm from "../images/ovm.jpg";
import ov from "../images/ov.jpg";
import om from "../images/om.jpg";
import og from "../images/og.jpg";
import ourstory from "../images/ourstory.jpg";

// Translations object
const translations = {
  en: {
    aboutUs: "About Us",
    aboutDesc: "Partner with us to transform your ideas into innovative solutions that drive lasting success",
    ourStory: "Our Story",
    ourStoryDesc: "We are a team of dedicated business consultants focused on delivering innovative solutions to help your company thrive in a rapidly evolving market. Our expertise spans strategic planning, digital transformation, and operational excellence. By understanding your unique challenges, we craft tailored strategies that drive growth, efficiency, and competitive advantage — empowering your business to succeed in today's dynamic landscape.",
    knowMore: "Know More",
    visionMission: "Vision & Mission",
    vision: "Vision",
    visionDesc: "To be the most trusted and preferred real estate partner, delivering premium villas, apartments, and commercial properties that redefine modern living.",
    mission: "Mission",
    missionDesc: "To connect people with their dream properties by offering transparent services, innovative designs, and personalized solutions tailored to every lifestyle and budget.",
    goal: "Goal",
    goalDesc: "To create sustainable, customer-focused communities that combine luxury, comfort, and convenience, ensuring long-term value for our clients.",
    whyChooseUs: "Why Choose Us",
    expertise: "Expertise You Can Trust",
    expertiseDesc: "Our team consists of industry veterans with decades of combined experience across multiple business sectors.",
    customized: "Customized Strategies",
    customizedDesc: "We don’t believe in one-size-fits-all. Every solution is tailored to your unique business challenges and goals.",
    proven: "Proven Results",
    provenDesc: "We deliver measurable outcomes that help businesses grow, optimize, and lead their markets.",
    innovative: "Innovative Technologies",
    innovativeDesc: "Leveraging cutting-edge digital tools and analytics to provide actionable insights and accelerate growth.",
    whatClientsSay: "What Our Clients Say",
    clientsIntro: "We are proud to have helped businesses across various industries optimize their strategies and achieve their goals through tailored consulting solutions: Our commitment to excellence, transparent dealings, and personalized service has earned us the trust of clients worldwide. From startups to established enterprises, our clients consistently praise our team’s dedication, market knowledge, and ability to deliver results.",
    wordsFromClients: "Words from Our Clients",
    testimonials: [
      {
        quote: "Their consulting expertise transformed our business strategy. We gained clarity, focus, and measurable growth in just months.",
        name: "Aishwrya K.",
        img: "https://i.pinimg.com/736x/dd/fc/ac/ddfcac65a67bc5ed50019958e99acfdd.jpg",
      },
      {
        quote: "The team provided personalized solutions that aligned perfectly with our company goals and culture. Highly recommend their services.",
        name: "Mohammad .",
        img: "https://i.pinimg.com/1200x/52/ab/34/52ab34f9d702a8d2ce624e8ed27111c9.jpg",
      },
      {
        quote: "From digital transformation to operational improvements, their insights helped us innovate and streamline processes effectively.",
        name: "Shreya S.",
        img: "https://i.pinimg.com/736x/ec/a5/bd/eca5bdf288baf3d4645f8a2f40a64ed0.jpg",
      },
      {
        quote: "Professional, proactive, and results-driven consultants who truly care about delivering business value and client success.",
        name: "Thomas R.",
        img: "https://i.pinimg.com/736x/ec/c9/ce/ecc9cee1b24de7ebcbfbabd9def1b1f2.jpg",
      },
    ],
    team: [
      {
        name: "Aishwrya K.",
        role: "Business Consultant",
        desc: "Expert in strategy and growth.",
        img: "https://i.pinimg.com/736x/dd/fc/ac/ddfcac65a67bc5ed50019958e99acfdd.jpg",
      },
      {
        name: "Mohammad .",
        role: "Digital Transformation Lead",
        desc: "Specialist in digital innovation.",
        img: "https://i.pinimg.com/1200x/52/ab/34/52ab34f9d702a8d2ce624e8ed27111c9.jpg",
      },
      {
        name: "Shreya S.",
        role: "Operations Expert",
        desc: "Streamlines business processes.",
        img: "https://i.pinimg.com/736x/ec/a5/bd/eca5bdf288baf3d4645f8a2f40a64ed0.jpg",
      },
      {
        name: "Thomas R.",
        role: "Client Success Manager",
        desc: "Ensures client satisfaction.",
        img: "https://i.pinimg.com/736x/ec/c9/ce/ecc9cee1b24de7ebcbfbabd9def1b1f2.jpg",
      },
    ]
  },
  ar: {
    aboutUs: "معلومات عنا",
    aboutDesc: "تعاون معنا لتحويل أفكارك إلى حلول مبتكرة تحقق نجاحًا دائمًا",
    ourStory: "قصتنا",
    ourStoryDesc: "نحن فريق من مستشاري الأعمال المكرسين لتقديم حلول مبتكرة تساعد شركتك على الازدهار في سوق سريع التطور. تشمل خبرتنا التخطيط الاستراتيجي والتحول الرقمي والتميز التشغيلي. من خلال فهم تحدياتك الفريدة، نصمم استراتيجيات مخصصة تعزز النمو والكفاءة والميزة التنافسية — مما يمكّن عملك من النجاح في بيئة ديناميكية اليوم.",
    knowMore: "اعرف المزيد",
    visionMission: "الرؤية والرسالة",
    vision: "الرؤية",
    visionDesc: "أن نكون الشريك العقاري الأكثر ثقة وتفضيلاً، ونقدم الفيلات والشقق والعقارات التجارية الفاخرة التي تعيد تعريف الحياة العصرية.",
    mission: "الرسالة",
    missionDesc: "ربط الناس بعقارات أحلامهم من خلال تقديم خدمات شفافة وتصاميم مبتكرة وحلول مخصصة لكل نمط حياة وميزانية.",
    goal: "الهدف",
    goalDesc: "إنشاء مجتمعات مستدامة تركز على العملاء تجمع بين الفخامة والراحة والملاءمة، لضمان قيمة طويلة الأمد لعملائنا.",
    whyChooseUs: "لماذا تختارنا",
    expertise: "خبرة يمكنك الوثوق بها",
    expertiseDesc: "يتكون فريقنا من خبراء الصناعة ذوي خبرة مشتركة لعقود عبر قطاعات أعمال متعددة.",
    customized: "استراتيجيات مخصصة",
    customizedDesc: "لا نؤمن بالحلول الموحدة. كل حل مصمم خصيصًا لتحديات وأهداف عملك الفريدة.",
    proven: "نتائج مثبتة",
    provenDesc: "نحقق نتائج قابلة للقياس تساعد الشركات على النمو والتحسين وقيادة أسواقها.",
    innovative: "تقنيات مبتكرة",
    innovativeDesc: "نستخدم أدوات رقمية متقدمة وتحليلات لتقديم رؤى قابلة للتنفيذ وتسريع النمو.",
    whatClientsSay: "ماذا يقول عملاؤنا",
    clientsIntro: "نفخر بمساعدة الشركات عبر مختلف الصناعات على تحسين استراتيجياتها وتحقيق أهدافها من خلال حلول استشارية مخصصة: التزامنا بالتميز والمعاملات الشفافة والخدمة الشخصية أكسبنا ثقة العملاء حول العالم. من الشركات الناشئة إلى المؤسسات الراسخة، يثني عملاؤنا باستمرار على تفاني فريقنا ومعرفته بالسوق وقدرته على تحقيق النتائج.",
    wordsFromClients: "كلمات من عملائنا",
    testimonials: [
      {
        quote: "خبرتهم الاستشارية غيرت استراتيجيتنا التجارية. حصلنا على وضوح وتركيز ونمو ملموس في أشهر قليلة.",
        name: "عائشة ك.",
        img: "https://i.pinimg.com/736x/dd/fc/ac/ddfcac65a67bc5ed50019958e99acfdd.jpg",
      },
      {
        quote: "قدم الفريق حلولاً مخصصة تتماشى تمامًا مع أهداف شركتنا وثقافتها. أنصح بخدماتهم بشدة.",
        name: "محمد .",
        img: "https://i.pinimg.com/1200x/52/ab/34/52ab34f9d702a8d2ce624e8ed27111c9.jpg",
      },
      {
        quote: "من التحول الرقمي إلى تحسين العمليات، ساعدتنا رؤاهم على الابتكار وتبسيط الإجراءات بفعالية.",
        name: "شريا س.",
        img: "https://i.pinimg.com/736x/ec/a5/bd/eca5bdf288baf3d4645f8a2f40a64ed0.jpg",
      },
      {
        quote: "مستشارون محترفون واستباقيون يركزون على النتائج ويهتمون حقًا بتحقيق قيمة للعملاء.",
        name: "توماس ر.",
        img: "https://i.pinimg.com/736x/ec/c9/ce/ecc9cee1b24de7ebcbfbabd9def1b1f2.jpg",
      },
    ],
    team: [
      {
        name: "عائشة ك.",
        role: "استشارية أعمال",
        desc: "خبيرة في الاستراتيجية والنمو.",
        img: "https://i.pinimg.com/736x/dd/fc/ac/ddfcac65a67bc5ed50019958e99acfdd.jpg",
      },
      {
        name: "محمد .",
        role: "قائد التحول الرقمي",
        desc: "متخصص في الابتكار الرقمي.",
        img: "https://i.pinimg.com/1200x/52/ab/34/52ab34f9d702a8d2ce624e8ed27111c9.jpg",
      },
      {
        name: "شريا س.",
        role: "خبيرة العمليات",
        desc: "تبسط العمليات التجارية.",
        img: "https://i.pinimg.com/736x/ec/a5/bd/eca5bdf288baf3d4645f8a2f40a64ed0.jpg",
      },
      {
        name: "توماس ر.",
        role: "مدير نجاح العملاء",
        desc: "يضمن رضا العملاء.",
        img: "https://i.pinimg.com/736x/ec/c9/ce/ecc9cee1b24de7ebcbfbabd9def1b1f2.jpg",
      },
    ]
  },
  he: {
    aboutUs: "אודותינו",
    aboutDesc: "הצטרף אלינו כדי להפוך רעיונות שלך לפתרונות חדשניים שמובילים להצלחה מתמשכת",
    ourStory: "הסיפור שלנו",
    ourStoryDesc: "אנחנו צוות יועצים עסקיים מסור שמטרתו לספק פתרונות חדשניים שיעזרו לחברתך לשגשג בשוק המשתנה במהירות. המומחיות שלנו כוללת תכנון אסטרטגי, טרנספורמציה דיגיטלית ומצוינות תפעולית. על ידי הבנת האתגרים הייחודיים שלך, אנו יוצרים אסטרטגיות מותאמות שמקדמות צמיחה, יעילות ויתרון תחרותי — ומעצימים את העסק שלך להצליח בסביבה הדינמית של היום.",
    knowMore: "גלה עוד",
    visionMission: "חזון ומשימה",
    vision: "חזון",
    visionDesc: "להיות השותף הנדל\"ני האמין והמועדף ביותר, לספק וילות, דירות ונכסים מסחריים פרימיום שמגדירים מחדש את החיים המודרניים.",
    mission: "משימה",
    missionDesc: "לחבר אנשים לנכסי חלומותיהם באמצעות שירותים שקופים, עיצובים חדשניים ופתרונות מותאמים לכל סגנון חיים ותקציב.",
    goal: "מטרה",
    goalDesc: "ליצור קהילות ברות קיימא ממוקדות לקוח המשלבות יוקרה, נוחות ונגישות, ומבטיחות ערך ארוך טווח ללקוחותינו.",
    whyChooseUs: "למה לבחור בנו",
    expertise: "מומחיות שאפשר לסמוך עליה",
    expertiseDesc: "הצוות שלנו מורכב ממומחי תעשייה עם עשרות שנות ניסיון משותף בענפי עסקים שונים.",
    customized: "אסטרטגיות מותאמות אישית",
    customizedDesc: "אנחנו לא מאמינים בפתרון אחד לכולם. כל פתרון מותאם לאתגרים ולמטרות העסק הייחודיות שלך.",
    proven: "תוצאות מוכחות",
    provenDesc: "אנו מספקים תוצאות מדידות שעוזרות לעסקים לצמוח, להשתפר ולהוביל את השוק שלהם.",
    innovative: "טכנולוגיות חדשניות",
    innovativeDesc: "משלבים כלים דיגיטליים מתקדמים ואנליטיקות כדי לספק תובנות ולזרז צמיחה.",
    whatClientsSay: "מה הלקוחות שלנו אומרים",
    clientsIntro: "אנו גאים שסייענו לעסקים בענפים שונים לשפר את האסטרטגיות שלהם ולהשיג מטרות באמצעות פתרונות ייעוץ מותאמים: המחויבות שלנו למצוינות, שקיפות ושירות אישי הקנתה לנו את אמון הלקוחות ברחבי העולם. מסטארטאפים ועד ארגונים מבוססים, לקוחותינו משבחים את מסירות הצוות, הידע בשוק והיכולת לספק תוצאות.",
    wordsFromClients: "מילים מהלקוחות שלנו",
    testimonials: [
      {
        quote: "הייעוץ שלהם שינה את אסטרטגיית העסק שלנו. קיבלנו בהירות, מיקוד וצמיחה מדידה תוך חודשים.",
        name: "איישוריה ק.",
        img: "https://i.pinimg.com/736x/dd/fc/ac/ddfcac65a67bc5ed50019958e99acfdd.jpg",
      },
      {
        quote: "הצוות סיפק פתרונות מותאמים שהתאימו בדיוק למטרות ולתרבות החברה שלנו. ממליץ בחום.",
        name: "מוחמד .",
        img: "https://i.pinimg.com/1200x/52/ab/34/52ab34f9d702a8d2ce624e8ed27111c9.jpg",
      },
      {
        quote: "מהטרנספורמציה הדיגיטלית ועד לשיפורים תפעוליים, התובנות שלהם עזרו לנו לחדש ולייעל תהליכים.",
        name: "שריה ס.",
        img: "https://i.pinimg.com/736x/ec/a5/bd/eca5bdf288baf3d4645f8a2f40a64ed0.jpg",
      },
      {
        quote: "יועצים מקצועיים, יוזמים וממוקדי תוצאה שבאמת אכפת להם מערך עסקי והצלחת לקוחות.",
        name: "תומאס ר.",
        img: "https://i.pinimg.com/736x/ec/c9/ce/ecc9cee1b24de7ebcbfbabd9def1b1f2.jpg",
      },
    ],
    team: [
      {
        name: "איישוריה ק.",
        role: "יועצת עסקית",
        desc: "מומחית באסטרטגיה וצמיחה.",
        img: "https://i.pinimg.com/736x/dd/fc/ac/ddfcac65a67bc5ed50019958e99acfdd.jpg",
      },
      {
        name: "מוחמד .",
        role: "ראש טרנספורמציה דיגיטלית",
        desc: "מומחה לחדשנות דיגיטלית.",
        img: "https://i.pinimg.com/1200x/52/ab/34/52ab34f9d702a8d2ce624e8ed27111c9.jpg",
      },
      {
        name: "שריה ס.",
        role: "מומחית תפעול",
        desc: "מייעלת תהליכים עסקיים.",
        img: "https://i.pinimg.com/736x/ec/a5/bd/eca5bdf288baf3d4645f8a2f40a64ed0.jpg",
      },
      {
        name: "תומאס ר.",
        role: "מנהל הצלחת לקוחות",
        desc: "דואג לשביעות רצון הלקוחות.",
        img: "https://i.pinimg.com/736x/ec/c9/ce/ecc9cee1b24de7ebcbfbabd9def1b1f2.jpg",
      },
    ]
  }
};

const getLanguage = () => localStorage.getItem("language") || "en";

function AboutUs() {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const sectionRef = useRef(null);
  const [language, setLanguage] = useState(getLanguage());

  useEffect(() => {
    const handleLanguageChange = () => setLanguage(getLanguage());
    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  const t = translations[language];

  const reasonsData = [
    {
      id: 1,
      title: t.expertise,
      description: t.expertiseDesc,
      progress: 95,
    },
    {
      id: 2,
      title: t.customized,
      description: t.customizedDesc,
      progress: 90,
    },
    {
      id: 3,
      title: t.proven,
      description: t.provenDesc,
      progress: 92,
    },
    {
      id: 4,
      title: t.innovative,
      description: t.innovativeDesc,
      progress: 88,
    },
  ];

  const [activeId, setActiveId] = useState(null);
  const progressRefs = useRef([]);

  useEffect(() => {
    function animateProgress() {
      progressRefs.current.forEach((bar, index) => {
        if (bar) {
          bar.style.width = reasonsData[index].progress + "%";
        }
      });
    }

    function isInViewport(el) {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }

    if (isInViewport(progressRefs.current[0])) {
      animateProgress();
      window.removeEventListener("scroll", animateProgress);
    } else {
      window.addEventListener("scroll", animateProgress);
    }

    return () => window.removeEventListener("scroll", animateProgress);
  }, [reasonsData]);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Section 1 - Hero */}
      <section className="hero">
        <video
          className="hero-video"
          src={aboutvideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="hero-overlay">
          <h1>{t.aboutUs}</h1>
          <p>{t.aboutDesc}</p>
        </div>
      </section>

      {/* Section 2 - Our Story */}
      <section className="our-story-section">
        <div className="content-wrapper">
          <h1>{t.ourStory}</h1>
          <p>{t.ourStoryDesc}</p>
          <Link to="/services" className="story-btn">{t.knowMore}</Link>
        </div>
        <div className="image-wrapper">
          <img src={ourstory} alt="Business Consulting" />
        </div>
      </section>

      {/* Section 4 - Vision & Mission */}
      <section className="vision-mission-section" ref={sectionRef}>
        <div className="header-bg">
          <h2>{t.visionMission}</h2>
        </div>
        <div className="cards-container">
          <div className="card">
            <img src={ov} alt="Vision Icon" className="icon" />
            <h3>{t.vision}</h3>
            <p>{t.visionDesc}</p>
          </div>
          <div className="card">
            <img src={om} alt="Mission Icon" className="icon" />
            <h3>{t.mission}</h3>
            <p>{t.missionDesc}</p>
          </div>
          <div className="card">
            <img src={og} alt="Goal Icon" className="icon" />
            <h3>{t.goal}</h3>
            <p>{t.goalDesc}</p>
          </div>
        </div>
      </section>

      {/* Section 3 - Why Choose Us */}
      <section className={darkMode ? "why-choose-us dark-mode" : "why-choose-us"}>
        <h2 className="section-title">{t.whyChooseUs}</h2>
        <div className="reasons-container">
          {reasonsData.map(({ id, title, description, progress }) => (
            <div
              key={id}
              className={`reason-card ${activeId === id ? "active" : ""}`}
              onClick={() => setActiveId(activeId === id ? null : id)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") setActiveId(activeId === id ? null : id);
              }}
              role="button"
              aria-expanded={activeId === id}
            >
              <div className="reason-header">
                <h3>{title}</h3>
                <div className="progress-bar-bg" aria-label={`${title} progress`}>
                  <div
                    className="progress-bar-fill"
                    ref={(el) => (progressRefs.current[id - 1] = el)}
                    style={{ width: "0%" }}
                  >
                    <span className="progress-text">{progress}%</span>
                  </div>
                </div>
              </div>
              {activeId === id && <p className="reason-description">{description}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Consulting Testimonials */}
      <section className="consulting-testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <h2>{t.whatClientsSay}</h2>
            <p className="intro-text">{t.clientsIntro}</p>
          </div>
          <div className="testimonials-cards">
            {t.testimonials.map(({ quote, name, img }, idx) => (
              <div key={idx} className="testimonial-card">
                <p className="quote">“{quote}”</p>
                <div className="client-info">
                  <img src={img} alt={name} className="client-photo" />
                  <strong className="client-name">{name}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centered Testimonials (translated) */}
      <section className="centered-testimonial-section">
        <h2 className="section-title">{t.wordsFromClients}</h2>
        {t.testimonials.map(({ quote, name, img }, idx) => (
          <div key={idx} className="centered-testimonial">
            <p className="quote">“{quote}”</p>
            <div className="testimonial-author">
              <img src={img} alt={name} className="author-img" />
              <span className="author-name">{name}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default AboutUs;
