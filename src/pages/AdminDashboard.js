import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";
import { Doughnut, Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
    
  const [users, setUsers] = useState([]);
  const [logins, setLogins] = useState({});

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("users")) || [];
    const localLogins = JSON.parse(localStorage.getItem("userLogins")) || {};

    setUsers(localUsers);
    setLogins(localLogins);
  }, []);

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
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Now"],
    datasets: [
      {
        label: "Registrations",
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
        <h1>Admin Dashboard</h1>
      </header>

      {/* Info Cards */}
      <div className="admin-cards">
        <div className="card blue">
          <h3>Total Users</h3>
          <p>{totalUsers}</p>
        </div>
        <div className="card green">
          <h3>Total Logins</h3>
          <p>{totalLogins}</p>
        </div>
        <div className="card teal">
          <h3>Active Today</h3>
          <p>{activeToday}</p>
        </div>
        <div className="card purple">
          <h3>Monthly Signups</h3>
          <p>{signupsThisMonth}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="admin-charts">
        <div className="chart-container">
          <h3>User Email Domains</h3>
          <Doughnut data={doughnutData} />
        </div>
        <div className="chart-container">
          <h3>Registrations Over Time</h3>
          <Bar data={barData} />
        </div>
      </div>

      {/* User Table */}
      <div className="user-table">
        <h2>User Data Table</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Login Date/Time</th>
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
