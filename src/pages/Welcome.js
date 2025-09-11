import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import login from "../images/login.jpg";
import logo from "../images/logo.png"; // Make sure the path and filename are correct

// Translations object
const translations = {
  en: {
    welcome: "Welcome to",
    stackly: "STACKLY",
    welcomeBack: "Welcome back, Please login into an account",
    username: "Your Username",
    password: "Enter Password",
    forgotPassword: "Forgot password?",
    login: "Login",
    dontHaveAccount: "Don't have an account?",
    firstName: "First Name",
    lastName: "Last Name",
    signUp: "Sign Up",
    alreadyHaveAccount: "Already have an account?",
    resetPassword: "Reset Password",
    enterRegisteredEmail: "Enter your registered email",
    sendResetLink: "Send Reset Link",
    backToLogin: "Back to Login",
    invalid: "Invalid email or password.",
    userExists: "User already exists with this email.",
    signupSuccess: "Signup successful! Please login.",
    noUser: "No user found with this email.",
    resetMsg: "User found. Please check your email for password reset instructions. (Simulation)"
  },
  ar: {
    welcome: "مرحبًا في",
    stackly: "STACKLY",
    welcomeBack: "مرحبًا بعودتك، يرجى تسجيل الدخول إلى حسابك",
    username: "اسم المستخدم",
    password: "أدخل كلمة المرور",
    forgotPassword: "نسيت كلمة المرور؟",
    login: "تسجيل الدخول",
    dontHaveAccount: "ليس لديك حساب؟ سجل الآن",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    signUp: "سجل",
    alreadyHaveAccount: "لديك حساب بالفعل؟ تسجيل الدخول",
    resetPassword: "إعادة تعيين كلمة المرور",
    enterRegisteredEmail: "أدخل بريدك الإلكتروني المسجل",
    sendResetLink: "إرسال رابط إعادة التعيين",
    backToLogin: "العودة لتسجيل الدخول",
    invalid: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
    userExists: "يوجد مستخدم بهذا البريد الإلكتروني.",
    signupSuccess: "تم التسجيل بنجاح! يرجى تسجيل الدخول.",
    noUser: "لا يوجد مستخدم بهذا البريد الإلكتروني.",
    resetMsg: "تم العثور على المستخدم. يرجى التحقق من بريدك الإلكتروني لإعادة تعيين كلمة المرور. (محاكاة)"
  },
  he: {
    welcome: "ברוכים הבאים ל",
    stackly: "STACKLY",
    welcomeBack: "ברוך שובך, אנא התחבר לחשבון",
    username: "שם משתמש",
    password: "הזן סיסמה",
    forgotPassword: "שכחת סיסמה?",
    login: "התחבר",
    dontHaveAccount: "אין לך חשבון? הרשמה",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    signUp: "הרשמה",
    alreadyHaveAccount: "כבר יש לך חשבון? התחבר",
    resetPassword: "איפוס סיסמה",
    enterRegisteredEmail: "הזן את האימייל הרשום שלך",
    sendResetLink: "שלח קישור לאיפוס",
    backToLogin: "חזרה להתחברות",
    invalid: "אימייל או סיסמה שגויים.",
    userExists: "משתמש כבר קיים עם אימייל זה.",
    signupSuccess: "ההרשמה הצליחה! אנא התחבר.",
    noUser: "לא נמצא משתמש עם אימייל זה.",
    resetMsg: "משתמש נמצא. בדוק את האימייל שלך להוראות איפוס סיסמה. (סימולציה)"
  }
};

const getLanguage = () => localStorage.getItem("language") || "en";

