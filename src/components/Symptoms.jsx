// src/components/Symptoms.jsx
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

  const [activeTab, setActiveTab] = useState("urogenital");

  // Urogenital states
  const [testicularPain, setTesticularPain] = useState(0);
  const [testicularSwelling, setTesticularSwelling] = useState(false);
  const [discharge, setDischarge] = useState(false);
  const [dischargeType, setDischargeType] = useState("");
  const [dischargeColor, setDischargeColor] = useState("");
  const [urinaryFrequency, setUrinaryFrequency] = useState(0);
  const [urgency, setUrgency] = useState(0);
  const [burning, setBurning] = useState(false);
  const [bloodInUrine, setBloodInUrine] = useState(false);
  const [scrotalTemp, setScrotalTemp] = useState(false);
  const [tempValue, setTempValue] = useState(36);
  const [tempMethod, setTempMethod] = useState("");
  const [notes, setNotes] = useState("");

  // Sexual Health states
  const [erectileFunction, setErectileFunction] = useState(5);
  const [libidoLevel, setLibidoLevel] = useState(5);
  const [satisfaction, setSatisfaction] = useState(5);
  const [ejaculationIssues, setEjaculationIssues] = useState(false);
  const [ejaculationNotes, setEjaculationNotes] = useState("");
  const [sexualPain, setSexualPain] = useState(0);
  const [contraceptionUsed, setContraceptionUsed] = useState(false);
  const [sexualNotes, setSexualNotes] = useState("");

  // General Wellbeing states 
  const [fatigue, setFatigue] = useState(0);
  const [stress, setStress] = useState(0);
  const [mood, setMood] = useState(5);
  const [overallWellbeing, setOverallWellbeing] = useState(5);
  const [generalNotes, setGeneralNotes] = useState("");

  const handleSave = () => {
    alert(`✅ Symptoms saved for ${selectedDate.toDateString()}`);
  };

  return (
    <div className="symptoms-page">
      {/* Top Navbar */}
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

      {/* Title + Date Row */}
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

      {/* Quick Metrics Cards */}
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

      {/* Navigation Tabs */}
      <div className="symptom-tabs">
        <button
          className={`tab-btn ${activeTab === "urogenital" ? "active" : ""}`}
          onClick={() => setActiveTab("urogenital")}
        >
          Urogenital
        </button>
        <button
          className={`tab-btn ${activeTab === "sexual" ? "active" : ""}`}
          onClick={() => setActiveTab("sexual")}
        >
          Sexual Health
        </button>
        <button
          className={`tab-btn ${activeTab === "general" ? "active" : ""}`}
          onClick={() => setActiveTab("general")}
        >
          General
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "urogenital" && (
          <div className="form-container">
            <h3>⚠️ Urogenital Symptoms</h3>
            <p>Track pain, swelling, discharge, and urinary issues</p>

            {/* Testicular Pain */}
            <label>Testicular pain level</label>
            <input
              type="range"
              min="0"
              max="10"
              value={testicularPain}
              onChange={(e) => setTesticularPain(e.target.value)}
            />
            <p className="range-labels">
              <span>No pain</span>
              <span>Extreme pain</span>
            </p>

            {/* Swelling + Discharge */}
            <label>
              <input
                type="checkbox"
                checked={testicularSwelling}
                onChange={() => setTesticularSwelling(!testicularSwelling)}
              />
              Testicular swelling present
            </label>
            <label>
              <input
                type="checkbox"
                checked={discharge}
                onChange={() => setDischarge(!discharge)}
              />
              Discharge present
            </label>

            {discharge && (
              <div className="discharge-section">
                <textarea
                  placeholder="Describe type/consistency"
                  value={dischargeType}
                  onChange={(e) => setDischargeType(e.target.value)}
                />
                <textarea
                  placeholder="Describe color"
                  value={dischargeColor}
                  onChange={(e) => setDischargeColor(e.target.value)}
                />
              </div>
            )}

            {/* Urinary Symptoms */}
            <h4>Urinary Symptoms</h4>
            <label>Frequency</label>
            <input
              type="range"
              min="0"
              max="10"
              value={urinaryFrequency}
              onChange={(e) => setUrinaryFrequency(e.target.value)}
            />
            <label>Urgency</label>
            <input
              type="range"
              min="0"
              max="10"
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
            />

            {/* Burning + blood in urine */}
            <label>
              <input
                type="checkbox"
                checked={burning}
                onChange={() => setBurning(!burning)}
              />
              Burning sensation
            </label>
            <label>
              <input
                type="checkbox"
                checked={bloodInUrine}
                onChange={() => setBloodInUrine(!bloodInUrine)}
              />
              Blood in urine
            </label>

            {/* Scrotal Temperature */}
            <label>
              <input
                type="checkbox"
                checked={scrotalTemp}
                onChange={() => setScrotalTemp(!scrotalTemp)}
              />
              Scrotal temperature measured
            </label>
            {scrotalTemp && (
              <div className="scrotal-temp-section">
                <input
                  type="range"
                  min="30"
                  max="40"
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                />
                <span>{tempValue}°C</span>
                <input
                  type="text"
                  placeholder="How was temperature measured?"
                  value={tempMethod}
                  onChange={(e) => setTempMethod(e.target.value)}
                />
              </div>
            )}

            {/* Notes */}
            <h4>Additional Notes</h4>
            <textarea
              placeholder="Add any extra notes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <button className="save-btn" onClick={handleSave}>
              Save Symptom Entry
            </button>
          </div>
        )}

        {activeTab === "sexual" && (
          <div className="form-container">
            <h3>❤️ Sexual Health</h3>
            <p>Track sexual performance, satisfaction, and related issues</p>

            {/* Erectile Function */}
            <label>Erectile Function</label>
            <input
              type="range"
              min="0"
              max="10"
              value={erectileFunction}
              onChange={(e) => setErectileFunction(e.target.value)}
            />
            <p className="range-labels">
              <span>Poor</span>
              <span>Excellent</span>
            </p>

            {/* Libido */}
            <label>Libido Level</label>
            <input
              type="range"
              min="0"
              max="10"
              value={libidoLevel}
              onChange={(e) => setLibidoLevel(e.target.value)}
            />
            <p className="range-labels">
              <span>Low</span>
              <span>High</span>
            </p>

            {/* Sexual Satisfaction */}
            <label>Satisfaction with sexual activity</label>
            <input
              type="range"
              min="0"
              max="10"
              value={satisfaction}
              onChange={(e) => setSatisfaction(e.target.value)}
            />
            <p className="range-labels">
              <span>Unsatisfied</span>
              <span>Very satisfied</span>
            </p>

            {/* Ejaculation Issues */}
            <label>
              <input
                type="checkbox"
                checked={ejaculationIssues}
                onChange={() => setEjaculationIssues(!ejaculationIssues)}
              />
              Ejaculation issues present
            </label>
            {ejaculationIssues && (
              <textarea
                placeholder="Describe the issue..."
                value={ejaculationNotes}
                onChange={(e) => setEjaculationNotes(e.target.value)}
              />
            )}

            {/* Pain during sex */}
            <label>Pain or discomfort during sexual activity</label>
            <input
              type="range"
              min="0"
              max="10"
              value={sexualPain}
              onChange={(e) => setSexualPain(e.target.value)}
            />
            <p className="range-labels">
              <span>No pain</span>
              <span>Extreme pain</span>
            </p>

            {/* Contraception */}
            <label>
              <input
                type="checkbox"
                checked={contraceptionUsed}
                onChange={() => setContraceptionUsed(!contraceptionUsed)}
              />
              Contraception used
            </label>

            {/* Notes */}
            <h4>Additional Notes</h4>
            <textarea
              placeholder="Add any extra notes about sexual health..."
              value={sexualNotes}
              onChange={(e) => setSexualNotes(e.target.value)}
            />

            <button className="save-btn" onClick={handleSave}>
              Save Sexual Health Entry
            </button>
          </div>
        )}

        {activeTab === "general" && (
          <div className="form-container general-tab">
            <h3>🌿 General Wellbeing</h3>
            <p>Track overall health, mood, and energy levels</p>

            {/* Fatigue */}
            <div className="range-group">
              <label>Fatigue level</label>
              <input
                type="range"
                min="0"
                max="10"
                value={fatigue}
                onChange={(e) => setFatigue(e.target.value)}
              />
              <p className="range-labels">
                <span>Very energetic</span>
                <span>Extremely tired</span>
              </p>
            </div>

            {/* Stress */}
            <div className="range-group">
              <label>Stress level</label>
              <input
                type="range"
                min="0"
                max="10"
                value={stress}
                onChange={(e) => setStress(e.target.value)}
              />
              <p className="range-labels">
                <span>Very relaxed</span>
                <span>Extremely stressed</span>
              </p>
            </div>

            {/* Mood */}
            <div className="range-group">
              <label>Mood</label>
              <input
                type="range"
                min="0"
                max="10"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
              />
              <p className="range-labels">
                <span>Very low</span>
                <span>Excellent</span>
              </p>
            </div>

            {/* Overall Wellbeing */}
            <div className="range-group">
              <label>Overall wellbeing</label>
              <input
                type="range"
                min="0"
                max="10"
                value={overallWellbeing}
                onChange={(e) => setOverallWellbeing(e.target.value)}
              />
              <p className="range-labels">
                <span>Very poor</span>
                <span>Excellent</span>
              </p>
            </div>

            {/* Notes */}
            <h4>Additional Notes</h4>
            <textarea
              placeholder="Describe any symptoms, patterns, or concerns you’ve noticed..."
              value={generalNotes}
              onChange={(e) => setGeneralNotes(e.target.value)}
            />

            <button className="save-btn" onClick={handleSave}>
              Save Wellbeing Entry
            </button>
          </div>
        )}
    
      </div>
    </div>
  );
}

export default Symptoms;
