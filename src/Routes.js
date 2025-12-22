import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import App from "./App";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import ThankYouPage from "./components/ThankYouPage";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import AdminLogin from "./components/AdminDashboard/AdminLogin";
import NotFound from "./components/NotFound";
import MaintenancePage from "./components/MaintenancePage";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
    </BrowserRouter>
  );
}

export default Routes;
