import React from "react";
import { FaHeartbeat } from "react-icons/fa"; 
import { FiActivity } from "react-icons/fi"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import { MdInsights } from "react-icons/md"; 

const WelcomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-green-50 px-6 py-12">
      {/* Icon */}
      <div className="bg-green-100 rounded-full p-4 mb-6">
        <FaHeartbeat className="text-green-700 text-3xl" />
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-3">
        Welcome to <span className="text-green-700">SeedCheck</span>
      </h1>
      <p className="text-gray-600 max-w-lg text-center mb-6">
        Take control of your fertility health with personalized tracking,
        insights, and recommendations designed specifically for men.
      </p>

      {/* Buttons */}
      <div className="flex gap-3 mb-10">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm shadow hover:bg-gray-700">
          Privacy First
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm shadow hover:bg-gray-700 flex items-center gap-1">
          <FiActivity /> Daily Tracking
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm shadow hover:bg-gray-700 flex items-center gap-1">
          <MdInsights /> Health Insights
        </button>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {/* Lifestyle Tracking */}
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md bg-white">
          <div className="flex items-center gap-2 mb-3">
            <FiActivity className="text-green-700 text-xl" />
            <h3 className="font-semibold text-gray-800">Lifestyle Tracking</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Monitor alcohol intake, smoking, diet quality, exercise, and sleep
            patterns with simple daily logging.
          </p>
        </div>

        {/* Symptom Monitoring */}
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md bg-white">
          <div className="flex items-center gap-2 mb-3">
            <AiOutlineHeart className="text-green-700 text-xl" />
            <h3 className="font-semibold text-gray-800">Symptom Monitoring</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Track urogenital symptoms and sexual health metrics to identify
            patterns and potential concerns.
          </p>
        </div>

        {/* Health Insights */}
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md bg-white">
          <div className="flex items-center gap-2 mb-3">
            <MdInsights className="text-green-700 text-xl" />
            <h3 className="font-semibold text-gray-800">Health Insights</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Visualize trends and correlations between your lifestyle choices and
            fertility health over time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
