import React from "react";
import { Routes, Route } from "react-router-dom";

import WelcomePage from "./components/WelcomePage.jsx";
import ProfileSetup from "./components/ProfileSetup.jsx";
import MedicalHistory from "./components/MedicalHistory.jsx"; 
import ReproductiveHistory from "./components/ReproductiveHistory.jsx";

function App() {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<WelcomePage />} />

      {/* Profile setup page */}
      <Route path="/profile-setup" element={<ProfileSetup />} />
      
      {/* Medical history page */}
      <Route path="/medical-history" element={<MedicalHistory />} />

      {/* Reproductive history page*/}
      <Route path="/reproductive-history" element={<ReproductiveHistory />} />

      {/* 404 fallback */}
      <Route path="*" element={<h2>404 - Page Not Found</h2>} />
    </Routes>
  );
}

export default App;
