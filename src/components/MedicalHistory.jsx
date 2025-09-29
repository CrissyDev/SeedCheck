import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeartbeat, FaUser, FaBriefcase } from "react-icons/fa";
import "./ProfileSetup.css"; // reuse styles

const MedicalHistory = () => {
  const navigate = useNavigate();

  const [stis, setStis] = useState([]);
  const [surgeries, setSurgeries] = useState("");
  const [hormonal, setHormonal] = useState("");

  const toggleSti = (sti) => {
    if (stis.includes(sti)) {
      setStis(stis.filter((s) => s !== sti));
    } else {
      setStis([...stis, sti]);
    }
  };

  const isFormComplete = stis.length > 0 && surgeries.trim() && hormonal.trim();

  return (
    <div className="profile-setup-container">
      <h2 className="step-title">Medical History</h2>
      <p className="step-progress">Step 2 of 4</p>

      {/* Progress bar */}
      <div className="progress-bar">
        <div className="progress-filled" style={{ width: "50%" }}></div>
      </div>

      {/* Step Navigation */}
      <div className="steps-nav">
        <span><FaUser /> Basic Info</span>
        <span className="active-step"><FaHeartbeat /> Medical History</span>
        <span><FaUser /> Reproductive History</span>
        <span><FaBriefcase /> Privacy</span>
      </div>

      {/* Form */}
      <div className="form-card">
        <h3><FaHeartbeat /> Medical Background</h3>
        <p>Help us understand your medical background.</p>

        {/* STIs */}
        <div className="form-group">
          <label>Previous STIs (check all that apply)</label>
          <div className="checkbox-group">
            {["Chlamydia", "Syphilis", "HPV", "Gonorrhea", "Herpes", "None"].map((sti) => (
              <label key={sti} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={stis.includes(sti)}
                  onChange={() => toggleSti(sti)}
                />
                {sti}
              </label>
            ))}
          </div>
        </div>

        {/* Surgeries */}
        <div className="form-group">
          <label>Previous Surgeries</label>
          <textarea
            placeholder="List any previous surgeries, especially those affecting reproductive organs"
            value={surgeries}
            onChange={(e) => setSurgeries(e.target.value)}
          />
        </div>

        {/* Hormonal Issues */}
        <div className="form-group">
          <label>Hormonal Issues</label>
          <textarea
            placeholder="Any known hormonal imbalances or treatments"
            value={hormonal}
            onChange={(e) => setHormonal(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="form-actions">
          <button 
            className="secondary-btn"
            onClick={() => navigate("/profile-setup")}
          >
            Previous
          </button>
          <button 
            className={`primary-btn ${!isFormComplete ? "disabled" : ""}`}
            disabled={!isFormComplete}
            onClick={() => navigate("/reproductive-history")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;
