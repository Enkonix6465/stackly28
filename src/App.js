import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import ScrollToTop from './components/ScrollToTop';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { DarkModeProvider, useDarkMode } from "./context/Darkmodecontext";

// Pages
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import AboutUs from "./pages/AboutUS";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Blog2 from "./pages/Blog2";

import AdminDashboard from "./pages/AdminDashboard";

// ✅ Capitalized default imports from pages
import Outsourcing from "./pages/Outsourcing";
import Mobileapps from "./pages/Mobileapps";
import Websiteservice from "./pages/Websiteservice";
import Digitalstratagy from "./pages/Digitalstratagy";
import Customersolutions from "./pages/Customersolutions";
import Cloudintegration from "./pages/Cloudintegration";

// ✅ AppLayout component
const AppLayout = () => {
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const showHeaderAndFooter = location.pathname !== "/welcome";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      {showHeaderAndFooter && (
        <Header toggleTheme={toggleDarkMode} isDark={darkMode} />
      )}
      <ScrollToTop />
      <div
        className="app-content"
        style={{
          paddingTop: showHeaderAndFooter ? "70px" : "0",
          minHeight: "calc(100vh - 70px)",
          overflowY: "auto",
        }}
      >
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/outsourcing" element={<Outsourcing />} />
          <Route path="/mobileapps" element={<Mobileapps />} />
          <Route path="/digitalstratagy" element={<Digitalstratagy />} />
          <Route path="/websiteservice" element={<Websiteservice />} />
          <Route path="/customersolutions" element={<Customersolutions />} />
          <Route path="/cloudintegration" element={<Cloudintegration />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/blog2" element={<Blog2 />} />

          
          <Route path="*" element={<Navigate to="/welcome" replace />} />
        </Routes>
      </div>
      {showHeaderAndFooter && <Footer />}
    </>
  );
};

// ✅ Main App
function App() {
  return (
    <DarkModeProvider>
      <Router>
        <AppLayout />
      </Router>
    </DarkModeProvider>
  );
}

export default App;
