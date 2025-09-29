import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaClock } from "react-icons/fa"; 
import "./ReproductiveHistory.css";

const ReproductiveHistory = () => {
  const navigate = useNavigate();

  const [tryingToConceive, setTryingToConceive] = useState(false);
  const [fertilityTests, setFertilityTests] = useState("");
  const [partnerPregnancies, setPartnerPregnancies] = useState("");
  const [fertilityTreatments, setFertilityTreatments] = useState("");

  // ✅ Form is valid only if all fields are filled
  const isFormComplete =
    fertilityTests.trim() && partnerPregnancies.trim() && fertilityTreatments.trim();

  return (
    <div className="reproductive-history-container">
      <h2 className="step-title">
        <FaClock className="icon" /> Reproductive History
      </h2>
      <p className="step-subtitle">
        Tell us about your reproductive health journey.
      </p>

      <div className="form-card">
        {/* Trying to Conceive */}
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="conceive"
            checked={tryingToConceive}
            onChange={() => setTryingToConceive(!tryingToConceive)}
          />
          <label htmlFor="conceive">Currently trying to conceive</label>
        </div>

        {/* Previous Fertility Tests */}
        <div className="form-group">
          <label>Previous Fertility Tests</label>
          <textarea
            placeholder="Describe any previous semen analyses or fertility tests"
            value={fertilityTests}
            onChange={(e) => setFertilityTests(e.target.value)}
          ></textarea>
        </div>

        {/* Partner Pregnancies */}
        <div className="form-group">
          <label>Partner Pregnancies</label>
          <textarea
            placeholder="History of partner pregnancies (successful or unsuccessful)"
            value={partnerPregnancies}
            onChange={(e) => setPartnerPregnancies(e.target.value)}
          ></textarea>
        </div>

        {/* Fertility Treatments */}
        <div className="form-group">
          <label>Fertility Treatments</label>
          <textarea
            placeholder="Any fertility treatments you or your partner have undergone"
            value={fertilityTreatments}
            onChange={(e) => setFertilityTreatments(e.target.value)}
          ></textarea>
        </div>

        {/* Navigation Buttons */}
        <div className="form-actions">
          <button
            className="secondary-btn"
            onClick={() => navigate("/medical-history")}
          >
            ← Previous
          </button>
          <button
            className={`primary-btn ${!isFormComplete ? "disabled" : ""}`}
            disabled={!isFormComplete}
            onClick={() => navigate("/privacy")}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReproductiveHistory;
