import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";
import { Doughnut, Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";

// Translations object
const translations = {
  en: {
    dashboard: "Admin Dashboard",
    totalUsers: "Total Users",
    totalLogins: "Total Logins",
    activeToday: "Active Today",
    monthlySignups: "Monthly Signups",
    userEmailDomains: "User Email Domains",
    registrationsOverTime: "Registrations Over Time",
    userDataTable: "User Data Table",
    name: "Name",
    email: "Email",
    loginDate: "Login Date/Time",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Now"]
  },
  ar: {
    dashboard: "لوحة تحكم المدير",
    totalUsers: "إجمالي المستخدمين",
    totalLogins: "إجمالي تسجيلات الدخول",
    activeToday: "النشطون اليوم",
    monthlySignups: "التسجيلات الشهرية",
    userEmailDomains: "نطاقات البريد الإلكتروني للمستخدمين",
    registrationsOverTime: "التسجيلات عبر الزمن",
    userDataTable: "جدول بيانات المستخدمين",
    name: "الاسم",
    email: "البريد الإلكتروني",
    loginDate: "تاريخ/وقت الدخول",
    months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "الآن"]
  },
  he: {
    dashboard: "לוח מנהל",
    totalUsers: "סה\"כ משתמשים",
    totalLogins: "סה\"כ כניסות",
    activeToday: "פעילים היום",
    monthlySignups: "הרשמות חודשיות",
    userEmailDomains: "דומיינים של אימייל משתמשים",
    registrationsOverTime: "הרשמות לאורך זמן",
    userDataTable: "טבלת נתוני משתמשים",
    name: "שם",
    email: "אימייל",
    loginDate: "תאריך/שעת כניסה",
    months: ["ינו", "פבר", "מרץ", "אפר", "מאי", "עכשיו"]
  }
};

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [logins, setLogins] = useState({});
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("users")) || [];
    const localLogins = JSON.parse(localStorage.getItem("userLogins")) || {};
    setUsers(localUsers);
    setLogins(localLogins);
  }, []);

  useEffect(() => {
    const handleLanguageChange = () => setLanguage(localStorage.getItem("language") || "en");
    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  const t = translations[language];

  const totalUsers = users.length;
  const totalLogins = Object.keys(logins).length;

  // Active users today
  const today = new Date().toISOString().split("T")[0];
  const activeToday = Object.values(logins).filter((time) =>
    time.startsWith(today)
  ).length;

  // New signups this month
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const signupsThisMonth = users.filter((user) => {
    if (!user.createdAt) return false;
    const signupDate = new Date(user.createdAt);
    return (
      signupDate.getMonth() === currentMonth &&
      signupDate.getFullYear() === currentYear
    );
  }).length;

  // Group users by email domain
  const emailDomains = {};
  users.forEach((user) => {
    const domain = user.email.split("@")[1];
    emailDomains[domain] = (emailDomains[domain] || 0) + 1;
  });

  // Registration Bar Chart (placeholder + total)
  const registrationsByMonth = [5, 8, 12, 6, 10, totalUsers];

  const doughnutData = {
    labels: Object.keys(emailDomains),
    datasets: [
      {
        data: Object.values(emailDomains),
        backgroundColor: [
          "darkblue",
          "darkblue",
          "darkblue",
          "darkblue",
          "darkblue",
          "darkblue",
          "darkblue",
        ],
      },
    ],
  };

  const barData = {
    labels: t.months,
    datasets: [
      {
        label: t.registrationsOverTime,
        data: registrationsByMonth,
        backgroundColor: "#0a0343ff",
      },
    ],
  };

  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="admin-dashboard">
        {/* Header */}
        <header className="admin-header">
          <h1>{t.dashboard}</h1>
        </header>

        {/* Info Cards */}
        <div className="admin-cards">
          <div className="card blue">
            <h3>{t.totalUsers}</h3>
            <p>{totalUsers}</p>
          </div>
          <div className="card green">
            <h3>{t.totalLogins}</h3>
            <p>{totalLogins}</p>
          </div>
          <div className="card teal">
            <h3>{t.activeToday}</h3>
            <p>{activeToday}</p>
          </div>
          <div className="card purple">
            <h3>{t.monthlySignups}</h3>
            <p>{signupsThisMonth}</p>
          </div>
        </div>

        {/* Charts */}
        <div className="admin-charts">
          <div className="chart-container">
            <h3>{t.userEmailDomains}</h3>
            <Doughnut data={doughnutData} />
          </div>
          <div className="chart-container">
            <h3>{t.registrationsOverTime}</h3>
            <Bar data={barData} />
          </div>
        </div>

        {/* User Table */}
        <div className="user-table">
          <h2>{t.userDataTable}</h2>
          <table dir={["ar", "he"].includes(language) ? "rtl" : "ltr"}>
            <thead>
              <tr>
                <th>{t.name}</th>
                <th>{t.email}</th>
                <th>{t.loginDate}</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email}>
                  <td>{`${user.firstName} ${user.lastName}`}</td>
                  <td>{user.email}</td>
                  <td>{new Date(logins[user.email]).toLocaleString() || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
