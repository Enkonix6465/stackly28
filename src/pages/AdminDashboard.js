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
    <div
      className={darkMode ? "dark-mode" : "light-mode"}
      style={{
        minHeight: "100vh",
        background: darkMode
          ? "linear-gradient(135deg, #232526 0%, #414345 100%)"
          : "linear-gradient(135deg, #e0eafc 0%, #cfdef3 40%, #f8fafc 100%)",
        padding: "0",
      }}
    >
      <div
        className="admin-dashboard"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "32px 16px",
          background: darkMode
            ? "linear-gradient(135deg, #232526 0%, #434343 100%)"
            : "linear-gradient(135deg, #f8fafc 0%, #e3e6ee 100%)",
          borderRadius: "18px",
          boxShadow: darkMode
            ? "0 4px 32px rgba(0,0,0,0.7)"
            : "0 4px 32px rgba(0,0,0,0.08)",
        }}
      >
        {/* Header */}
        <header
          className="admin-header"
          style={{
            background: darkMode
              ? "rgba(30,34,40,0.85)"
              : "rgba(255,255,255,0.85)",
            boxShadow: darkMode
              ? "0 2px 12px rgba(0,0,0,0.4)"
              : "0 2px 12px rgba(0,0,0,0.08)",
            borderRadius: "12px",
            padding: "18px 0",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          <h1 style={{ color: darkMode ? "#fff" : "#0a0343ff", margin: 0 }}>{t.dashboard}</h1>
        </header>

        {/* Info Cards */}
        <div
          className="admin-cards"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(120px, 1fr))",
            gap: "18px",
            fontSize: "15px",
            marginBottom: "32px",
            background: darkMode
              ? "linear-gradient(135deg, #283e51 0%, #485563 100%)"
              : "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
            borderRadius: "14px",
            boxShadow: darkMode
              ? "0 2px 12px rgba(0,0,0,0.5)"
              : "0 2px 12px rgba(0,0,0,0.08)",
            padding: "18px 0",
          }}
        >
          <div
            className="card blue"
            style={{
              background: darkMode
                ? "linear-gradient(135deg, #283e51 0%, #485563 100%)"
                : "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
              boxShadow: darkMode
                ? "0 2px 10px rgba(0,0,0,0.5)"
                : "0 2px 10px rgba(0,0,0,0.08)",
              padding: "14px 10px",
              borderRadius: "10px",
              minWidth: "0",
              color: darkMode ? "#fff" : "#0a0343ff",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "16px" }}>{t.totalUsers}</h3>
            <p style={{ fontSize: "18px" }}>{totalUsers}</p>
          </div>
          <div
            className="card green"
            style={{
              background: darkMode
                ? "linear-gradient(135deg, #134e5e 0%, #71b280 100%)"
                : "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)",
              boxShadow: darkMode
                ? "0 2px 10px rgba(0,0,0,0.5)"
                : "0 2px 10px rgba(0,0,0,0.08)",
              padding: "14px 10px",
              borderRadius: "10px",
              minWidth: "0",
              color: darkMode ? "#fff" : "#0a0343ff",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "16px" }}>{t.totalLogins}</h3>
            <p style={{ fontSize: "18px" }}>{totalLogins}</p>
          </div>
          <div
            className="card teal"
            style={{
              background: darkMode
                ? "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
                : "linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)",
              boxShadow: darkMode
                ? "0 2px 10px rgba(0,0,0,0.5)"
                : "0 2px 10px rgba(0,0,0,0.08)",
              padding: "14px 10px",
              borderRadius: "10px",
              minWidth: "0",
              color: darkMode ? "#fff" : "#0a0343ff",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "16px" }}>{t.activeToday}</h3>
            <p style={{ fontSize: "18px" }}>{activeToday}</p>
          </div>
          <div
            className="card purple"
            style={{
              background: darkMode
                ? "linear-gradient(135deg, #41295a 0%, #2F0743 100%)"
                : "linear-gradient(135deg, #f3e6ff 0%, #e9d8fd 100%)",
              boxShadow: darkMode
                ? "0 2px 10px rgba(0,0,0,0.5)"
                : "0 2px 10px rgba(0,0,0,0.08)",
              padding: "14px 10px",
              borderRadius: "10px",
              minWidth: "0",
              color: darkMode ? "#fff" : "#0a0343ff",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "16px" }}>{t.monthlySignups}</h3>
            <p style={{ fontSize: "18px" }}>{signupsThisMonth}</p>
          </div>
        </div>

        {/* Charts */}
        <div
          className="admin-charts"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px",
            justifyContent: "center",
            alignItems: "start",
            marginBottom: "32px",
            background: darkMode
              ? "linear-gradient(135deg, #232526 0%, #434343 100%)"
              : "linear-gradient(135deg, #fff 0%, #f8fafc 100%)",
            borderRadius: "14px",
            boxShadow: darkMode
              ? "0 2px 12px rgba(0,0,0,0.5)"
              : "0 2px 12px rgba(0,0,0,0.08)",
            padding: "18px 0",
          }}
        >
          <div
            className="chart-container"
            style={{
              background: darkMode
                ? "linear-gradient(135deg, #232526 0%, #414345 100%)"
                : "linear-gradient(135deg, #fff 0%, #f8fafc 100%)",
              boxShadow: darkMode
                ? "0 2px 10px rgba(0,0,0,0.5)"
                : "0 2px 10px rgba(0,0,0,0.08)",
              borderRadius: "12px",
              padding: "18px 0 0 0",
              maxWidth: "100%",
              height: 220,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3 style={{ color: darkMode ? "#fff" : "#0a0343ff" }}>{t.userEmailDomains}</h3>
            <div style={{ width: 160, height: 160 }}>
              <Doughnut data={doughnutData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
          <div
            className="chart-container"
            style={{
              background: darkMode
                ? "linear-gradient(135deg, #232526 0%, #414345 100%)"
                : "linear-gradient(135deg, #fff 0%, #f8fafc 100%)",
              boxShadow: darkMode
                ? "0 2px 10px rgba(0,0,0,0.5)"
                : "0 2px 10px rgba(0,0,0,0.08)",
              borderRadius: "12px",
              padding: "18px 0 0 0",
              maxWidth: "100%",
              height: 220,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3 style={{ color: darkMode ? "#fff" : "#0a0343ff" }}>{t.registrationsOverTime}</h3>
            <div style={{ width: 180, height: 160 }}>
              <Bar data={barData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
          <div
            className="chart-container"
            style={{
              background: darkMode
                ? "linear-gradient(135deg, #232526 0%, #414345 100%)"
                : "linear-gradient(135deg, #fff 0%, #f8fafc 100%)",
              boxShadow: darkMode
                ? "0 2px 10px rgba(0,0,0,0.5)"
                : "0 2px 10px rgba(0,0,0,0.08)",
              borderRadius: "12px",
              padding: "18px 0 0 0",
              maxWidth: "100%",
              height: 220,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3 style={{ color: darkMode ? "#fff" : "#0a0343ff" }}>Admin Info</h3>
            <div
              style={{
                textAlign: "center",
                marginTop: 40,
                color: darkMode ? "#fff" : "#0a0343ff",
                fontWeight: "bold"
              }}
            >
              Admin Panel<br />Statistics &amp; Controls
            </div>
          </div>
        </div>

        {/* User Table */}
        <div
          className="user-table"
          style={{
            background: darkMode
              ? "linear-gradient(135deg, #232526 0%, #434343 100%)"
              : "linear-gradient(135deg, #fff 0%, #f8fafc 100%)",
            boxShadow: darkMode
              ? "0 2px 10px rgba(0,0,0,0.5)"
              : "0 2px 10px rgba(0,0,0,0.08)",
            borderRadius: "12px",
            padding: "24px",
            marginBottom: "32px",
          }}
        >
          <h2 style={{ color: darkMode ? "#fff" : "#0a0343ff" }}>{t.userDataTable}</h2>
          <table dir={["ar", "he"].includes(language) ? "rtl" : "ltr"} style={{ width: "100%", background: "transparent" }}>
            <thead>
              <tr style={{ background: "#0a1747" }}>
                <th style={{ color: "#fff", fontWeight: "bold" }}>{t.name}</th>
                <th style={{ color: "#fff", fontWeight: "bold" }}>{t.email}</th>
                <th style={{ color: "#fff", fontWeight: "bold" }}>{t.loginDate}</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email}>
                  <td style={{ color: darkMode ? "#fff" : "#0a0343ff" }}>{`${user.firstName} ${user.lastName}`}</td>
                  <td style={{ color: darkMode ? "#fff" : "#0a0343ff" }}>{user.email}</td>
                  <td style={{ color: darkMode ? "#fff" : "#0a0343ff" }}>{new Date(logins[user.email]).toLocaleString() || "N/A"}</td>
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
