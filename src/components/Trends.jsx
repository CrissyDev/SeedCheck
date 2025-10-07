// src/components/Trends.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Trends.css";
import { FaArrowUp, FaArrowDown, FaUserCircle, FaCog } from "react-icons/fa";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const Trends = () => {
  const [selectedRange, setSelectedRange] = useState("30 Days");
  const [activeTab, setActiveTab] = useState("Overview");

  const data = [
    { date: "Jan 1", healthScore: 65, lifestyle: 70, symptoms: 2 },
    { date: "Jan 2", healthScore: 67, lifestyle: 68, symptoms: 3 },
    { date: "Jan 3", healthScore: 64, lifestyle: 66, symptoms: 4 },
    { date: "Jan 4", healthScore: 70, lifestyle: 72, symptoms: 1 },
    { date: "Jan 5", healthScore: 73, lifestyle: 75, symptoms: 2 },
    { date: "Jan 6", healthScore: 76, lifestyle: 78, symptoms: 1 },
    { date: "Jan 7", healthScore: 78, lifestyle: 79, symptoms: 1 },
    { date: "Jan 8", healthScore: 77, lifestyle: 80, symptoms: 3 },
    { date: "Jan 9", healthScore: 80, lifestyle: 83, symptoms: 2 },
    { date: "Jan 10", healthScore: 82, lifestyle: 84, symptoms: 1 },
    { date: "Jan 11", healthScore: 81, lifestyle: 82, symptoms: 3 },
    { date: "Jan 12", healthScore: 85, lifestyle: 86, symptoms: 1 },
    { date: "Jan 13", healthScore: 84, lifestyle: 85, symptoms: 2 },
    { date: "Jan 14", healthScore: 88, lifestyle: 89, symptoms: 1 },
  ];

  const radarData = [
    { subject: "Sleep", A: 85, fullMark: 100 },
    { subject: "Exercise", A: 75, fullMark: 100 },
    { subject: "Diet", A: 68, fullMark: 100 },
    { subject: "Stress", A: 55, fullMark: 100 },
    { subject: "Mood", A: 70, fullMark: 100 },
    { subject: "Energy", A: 80, fullMark: 100 },
  ];

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
          <div className="chart-container">
            <h4>📈 Health Score Trend</h4>
            <p>Your overall fertility health score over time</p>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={data}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorHealth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#66bb6a" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#66bb6a" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#e8f5e9",
                    border: "1px solid #81c784",
                  }}
                  labelStyle={{ color: "#2e7d32" }}
                  formatter={(value, name) => [
                    `${value}`,
                    name === "healthScore" ? "Health Score" : name,
                  ]}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="healthScore"
                  stroke="#2e7d32"
                  fillOpacity={1}
                  fill="url(#colorHealth)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* --- Lifestyle Tab Section --- */}
        {activeTab === "Lifestyle" && (
          <>
            <div className="lifestyle-performance">
              <h3>⚡ Lifestyle Habits Performance</h3>
              <p>Track your progress across different lifestyle factors</p>
              <div className="lifestyle-list">
                <div className="lifestyle-item">
                  <span>💤 Sleep</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "85%" }}></div>
                  </div>
                  <span className="percent">85%</span>
                  <span className="trend up">+5%</span>
                </div>

                <div className="lifestyle-item">
                  <span>🏃‍♀️ Exercise</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "70%" }}></div>
                  </div>
                  <span className="percent">70%</span>
                  <span className="trend up">+8%</span>
                </div>

                <div className="lifestyle-item">
                  <span>🥗 Diet</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "60%" }}></div>
                  </div>
                  <span className="percent">60%</span>
                  <span className="trend down">-3%</span>
                </div>

                <div className="lifestyle-item">
                  <span>🍷 Alcohol</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "90%" }}></div>
                  </div>
                  <span className="percent">90%</span>
                  <span className="trend neutral">0%</span>
                </div>

                <div className="lifestyle-item">
                  <span>🚭 Smoking</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "100%" }}></div>
                  </div>
                  <span className="percent">100%</span>
                  <span className="trend up">+2%</span>
                </div>
              </div>
            </div>

            {/* --- Health Profile Radar --- */}
            <div className="health-radar">
              <h4>🧭 Health Profile Radar</h4>
              <p>Current performance vs target goals</p>
              <ResponsiveContainer width="100%" height={350}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name="Performance"
                    dataKey="A"
                    stroke="#007bff"
                    fill="#007bff"
                    fillOpacity={0.5}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </>
        )}

        {/* --- Correlation Analysis Section --- */}
        {activeTab === "Correlations" && (
          <div className="correlation-section">
            <h3>📊 Correlation Analysis</h3>
            <p>How different factors impact your fertility health</p>

            <div className="correlation-card">
              <div className="correlation-info">
                <h4>Sleep Quality</h4>
                <p>Strong positive impact on fertility score</p>
              </div>
              <div className="progress-bar positive" style={{ width: "85%" }}></div>
              <span className="correlation-value positive">+0.85</span>
            </div>

            <div className="correlation-card">
              <div className="correlation-info">
                <h4>Exercise</h4>
                <p>Moderate positive impact on overall health</p>
              </div>
              <div className="progress-bar positive" style={{ width: "72%" }}></div>
              <span className="correlation-value positive">+0.72</span>
            </div>

            <div className="correlation-card">
              <div className="correlation-info">
                <h4>Diet Quality</h4>
                <p>Good nutrition supports reproductive health</p>
              </div>
              <div className="progress-bar positive" style={{ width: "58%" }}></div>
              <span className="correlation-value positive">+0.58</span>
            </div>

            <div className="correlation-card">
              <div className="correlation-info">
                <h4>Stress Level</h4>
                <p>High stress reduces fertility markers</p>
              </div>
              <div className="progress-bar negative" style={{ width: "68%" }}></div>
              <span className="correlation-value negative">-0.68</span>
            </div>

            <div className="correlation-card">
              <div className="correlation-info">
                <h4>Alcohol Intake</h4>
                <p>Negative correlation with sexual function</p>
              </div>
              <div className="progress-bar negative" style={{ width: "45%" }}></div>
              <span className="correlation-value negative">-0.45</span>
            </div>

            {/* --- New Key Findings Section --- */}
            <div className="key-findings">
              <h3>Key Findings</h3>
              <p className="subtitle">
                Important patterns discovered in your data
              </p>

              <div className="finding positive">
                <h4>🌿 Positive Trend</h4>
                <p>
                  Your sleep quality improvements strongly correlate with better overall health scores.
                </p>
              </div>

              <div className="finding opportunity">
                <h4>🎯 Opportunity</h4>
                <p>
                  Reducing alcohol intake on weekends could improve your weekly average by 15%.
                </p>
              </div>

              <div className="finding watch">
                <h4>⚠️ Watch Point</h4>
                <p>
                  Stress levels tend to spike on Wednesdays, affecting your symptom reports.
                </p>
              </div>
            </div>
          </div>
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
