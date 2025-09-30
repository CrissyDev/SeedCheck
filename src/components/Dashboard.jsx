import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaMoon,
  FaDumbbell,
  FaUtensils,
  FaWineGlassAlt,
  FaSmoking,
  FaChartBar,
} from "react-icons/fa";
import { LuClock4, LuHeart } from "react-icons/lu";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  // Sample health trend data
  const data = [
    { date: "Jan 1", score: 65 },
    { date: "Jan 2", score: 70 },
    { date: "Jan 3", score: 62 },
    { date: "Jan 4", score: 72 },
    { date: "Jan 5", score: 74 },
    { date: "Jan 6", score: 68 },
    { date: "Jan 7", score: 76 },
  ];

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="logo">SeedCheck</div>

        <nav className="nav-links">
          {/* Overview is the current page → just a styled span */}
          <span className="nav-item active">Overview</span>

          <NavLink
            to="/lifestyle"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Lifestyle
          </NavLink>
          <NavLink
            to="/symptoms"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Symptoms
          </NavLink>
          <NavLink
            to="/trends"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Trends
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Resources
          </NavLink>
        </nav>

        <div className="nav-icons">
          <button className="icon-btn">
            <FaUser />
          </button>
          <button className="icon-btn">
            <FaCog />
          </button>
          <button className="icon-btn">
            <FaSignOutAlt />
          </button>
        </div>
      </header>

      {/* Welcome + Actions */}
      <section className="welcome-section">
        <div className="welcome-text">
          <h2>Good morning, there</h2>
          <p>Here's your fertility health overview for today</p>
        </div>

        <div className="actions">
          <button onClick={() => navigate("/lifestyle")}>+ Log Today</button>
          <button onClick={() => navigate("/trends")}>View Trends</button>
        </div>
      </section>

      {/* Cards */}
      <div className="cards-container">
        <div className="card">
          <h3>Today's Entries</h3>
          <ul>
            <li>✔ Lifestyle Habits</li>
            <li>⚠ Symptoms</li>
            <li>✔ Notes</li>
          </ul>
          <button className="card-btn" onClick={() => navigate("/lifestyle")}>
            Complete Today
          </button>
        </div>

        <div className="card">
          <h3>Health Score</h3>
          <p className="score">
            74 <span>Out of 100</span>
          </p>
          <div className="progress">
            <div className="progress-bar" style={{ width: "74%" }}></div>
          </div>
          <span className="status">Good</span>
        </div>

        <div className="card">
          <h3>Tracking Streak</h3>
          <p className="streak">
            3 <span>Days in a row</span>
          </p>
          <p>Longest streak: 12 days</p>
          <p>This week: 5/7 days</p>
          <div className="progress">
            <div className="progress-bar" style={{ width: "70%" }}></div>
          </div>
        </div>
      </div>

      {/* Lifestyle Habits Summary */}
      <div className="lifestyle-card">
        <h3>📈 Lifestyle Habits Summary</h3>
        <p>Your recent lifestyle tracking performance</p>
        <div className="habits-container">
          <div className="habit">
            <FaMoon className="habit-icon sleep" />
            <p>Sleep</p>
            <h4>85%</h4>
            <div className="habit-progress">
              <div className="habit-bar" style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className="habit">
            <FaDumbbell className="habit-icon exercise" />
            <p>Exercise</p>
            <h4>70%</h4>
            <div className="habit-progress">
              <div className="habit-bar" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div className="habit">
            <FaUtensils className="habit-icon diet" />
            <p>Diet</p>
            <h4>60%</h4>
            <div className="habit-progress">
              <div className="habit-bar" style={{ width: "60%" }}></div>
            </div>
          </div>
          <div className="habit">
            <FaWineGlassAlt className="habit-icon alcohol" />
            <p>Alcohol</p>
            <h4>90%</h4>
            <div className="habit-progress">
              <div className="habit-bar" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="habit">
            <FaSmoking className="habit-icon smoking" />
            <p>Smoking</p>
            <h4>100%</h4>
            <div className="habit-progress">
              <div className="habit-bar" style={{ width: "100%" }}></div>
            </div>
          </div>
        </div>
        <button className="update-btn" onClick={() => navigate("/lifestyle")}>
          Update Lifestyle Habits
        </button>
      </div>

      {/* Health Trend + Symptoms */}
      <div className="trend-symptoms">
        {/* Fertility Health Trend */}
        <div className="trend-card">
          <h3>📊 Fertility Health Trend</h3>
          <p>Your health score over the past week</p>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid stroke="#e6f2ff" strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#003366"
                strokeWidth={2}
                dot
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Symptoms */}
        <div className="symptoms-card">
          <h3>📝 Recent Symptoms</h3>
          <p>Symptoms logged in the past week</p>
          <div className="symptom-item">
            <span>No symptoms reported</span>
            <span className="badge normal">Normal</span>
          </div>
          <div className="symptom-item">
            <span>Mild fatigue</span>
            <span className="badge mild">Mild</span>
          </div>
          <div className="symptom-item">
            <span>Sleep quality issues</span>
            <span className="badge moderate">Moderate</span>
          </div>
          <button className="log-btn" onClick={() => navigate("/symptoms")}>
            Log Symptoms
          </button>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <p>Common tasks and reminders</p>
        <div className="actions-container">
          <div className="quick-card" onClick={() => navigate("/reminder")}>
            <LuClock4 className="quick-icon" />
            <h4>Set Reminder</h4>
            <p>Daily logging reminder</p>
          </div>

          <div className="quick-card" onClick={() => navigate("/reports")}>
            <FaChartBar className="quick-icon" />
            <h4>View Reports</h4>
            <p>Weekly & monthly insights</p>
          </div>

          <div className="quick-card" onClick={() => navigate("/tips")}>
            <LuHeart className="quick-icon" />
            <h4>Health Tips</h4>
            <p>Personalized recommendations</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
