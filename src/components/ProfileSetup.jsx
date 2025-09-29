import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaBriefcase, FaWeight, FaRulerVertical, FaHeartbeat } from "react-icons/fa"; // ✅ fixed import
import "./ProfileSetup.css";

const ProfileSetup = () => {
  const navigate = useNavigate();

  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const isFormComplete = age && occupation && weight && height;

  return (
    <div className="profile-setup-container">
      <h2 className="step-title">Profile Setup</h2>
      <p className="step-progress">Step 1 of 4</p>

      {/* Progress bar */}
      <div className="progress-bar">
        <div className="progress-filled"></div>
      </div>

      {/* Step Navigation */}
      <div className="steps-nav">
        <span className="active-step"><FaUser /> Basic Info</span>
        <span><FaHeartbeat /> Medical History</span>
        <span><FaUser /> Reproductive History</span>
        <span><FaBriefcase /> Privacy</span>
      </div>

      {/* Form */}
      <div className="form-card">
        <h3><FaUser /> Basic Information</h3>
        <p>Let's start with some basic information about you.</p>

        <div className="form-row">
          <div className="form-group">
            <label>Age</label>
            <input 
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Occupation</label>
            <input 
              type="text"
              placeholder="Your occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Weight (kg)</label>
            <input 
              type="number"
              placeholder="Your weight in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Height (cm)</label>
            <input 
              type="number"
              placeholder="Your height in cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="form-actions">
          <button 
            className="secondary-btn"
            onClick={() => navigate(-1)}
          >
            Previous
          </button>
          <button 
            className={`primary-btn ${!isFormComplete ? "disabled" : ""}`}
            disabled={!isFormComplete}
            onClick={() => navigate("/medical-history")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
