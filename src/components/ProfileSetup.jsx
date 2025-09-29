import React, { useState } from "react";
import { FaUser, FaBriefcase, FaHeartbeat, FaClock } from "react-icons/fa";
import "./ProfileSetup.css";

const ProfileSetup = () => {
  const [step, setStep] = useState(1);

  // Step 1 fields
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  // Step 2 fields
  const [stis, setStis] = useState([]);
  const [surgeries, setSurgeries] = useState("");
  const [hormonal, setHormonal] = useState("");

  // Step 3 fields
  const [tryingToConceive, setTryingToConceive] = useState(false);
  const [fertilityTests, setFertilityTests] = useState("");
  const [partnerPregnancies, setPartnerPregnancies] = useState("");
  const [fertilityTreatments, setFertilityTreatments] = useState("");

  // Validation per step
  const stepValidations = {
    1: age && occupation && weight && height,
    2: stis.length > 0 && surgeries.trim() && hormonal.trim(),
    3: fertilityTests.trim() && partnerPregnancies.trim() && fertilityTreatments.trim(),
    4: true, // privacy step
  };

  const toggleSti = (sti) => {
    if (stis.includes(sti)) {
      setStis(stis.filter((s) => s !== sti));
    } else {
      setStis([...stis, sti]);
    }
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="profile-setup-container">
      <h2 className="step-title">Profile Setup</h2>
      <p className="step-progress">Step {step} of 4</p>

      {/* Progress bar */}
      <div className="progress-bar">
        <div className="progress-filled" style={{ width: `${(step / 4) * 100}%` }}></div>
      </div>

      {/* Step Navigation */}
      <div className="steps-nav">
        <span className={step === 1 ? "active-step" : ""}><FaUser /> Basic Info</span>
        <span className={step === 2 ? "active-step" : ""}><FaHeartbeat /> Medical History</span>
        <span className={step === 3 ? "active-step" : ""}><FaClock /> Reproductive History</span>
        <span className={step === 4 ? "active-step" : ""}><FaBriefcase /> Privacy</span>
      </div>

      {/* Step Content */}
      <div className="form-card">
        {step === 1 && (
          <>
            <h3><FaUser /> Basic Information</h3>
            <p>Let's start with some basic information about you.</p>
            <div className="form-row">
              <div className="form-group">
                <label>Age</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Occupation</label>
                <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Weight (kg)</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Height (cm)</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3><FaHeartbeat /> Medical History</h3>
            <p>Help us understand your medical background.</p>
            <div className="form-group">
              <label>Previous STIs</label>
              <div className="checkbox-group">
                {["Chlamydia", "Syphilis", "HPV", "Gonorrhea", "Herpes", "None"].map((sti) => (
                  <label key={sti}>
                    <input type="checkbox" checked={stis.includes(sti)} onChange={() => toggleSti(sti)} />
                    {sti}
                  </label>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Previous Surgeries</label>
              <textarea value={surgeries} onChange={(e) => setSurgeries(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Hormonal Issues</label>
              <textarea value={hormonal} onChange={(e) => setHormonal(e.target.value)} />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h3><FaClock /> Reproductive History</h3>
            <p>Tell us about your reproductive health journey.</p>
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                checked={tryingToConceive}
                onChange={() => setTryingToConceive(!tryingToConceive)}
              />
              <label>Currently trying to conceive</label>
            </div>
            <div className="form-group">
              <label>Previous Fertility Tests</label>
              <textarea value={fertilityTests} onChange={(e) => setFertilityTests(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Partner Pregnancies</label>
              <textarea value={partnerPregnancies} onChange={(e) => setPartnerPregnancies(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Fertility Treatments</label>
              <textarea value={fertilityTreatments} onChange={(e) => setFertilityTreatments(e.target.value)} />
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h3><FaBriefcase /> Privacy & Consent</h3>
            <p>Review how we handle your data and give consent.</p>
            <div className="form-group">
              <label>
                <input type="checkbox" /> I consent to data collection and agree to the privacy policy.
              </label>
            </div>
          </>
        )}

        {/* Navigation Buttons */}
        <div className="form-actions">
          {step > 1 && (
            <button className="secondary-btn" onClick={prevStep}>
              ← Previous
            </button>
          )}
          {step < 4 ? (
            <button
              className={`primary-btn ${!stepValidations[step] ? "disabled" : ""}`}
              disabled={!stepValidations[step]}
              onClick={nextStep}
            >
              Next →
            </button>
          ) : (
            <button className="primary-btn">Finish</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
