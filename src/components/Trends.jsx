import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Trends.css";
import { FaArrowUp, FaArrowDown, FaUserCircle, FaCog } from "react-icons/fa";

const Trends = () => {
  const [selectedRange, setSelectedRange] = useState("30 Days");
  const [activeTab, setActiveTab] = useState("Overview");

  const handleRangeChange = (range) => {
    setSelectedRange(range);
  };

  return (
    <div className="trends-page">
      {/* --- Top Navigation Bar --- */}
      <nav className="top-nav">
        <div className="logo">
          <span className="logo-icon">💚</span> <strong>SeedCheck</strong>
        </div>
        <p className="welcome-text">Welcome back!</p>
        <div className="nav-links">
          <NavLink to="/dashboard" className="nav-item">
            Overview
          </NavLink>
          <NavLink to="/lifestyle" className="nav-item">
            Lifestyle
          </NavLink>
          <NavLink to="/symptoms" className="nav-item">
            Symptoms
          </NavLink>
          <NavLink to="/trends" className="nav-item active">
            Trends
          </NavLink>
          <NavLink to="/resources" className="nav-item">
            Resources
          </NavLink>
        </div>
        <div className="nav-icons">
          <FaUserCircle className="icon" />
          <FaCog className="icon" />
        </div>
      </nav>

      {/* --- Page Header --- */}
      <header className="trends-header">
        <h2>Trends & Analytics</h2>
        <p>Visualize patterns and correlations in your fertility health data</p>

        <div className="dropdown">
          <button className="dropdown-btn">{selectedRange}</button>
          <div className="dropdown-content">
            {["7 Days", "30 Days", "90 Days", "1 Year"].map((range) => (
              <p key={range} onClick={() => handleRangeChange(range)}>
                {range}
              </p>
            ))}
          </div>
        </div>
      </header>

      {/* --- Metrics Cards --- */}
      <div className="cards">
        <div className="card">
          <p>Current Score</p>
          <h3>87</h3>
          <span className="trend-up">
            <FaArrowUp /> +12%
          </span>
        </div>
        <div className="card">
          <p>Avg Lifestyle</p>
          <h3>82</h3>
          <span className="trend-up">
            <FaArrowUp /> +8%
          </span>
        </div>
        <div className="card">
          <p>Symptom Days</p>
          <h3>3</h3>
          <span className="trend-down">
            <FaArrowDown /> -40%
          </span>
        </div>
        <div className="card">
          <p>Streak</p>
          <h3>12</h3>
        </div>
      </div>

      {/* --- Tabs --- */}
      <div className="tabs">
        {["Overview", "Lifestyle", "Correlations", "Insights"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* --- Dynamic Tab Content --- */}
      <div className="tab-content">
        {activeTab === "Overview" && (
          <p>This is the Overview section showing key performance summaries.</p>
        )}
        {activeTab === "Lifestyle" && (
          <p>
            This section displays your average lifestyle metrics and trends over
            time.
          </p>
        )}
        {activeTab === "Correlations" && (
          <p>
            Here, we analyze how different lifestyle factors correlate with your
            fertility trends.
          </p>
        )}
        {activeTab === "Insights" && (
          <p>
            Personalized insights generated from your health and lifestyle
            patterns.
          </p>
        )}
      </div>
    </div>
  );
};

export default Trends;
