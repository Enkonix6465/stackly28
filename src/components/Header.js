import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../images/logo.png";

const getInitialLanguage = () => localStorage.getItem("language") || "en";

const Header = ({ toggleTheme, isDark }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [initials, setInitials] = useState("");
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [language, setLanguage] = useState(getInitialLanguage()); // <-- initialize from localStorage
  const avatarRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Get user initials from localStorage
  const getUserInitials = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInEmail = localStorage.getItem("loggedInUserEmail");
    const currentUser = users.find(user => user.email === loggedInEmail);

    if (currentUser) {
      const firstInitial = currentUser.firstName?.trim().charAt(0).toUpperCase() || "";
      const lastInitial = currentUser.lastName?.trim().charAt(0).toUpperCase() || "";
      return firstInitial + lastInitial;
    }
    return "";
  };

  useEffect(() => {
    setInitials(getUserInitials());
    const handleStorage = () => setInitials(getUserInitials());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [location.pathname]);

  // Close avatar dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setAvatarDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile nav on large screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileNavOpen) {
        setMobileNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileNavOpen]);

  useEffect(() => {
    localStorage.setItem("language", language); // <-- keep localStorage updated
    if (language === "ar" || language === "he") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [language]);

  const toggleDropdown = (menu) => {
    setActiveDropdown(prev => (prev === menu ? null : menu));
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setMobileNavOpen(false);
  };

  const handleMainClick = (page) => {
    navigate(`/${page}`);
    setActiveDropdown(null);
    setMobileNavOpen(false);
  };

  const getActiveLink = () => {
    if (location.pathname === "/" || location.pathname === "/home2") return "home";
    if (location.pathname === "/about") return "about";
    if (
      [
        "/services",
        "/outsourcing",
        "/mobileapps",
        "/websiteservice",
        "/digitalstratagy",
        "/cloudintegration",
        "/customersolutions",
      ].includes(location.pathname)
    ) return "services";
    if (location.pathname === "/blog") return "blog";
    if (location.pathname === "/contact") return "contact";
    return "";
  };

  const activeLink = getActiveLink();

  const toggleAvatarDropdown = () => {
    setAvatarDropdownOpen(prev => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUserEmail");
    setAvatarDropdownOpen(false);
    navigate("/login");
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(prev => !prev);
  };

  const languageNames = {
    en: "English",
    ar: "العربية",
    he: "עברית"
  };

  const translations = {
    en: {
      home: "Home",
      home2: "Home 2",
      about: "About Us",
      services: "Services",
      outsourcing: "Outsourcing of talent",
      mobileapps: "Mobile Apps Development",
      websiteservice: "Website Maintance Service",
      digitalstratagy: "Digital Strategy Consulting",
      cloudintegration: "Cloud Integration",
      customersolutions: "Customer Experience Solutions",
      blog: "Blog",
      contact: "Contact Us",
      logout: "Logout"
    },
    ar: {
      home: "الرئيسية",
      home2: "الرئيسية 2",
      about: "معلومات عنا",
      services: "الخدمات",
      outsourcing: "الاستعانة بالمواهب",
      mobileapps: "تطوير تطبيقات الجوال",
      websiteservice: "خدمة صيانة الموقع",
      digitalstratagy: "استشارات الاستراتيجية الرقمية",
      cloudintegration: "تكامل السحابة",
      customersolutions: "حلول تجربة العملاء",
      blog: "مدونة",
      contact: "اتصل بنا",
      logout: "تسجيل خروج"
    },
    he: {
      home: "בית",
      home2: "בית 2",
      about: "אודותינו",
      services: "שירותים",
      outsourcing: "מיקור כישרונות",
      mobileapps: "פיתוח אפליקציות מובייל",
      websiteservice: "שירות תחזוקת אתר",
      digitalstratagy: "ייעוץ אסטרטגיה דיגיטלית",
      cloudintegration: "אינטגרציית ענן",
      customersolutions: "פתרונות חווית לקוח",
      blog: "בלוג",
      contact: "צור קשר",
      logout: "התנתק"
    }
  };

  return (
    <header className="header">
      <nav className="logo">
        <Link to="/home">
          <img src={logo} alt="Logo" />
        </Link>
      </nav>

      <button
        className={`hamburger ${mobileNavOpen ? "open" : ""}`}
        aria-label="Toggle menu"
        onClick={toggleMobileNav}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`nav ${mobileNavOpen ? "open" : ""}`}>
        <div className="nav-item">
          <span
            className={`nav-link ${activeLink === "home" ? "active" : ""}`}
            onClick={() => handleMainClick("home")}
          >
            {translations[language].home}
          </span>
          <span
            className={`arrow ${activeDropdown === "home" ? "open" : ""}`}
            onClick={() => toggleDropdown("home")}
          >
            ▼
          </span>
          {activeDropdown === "home" && (
            <div className="dropdown">
              <Link to="/home" onClick={handleLinkClick}>
                {language === "en" ? "Home 1" : translations[language].home + " 1"}
              </Link>
              <Link to="/home2" onClick={handleLinkClick}>
                {translations[language].home2}
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/about"
          className={`nav-link ${activeLink === "about" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          {translations[language].about}
        </Link>

        <div className="nav-item">
          <span
            className={`nav-link ${activeLink === "services" ? "active" : ""}`}
            onClick={() => handleMainClick("services")}
          >
            {translations[language].services}
          </span>
          <span
            className={`arrow ${activeDropdown === "services" ? "open" : ""}`}
            onClick={() => toggleDropdown("services")}
          >
            ▼
          </span>
          {activeDropdown === "services" && (
            <div className="dropdown">
              <Link to="/outsourcing" onClick={handleLinkClick}>{translations[language].outsourcing}</Link>
              <Link to="/mobileapps" onClick={handleLinkClick}>{translations[language].mobileapps}</Link>
              <Link to="/websiteservice" onClick={handleLinkClick}>{translations[language].websiteservice}</Link>
              <Link to="/digitalstratagy" onClick={handleLinkClick}>{translations[language].digitalstratagy}</Link>
              <Link to="/cloudintegration" onClick={handleLinkClick}>{translations[language].cloudintegration}</Link>
              <Link to="/customersolutions" onClick={handleLinkClick}>{translations[language].customersolutions}</Link>
            </div>
          )}
        </div>

        <Link
          to="/blog"
          className={`nav-link ${activeLink === "blog" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          {translations[language].blog}
        </Link>

        <Link
          to="/contact"
          className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          {translations[language].contact}
        </Link>
      </nav>

      <div className="rightSection">
        {/* RTL Toggle Button */}
        <select
          className="rtlToggle"
          value={language}
          onChange={e => {
            setLanguage(e.target.value);
            localStorage.setItem("language", e.target.value);
            window.dispatchEvent(new Event("languageChanged"));
          }}
          style={{ marginRight: "10px", padding: "5px" }}
          aria-label="Select language direction"
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
          <option value="he">עברית</option>
        </select>

        <button className="themeToggle" onClick={toggleTheme}>
          {isDark ? "🌙" : "🌞"}
        </button>

        <div className="avatarContainer" ref={avatarRef} style={{ position: "relative" }}>
          <div
            className="avatarCircle"
            title="Your initials"
            onClick={toggleAvatarDropdown}
            style={{ cursor: "pointer" }}
          >
            {initials || "AD"}
          </div>

          {avatarDropdownOpen && (
            <div
              className="avatarDropdown"
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                right: 0,
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "6px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                zIndex: 1000,
                minWidth: "120px",
              }}
            >
              <button
                onClick={handleLogout}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  background: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                {translations[language].logout}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;