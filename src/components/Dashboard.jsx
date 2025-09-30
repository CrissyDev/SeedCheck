import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { FaMoon, FaDumbbell, FaUtensils, FaWineGlassAlt, FaSmoking } from "react-icons/fa";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="logo">SeedCheck</div>

        <nav className="nav-links">
          <NavLink 
            to="/overview" 
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Overview
          </NavLink>
          <NavLink 
            to="/lifestyle" 
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Lifestyle
          </NavLink>
          <NavLink 
            to="/symptoms" 
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Symptoms
          </NavLink>
          <NavLink 
            to="/trends" 
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Trends
          </NavLink>
          <NavLink 
            to="/resources" 
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Resources
          </NavLink>
        </nav>

        <div className="nav-icons">
          <button className="icon-btn"><FaUser /></button>
          <button className="icon-btn"><FaCog /></button>
          <button className="icon-btn"><FaSignOutAlt /></button>
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
        {/* Card 1 */}
        <div className="card">
          <h3>Today's Entries</h3>
          <ul>
            <li>✔ Lifestyle Habits</li>
            <li>⚠ Symptoms</li>
            <li>✔ Notes</li>
          </ul>
          <button 
            className="card-btn" 
            onClick={() => navigate("/lifestyle")}
          >
            Complete Today
          </button>
        </div>

        {/* Card 2 */}
        <div className="card">
          <h3>Health Score</h3>
          <p className="score">74 <span>Out of 100</span></p>
          <div className="progress">
            <div className="progress-bar" style={{ width: "74%" }}></div>
          </div>
          <span className="status">Good</span>
        </div>

        {/* Card 3 */}
        <div className="card">
          <h3>Tracking Streak</h3>
          <p className="streak">3 <span>Days in a row</span></p>
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
        <button 
          className="update-btn"
          onClick={() => navigate("/lifestyle")}
        >
          Update Lifestyle Habits
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
