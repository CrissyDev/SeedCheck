import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Resources.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { MdChatBubbleOutline } from "react-icons/md";
import { IoBookOutline, IoNotificationsOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";

const Resources = () => {
  const [activeTab, setActiveTab] = useState("guides");

  const tabs = [
    { id: "guides", label: "Guides", icon: <IoBookOutline size={18} /> },
    { id: "faqs", label: "FAQs", icon: <FaRegQuestionCircle size={18} /> },
    { id: "notifications", label: "Notifications", icon: <IoNotificationsOutline size={18} /> },
    { id: "emergency", label: "Emergency", icon: <FaPhoneAlt size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-white text-[#003366] font-inter px-8 py-6">
      {/* Top Navbar */}
      <header className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
        <div className="flex items-center space-x-2 text-xl font-semibold">
          <span>💙</span>
          <span>SeedCheck</span>
        </div>

        {/* Navigation using NavLink */}
        <nav className="flex space-x-8 font-medium text-gray-700">
          <NavLink to="/dashboard" className="nav-item">
            Overview
          </NavLink>
          <NavLink to="/lifestyle" className="nav-item">
            Lifestyle
          </NavLink>
          <NavLink to="/symptoms" className="nav-item">
            Symptoms
          </NavLink>
          <NavLink to="/trends" className="nav-item">
            Trends
          </NavLink>
          <NavLink to="/resources" className="nav-item active">
            Resources
          </NavLink>
        </nav>

        <div className="flex space-x-4 text-gray-500">
          <i className="fa-regular fa-user"></i>
          <i className="fa-solid fa-gear"></i>
        </div>
      </header>

      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold mb-1">Resources & Support</h2>
        <p className="text-gray-500 mb-6">
          Health guides, FAQs, and notification settings
        </p>
      </div>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        {[
          {
            icon: <FaPhoneAlt className="text-red-500 text-xl" />,
            title: "Emergency Contacts",
            desc: "Quick access to help",
          },
          {
            icon: <BsDownload className="text-blue-500 text-xl" />,
            title: "Export Data",
            desc: "Download your records",
          },
          {
            icon: <MdChatBubbleOutline className="text-green-500 text-xl" />,
            title: "Contact Support",
            desc: "Get help with the app",
          },
        ].map((card, i) => (
          <div key={i} className="quick-card">
            <div className="flex items-center space-x-3">
              {card.icon}
              <div>
                <h4 className="font-semibold text-lg">{card.title}</h4>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="tabs-container overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search & Featured Guides */}
      {activeTab === "guides" && (
        <>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search health guides..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <h3 className="text-xl font-semibold mb-4">Featured Guides</h3>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="feature-card">
              <h4 className="flex justify-between items-center">
                Understanding Male Fertility
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-md">Basics</span>
              </h4>
              <p>
                Comprehensive guide to male reproductive health and fertility factors
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>⏱️ 8 min read</span>
                <button>
                  Read <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
              </div>
            </div>

            <div className="feature-card">
              <h4 className="flex justify-between items-center">
                Lifestyle Changes for Better Fertility
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-md">Lifestyle</span>
              </h4>
              <p>
                Evidence-based lifestyle modifications to improve sperm quality
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>⏱️ 12 min read</span>
                <button>
                  Read <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Resources;
