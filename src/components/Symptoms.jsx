import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaExclamationTriangle,
  FaHeart,
  FaHeartbeat,
  FaClock,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Symptoms.css";

function Symptoms() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [entries, setEntries] = useState({
    pain: 0,
    erectile: 8,
    libido: 7,
    wellbeing: 7,
  });

  const handleSave = () => {
    alert(
      `Saved Symptoms for ${selectedDate.toDateString()}:\n⚠️ Pain: ${entries.pain}/10\n❤️ Erectile Function: ${entries.erectile}/10\n📈 Libido: ${entries.libido}/10\n⏱️ Wellbeing: ${entries.wellbeing}/10`
    );
  };

  return (
    <div className="symptoms-page">
      {/* Header */}
      <header className="header">
        <div className="logo">SeedCheck</div>

        <nav className="nav-links">
          <NavLink to="/dashboard" className="nav-item">
            Overview
          </NavLink>
          <NavLink to="/lifestyle" className="nav-item">
            Lifestyle
          </NavLink>
          <NavLink to="/symptoms" className="nav-item active">
            Symptoms
          </NavLink>
          <NavLink to="/trends" className="nav-item">
            Trends
          </NavLink>
          <NavLink to="/resources" className="nav-item">
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

      {/* Title Row */}
      <div className="header-row">
        <div>
          <h2>Symptom Tracking</h2>
          <p>Monitor urogenital symptoms and sexual health metrics</p>
        </div>
        <div className="actions-row">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            maxDate={new Date()}
            className="date-picker"
            dateFormat="MMMM d, yyyy"
          />
          <button className="save-btn" onClick={handleSave}>
            Save Entry
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="cards-grid">
        <div className="symptom-card hoverable">
          <FaExclamationTriangle className="symptom-icon orange" />
          <h3>{entries.pain}/10</h3>
          <p>Pain Level</p>
        </div>

        <div className="symptom-card hoverable">
          <FaHeart className="symptom-icon red" />
          <h3>{entries.erectile}/10</h3>
          <p>Erectile Function</p>
        </div>

        <div className="symptom-card hoverable">
          <FaHeartbeat className="symptom-icon blue" />
          <h3>{entries.libido}/10</h3>
          <p>Libido</p>
        </div>

        <div className="symptom-card hoverable">
          <FaClock className="symptom-icon green" />
          <h3>{entries.wellbeing}/10</h3>
          <p>Wellbeing</p>
        </div>
      </div>
    </div>
  );
}

export default Symptoms;
