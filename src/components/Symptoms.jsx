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

  const handleSave = () => {
    alert(
      `Saved Symptoms for ${selectedDate.toDateString()}`
    );
  };

  return (
    <div className="symptoms-page">
      {/* Header */}
      <header className="header">
        <div className="logo">SeedCheck</div>

        <nav className="nav-links">
          <NavLink to="/dashboard" className="nav-item">Overview</NavLink>
          <NavLink to="/lifestyle" className="nav-item">Lifestyle</NavLink>
          <NavLink to="/symptoms" className="nav-item active">Symptoms</NavLink>
          <NavLink to="/trends" className="nav-item">Trends</NavLink>
          <NavLink to="/resources" className="nav-item">Resources</NavLink>
        </nav>

        <div className="nav-icons">
          <button className="icon-btn"><FaUser /></button>
          <button className="icon-btn"><FaCog /></button>
          <button className="icon-btn"><FaSignOutAlt /></button>
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
          <button className="save-btn" onClick={handleSave}>Save Entry</button>
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

      {/* Navigation Tabs */}
      <div className="symptom-tabs">
        <button className={`tab-btn ${activeTab === "urogenital" ? "active" : ""}`} onClick={() => setActiveTab("urogenital")}>Urogenital</button>
        <button className={`tab-btn ${activeTab === "sexual" ? "active" : ""}`} onClick={() => setActiveTab("sexual")}>Sexual Health</button>
        <button className={`tab-btn ${activeTab === "general" ? "active" : ""}`} onClick={() => setActiveTab("general")}>General</button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "urogenital" && (
          <div className="form-container">
            <h3>⚠️ Urogenital Symptoms</h3>
            <p>Track pain, swelling, discharge, and urinary issues</p>

            {/* Testicular Pain */}
            <label>Testicular pain level</label>
            <input type="range" min="0" max="10" />
            <p className="range-labels"><span>No pain</span><span>Extreme pain</span></p>

            {/* Checkboxes */}
            <div>
              <label>
                <input type="checkbox" checked={testicularSwelling} onChange={() => setTesticularSwelling(!testicularSwelling)} />
                Testicular swelling present
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" checked={discharge} onChange={() => setDischarge(!discharge)} />
                Discharge present
              </label>
            </div>

            {/* Conditional discharge form */}
            {discharge && (
              <div className="discharge-section">
                <textarea placeholder="Describe type/consistency" value={dischargeType} onChange={(e) => setDischargeType(e.target.value)} />
                <textarea placeholder="Describe color" value={dischargeColor} onChange={(e) => setDischargeColor(e.target.value)} />
              </div>
            )}

            {/* Urinary Symptoms */}
            <h4>Urinary Symptoms</h4>
            <label>Frequency</label>
            <input type="range" min="0" max="10" value={urinaryFrequency} onChange={(e) => setUrinaryFrequency(e.target.value)} />
            <label>Urgency</label>
            <input type="range" min="0" max="10" value={urgency} onChange={(e) => setUrgency(e.target.value)} />

            {/* Burning + blood in urine */}
            <div>
              <label>
                <input type="checkbox" checked={burning} onChange={() => setBurning(!burning)} />
                Burning sensation
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" checked={bloodInUrine} onChange={() => setBloodInUrine(!bloodInUrine)} />
                Blood in urine
              </label>
            </div>

            {/* Scrotal Temperature */}
            <div>
              <label>
                <input type="checkbox" checked={scrotalTemp} onChange={() => setScrotalTemp(!scrotalTemp)} />
                Scrotal temperature measured
              </label>
            </div>
            {scrotalTemp && (
              <div className="scrotal-temp-section">
                <input type="range" min="30" max="40" value={tempValue} onChange={(e) => setTempValue(e.target.value)} />
                <span>{tempValue}°C</span>
                <input type="text" placeholder="How was temperature measured?" value={tempMethod} onChange={(e) => setTempMethod(e.target.value)} />
              </div>
            )}

            {/* Notes */}
            <h4>Additional Notes</h4>
            <textarea placeholder="Add any extra notes..." value={notes} onChange={(e) => setNotes(e.target.value)} />

            <button className="save-btn">Save Symptom Entry</button>
          </div>
        )}

        {activeTab === "sexual" && <p>Track Sexual Health metrics here.</p>}
        {activeTab === "general" && <p>Track General Wellbeing details here.</p>}
      </div>
    </div>
  );
}

export default Symptoms;