const Welcome = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(getLanguage());
  const t = translations[language];

  useEffect(() => {
    const handleLanguageChange = () => setLanguage(getLanguage());
    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (loginData.email === "admin@enkonix.in" && loginData.password === "admin123") {
      setError("");
      localStorage.setItem("loggedInUserEmail", loginData.email);
      const logins = JSON.parse(localStorage.getItem("userLogins")) || {};
      logins[loginData.email] = new Date().toISOString();
      localStorage.setItem("userLogins", JSON.stringify(logins));
      navigate("/AdminDashboard");
      return;
    }

    const user = users.find(
      (user) => user.email === loginData.email && user.password === loginData.password
    );

    if (user) {
      setError("");
      localStorage.setItem("loggedInUserEmail", user.email);
      const logins = JSON.parse(localStorage.getItem("userLogins")) || {};
      logins[user.email] = new Date().toISOString();
      localStorage.setItem("userLogins", JSON.stringify(logins));
      navigate("/home");
    } else {
      setError(t.invalid);
    }
  };

  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((user) => user.email === signUpData.email)) {
      setError(t.userExists);
      return;
    }

    users.push(signUpData);
    localStorage.setItem("users", JSON.stringify(users));
    setError("");
    alert(t.signupSuccess);
    setSignUpData({ firstName: "", lastName: "", email: "", password: "" });
    setIsLogin(true);
  };

  const handleForgotPasswordChange = (e) => {
    setForgotEmail(e.target.value);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((user) => user.email === forgotEmail);

    if (!user) {
      setError(t.noUser);
      setResetMessage("");
    } else {
      setError("");
      setResetMessage(t.resetMsg);
    }
  };

  return (
    <>
      {/* Mobile responsiveness */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="display: flex"][style*="min-height: 100vh"] {
            flex-direction: column !important;
          }
          div[style*="flex: 1"]:nth-child(1),
          div[style*="flex: 1"]:nth-child(2) {
            width: 100% !important;
            margin: 0 !important;
            padding: 20px !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }
          h1, h2 {
            font-size: 24px !important;
            text-align: center;
          }
          input {
            font-size: 14px !important;
            padding: 10px 12px !important;
          }
          button {
            font-size: 14px !important;
            padding: 10px !important;
          }
          p[style*="cursor: pointer"] {
            font-size: 14px !important;
            text-align: center !important;
          }
        }

        @media (max-width: 480px) {
          div[style*="padding: 40px"] {
            padding: 15px !important;
          }
          div[style*="margin: 40px"] {
            margin: 10px !important;
          }
          div[style*="backgroundColor: #fff"] {
            padding: 20px !important;
            margin: 10px !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }
          h1 {
            font-size: 20px !important;
          }
          h2 {
            font-size: 18px !important;
          }
          input {
            font-size: 13px !important;
            padding: 8px 10px !important;
          }
          button {
            font-size: 13px !important;
            padding: 8px !important;
          }
        }
      `}</style>

      <div style={styles.pageContainer}>
        <div style={styles.leftSide}>
          <img
            src={login}
            alt="Login Illustration"
            style={styles.image}
          />
        </div>

        <div style={styles.rightSide}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: 120, margin: "0 auto 24px", display: "block", cursor: "pointer" }}
            onClick={() => {
              setError("");
              setIsLogin((prev) => !prev);
            }}
          />
          {!isForgotPassword ? (
            <>
              <h1 style={styles.welcomeHeading}>
                <span
                  style={{ ...styles.highlight, cursor: "pointer" }}
                  onClick={() => {
                    setError("");
                    setIsLogin((prev) => !prev);
                  }}
                >
                  {t.stackly}
                </span>
              </h1>
              <p style={styles.welcomeSubtext}>
                {t.welcomeBack}
              </p>
              {isLogin ? (
                <form onSubmit={handleLoginSubmit} style={styles.form}>
                  <label htmlFor="login-email" style={{ fontWeight: "bold" }}>
                    {t.username} <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    id="login-email"
                    style={styles.input}
                    type="email"
                    name="email"
                    placeholder={t.username}
                    value={loginData.email}
                    onChange={handleLoginChange}
                    required
                  />
                  <label htmlFor="login-password" style={{ fontWeight: "bold" }}>
                    {t.password} <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    id="login-password"
                    style={styles.input}
                    type="password"
                    name="password"
                    placeholder={t.password}
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                  />
                  <p
                    style={styles.forgotPassword}
                    onClick={() => {
                      setError("");
                      setIsForgotPassword(true);
                      setResetMessage("");
                    }}
                  >
                    {t.forgotPassword}
                  </p>
                  <button type="submit" style={styles.loginButton}>
                    <span role="img" aria-label="user-lock" style={{ marginRight: 8 }}>👤🔒</span> {t.login}
                  </button>
                  <p style={{ ...styles.toggle, cursor: "default" }}>
                    {t.dontHaveAccount.replace(/(\?|:)/, "$1")}
                    <span
                      style={{
                        color: "#0a0343ff",
                        textDecoration: "underline",
                        cursor: "pointer",
                        marginLeft: 5,
                      }}
                      onClick={() => {
                        setError("");
                        setIsLogin(false);
                      }}
                    >
                      {t.signUp}
                    </span>
                  </p>
                </form>
              ) : (
                <form onSubmit={handleSignUpSubmit} style={styles.form}>
                  <label htmlFor="signup-firstname" style={{ fontWeight: "bold" }}>
                    {t.firstName} <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    id="signup-firstname"
                    style={styles.input}
                    type="text"
                    name="firstName"
                    placeholder={t.firstName}
                    value={signUpData.firstName}
                    onChange={handleSignUpChange}
                    required
                  />
                  <label htmlFor="signup-lastname" style={{ fontWeight: "bold" }}>
                    {t.lastName} <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    id="signup-lastname"
                    style={styles.input}
                    type="text"
                    name="lastName"
                    placeholder={t.lastName}
                    value={signUpData.lastName}
                    onChange={handleSignUpChange}
                    required
                  />
                  <label htmlFor="signup-email" style={{ fontWeight: "bold" }}>
                    {t.username} <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    id="signup-email"
                    style={styles.input}
                    type="email"
                    name="email"
                    placeholder={t.username}
                    value={signUpData.email}
                    onChange={handleSignUpChange}
                    required
                  />
                  <label htmlFor="signup-password" style={{ fontWeight: "bold" }}>
                    {t.password} <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    id="signup-password"
                    style={styles.input}
                    type="password"
                    name="password"
                    placeholder={t.password}
                    value={signUpData.password}
                    onChange={handleSignUpChange}
                    required
                  />
                  <button type="submit" style={styles.loginButton}>
                    {t.signUp}
                  </button>
                  <p style={{ ...styles.toggle, cursor: "default" }}>
                    {t.alreadyHaveAccount.replace(/(\?|:)/, "$1")}
                    <span
                      style={{
                        color: "#0a0343ff",
                        textDecoration: "underline",
                        cursor: "pointer",
                        marginLeft: 5,
                      }}
                      onClick={() => {
                        setError("");
                        setIsLogin(true);
                      }}
                    >
                      {t.login}
                    </span>
                  </p>
                </form>
              )}
              {error && <p style={styles.errorMsg}>{error}</p>}
              {resetMessage && <p style={{ color: "green", marginTop: 10 }}>{resetMessage}</p>}
            </>
          ) : (
            <>
              <h2 style={styles.welcomeHeading}>{t.resetPassword}</h2>
              <form onSubmit={handleForgotPasswordSubmit} style={styles.form}>
                <input
                  style={styles.input}
                  type="email"
                  placeholder={t.enterRegisteredEmail}
                  value={forgotEmail}
                  onChange={handleForgotPasswordChange}
                  required
                />
                <button type="submit" style={styles.loginButton}>
                  {t.sendResetLink}
                </button>
                <p
                  style={styles.toggle}
                  onClick={() => {
                    setError("");
                    setResetMessage("");
                    setIsForgotPassword(false);
                  }}
                >
                  {t.backToLogin}
                </p>
              </form>
              {error && <p style={styles.errorMsg}>{error}</p>}
              {resetMessage && <p style={{ color: "green", marginTop: 10 }}>{resetMessage}</p>}
            </>
          )}
        </div>
      </div>
    </>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#0a0343ff",
    overflow: "hidden",
  },
  leftSide: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    overflow: "hidden",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
  },
  rightSide: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: "10px",
    margin: "40px",
    padding: "40px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
  },
  welcomeHeading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  highlight: {
    color: "#0a0343ff",
  },
  welcomeSubtext: {
    marginBottom: "30px",
    color: "#666",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px 15px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  loginButton: {
    backgroundColor: "#0a0343ff",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
  forgotPassword: {
    textAlign: "right",
    color: "#090628ff",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "-10px",
  },
  toggle: {
    cursor: "pointer",
    color: "#0a0343ff",
    marginTop: "15px",
    textAlign: "center",
    userSelect: "none",
  },
  errorMsg: {
    color: "red",
    marginTop: "10px",
  },
};

export default Welcome;
