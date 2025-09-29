import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdInsights } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GiLightBulb } from "react-icons/gi";
import "./WelcomePage.css"; 
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      {/* Icon */}
      <div className="icon-wrapper">
        <FaHeartbeat className="main-icon" />
      </div>

      {/* Heading */}
      <h1 className="main-heading">
        Welcome to <span className="highlight">SeedCheck</span>
      </h1>
      <p className="sub-heading">
        Take control of your fertility health with personalized tracking,
        insights, and recommendations designed specifically for men.
      </p>

      {/* Buttons */}
      <div className="button-group">
        <button className="primary-btn">Privacy First</button>
        <button className="primary-btn">
          <FiActivity /> Daily Tracking
        </button>
        <button className="primary-btn">
          <MdInsights /> Health Insights
        </button>
      </div>

      {/* Feature Cards */}
      <div className="cards-container">
        <div className="feature-card">
          <div className="card-header">
            <FiActivity className="card-icon" />
            <h3>Lifestyle Tracking</h3>
          </div>
          <p>
            Monitor alcohol intake, smoking, diet quality, exercise, and sleep
            patterns with simple daily logging.
          </p>
        </div>

        <div className="feature-card">
          <div className="card-header">
            <AiOutlineHeart className="card-icon" />
            <h3>Symptom Monitoring</h3>
          </div>
          <p>
            Track urogenital symptoms and sexual health metrics to identify
            patterns and potential concerns.
          </p>
        </div>

        <div className="feature-card">
          <div className="card-header">
            <MdInsights className="card-icon" />
            <h3>Health Insights</h3>
          </div>
          <p>
            Visualize trends and correlations between your lifestyle choices and
            fertility health over time.
          </p>
        </div>

        {/* ✅ Additional Card 1 */}
        <div className="feature-card">
          <div className="card-header">
            <GiLightBulb className="card-icon" />
            <h3>Smart Recommendations</h3>
          </div>
          <p>
            Receive AI-driven tips tailored to your health data to help improve 
            fertility and overall well-being.
          </p>
        </div>

        {/* ✅ Additional Card 2 */}
        <div className="feature-card">
          <div className="card-header">
            <FaUsers className="card-icon" />
            <h3>Community Support</h3>
          </div>
          <p>
            Connect with others, share experiences, and learn from a supportive 
            fertility health community.
          </p>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <h2>Ready to start your fertility journey?</h2>
        <p>
          Set up your profile in just a few minutes and begin tracking your health today.
        </p>
        <button 
          className="get-started-btn"
          onClick={() => navigate("/profile-setup")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
