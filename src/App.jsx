import React from "react";
import { Routes, Route } from "react-router-dom";

import WelcomePage from "./components/WelcomePage.jsx";
import ProfileSetup from "./components/ProfileSetup.jsx";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<WelcomePage />} />

      {/* Profile setup wizard */}
      <Route path="/profile-setup" element={<ProfileSetup />} />

      {/*Dashboard Routing*/}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* 404 fallback */}
      <Route path="*" element={<h2>404 - Page Not Found</h2>} />
    </Routes>
  );
}

export default App;
