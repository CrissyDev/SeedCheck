import React from "react";
import { Routes, Route } from "react-router-dom";

import WelcomePage from "./components/WelcomePage.jsx";
import ProfileSetup from "./components/ProfileSetup.jsx"; 

function App() {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<WelcomePage />} />

      {/* Profile setup page */}
      <Route path="/profile-setup" element={<ProfileSetup />} />

      {/* Example for later */}
      {/* <Route path="/medical-history" element={<MedicalHistory />} /> */}

      {/* 404 fallback */}
      <Route path="*" element={<h2>404 - Page Not Found</h2>} />
    </Routes>
  );
}

export default App;
