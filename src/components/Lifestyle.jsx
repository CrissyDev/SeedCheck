import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaWineGlassAlt,
  FaSmoking,
  FaUtensils,
  FaDumbbell,
  FaMoon,
} from "react-icons/fa";
import "./Lifestyle.css";

function Lifestyle() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [entries, setEntries] = useState({
    drinks: 0,
    cigarettes: 0,
    diet: 3,
    exercise: 30,
    sleep: 8,
  });

  const [activeTab, setActiveTab] = useState("alcohol");

  const handleSave = () => {
    alert(
      `Saved Entry for ${selectedDate.toDateString()}:\n🍷 Drinks: ${entries.drinks}\n🚬 Cigarettes: ${entries.cigarettes}\n🥗 Diet: ${entries.diet}/5\n🏋️ Exercise: ${entries.exercise}m\n🌙 Sleep: ${entries.sleep}h`
    );
  };

  return (
    <div className="lifestyle-page">
      {/* Header */}
      <div className="header-row">
        <div>
          <h2>Lifestyle Tracking</h2>
          <p>Log your daily habits to track their impact on your fertility health</p>
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

      {/* Cards Grid */}
      <div className="cards-grid">
        <div
          className={`lifestyle-card hoverable ${
            activeTab === "alcohol" ? "active" : ""
          }`}
          onClick={() => setActiveTab("alcohol")}
        >
          <FaWineGlassAlt className="lifestyle-icon purple" />
          <h3>{entries.drinks}</h3>
          <p>Alcohol</p>
        </div>

        <div
          className={`lifestyle-card hoverable ${
            activeTab === "smoking" ? "active" : ""
          }`}
          onClick={() => setActiveTab("smoking")}
        >
          <FaSmoking className="lifestyle-icon red" />
          <h3>{entries.cigarettes}</h3>
          <p>Smoking</p>
        </div>

        <div
          className={`lifestyle-card hoverable ${
            activeTab === "diet" ? "active" : ""
          }`}
          onClick={() => setActiveTab("diet")}
        >
          <FaUtensils className="lifestyle-icon orange" />
          <h3>{entries.diet}/5</h3>
          <p>Diet</p>
        </div>

        <div
          className={`lifestyle-card hoverable ${
            activeTab === "exercise" ? "active" : ""
          }`}
          onClick={() => setActiveTab("exercise")}
        >
          <FaDumbbell className="lifestyle-icon green" />
          <h3>{entries.exercise}m</h3>
          <p>Exercise</p>
        </div>

        <div
          className={`lifestyle-card hoverable ${
            activeTab === "sleep" ? "active" : ""
          }`}
          onClick={() => setActiveTab("sleep")}
        >
          <FaMoon className="lifestyle-icon blue" />
          <h3>{entries.sleep}h</h3>
          <p>Sleep</p>
        </div>
      </div>

      {/* Detailed Section */}
      <div className="details-section">
        {activeTab === "alcohol" && (
          <div className="detail-card">
            <h3>
              <FaWineGlassAlt className="detail-icon purple" /> Alcohol Intake
            </h3>
            <p>Track your daily alcohol consumption</p>
            <label>Number of drinks</label>
            <input
              type="range"
              min="0"
              max="10"
              value={entries.drinks}
              onChange={(e) =>
                setEntries({ ...entries, drinks: parseInt(e.target.value) })
              }
            />
            <div className="range-labels">
              <span>0 drinks</span>
              <span>10+ drinks</span>
            </div>
            <label>Type of alcohol (optional)</label>
            <textarea placeholder="e.g., Beer, Wine, Spirits..." />
          </div>
        )}

        {activeTab === "smoking" && (
          <div className="detail-card">
            <h3>
              <FaSmoking className="detail-icon red" /> Smoking
            </h3>
            <p>Track daily cigarette consumption</p>
            <label>Number of cigarettes</label>
            <input
              type="range"
              min="0"
              max="40"
              value={entries.cigarettes}
              onChange={(e) =>
                setEntries({ ...entries, cigarettes: parseInt(e.target.value) })
              }
            />
            <div className="range-labels">
              <span>0</span>
              <span>40+</span>
            </div>
          </div>
        )}

        {activeTab === "diet" && (
          <div className="detail-card">
            <h3>
              <FaUtensils className="detail-icon orange" /> Diet Quality
            </h3>
            <p>Rate your diet for today</p>
            <input
              type="range"
              min="1"
              max="5"
              value={entries.diet}
              onChange={(e) =>
                setEntries({ ...entries, diet: parseInt(e.target.value) })
              }
            />
            <div className="range-labels">
              <span>Poor</span>
              <span>Excellent</span>
            </div>
          </div>
        )}

        {activeTab === "exercise" && (
          <div className="detail-card">
            <h3>
              <FaDumbbell className="detail-icon green" /> Exercise
            </h3>
            <p>Log your daily activity</p>
            <input
              type="number"
              min="0"
              value={entries.exercise}
              onChange={(e) =>
                setEntries({ ...entries, exercise: parseInt(e.target.value) })
              }
            />
            <span>minutes</span>
          </div>
        )}

        {activeTab === "sleep" && (
          <div className="detail-card">
            <h3>
              <FaMoon className="detail-icon blue" /> Sleep
            </h3>
            <p>How many hours did you sleep last night?</p>
            <input
              type="number"
              min="0"
              max="24"
              value={entries.sleep}
              onChange={(e) =>
                setEntries({ ...entries, sleep: parseInt(e.target.value) })
              }
            />
            <span>hours</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lifestyle;
