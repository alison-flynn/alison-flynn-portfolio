// Example of a minimal banner approach
import React from "react";
import { Link } from "react-router-dom";

const PrivacyBanner = ({ onAccept, onCustomize }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 text-gray-800 p-4 shadow-lg flex flex-col md:flex-row items-center justify-between z-50">
      <p className="text-sm">
        We use cookies to enhance your browsing experience and analyze traffic.{" "}
        <Link to="/privacy-policy" className="underline text-purple-600 hover:text-purple-500">
          Privacy Policy
        </Link>
      </p>
      <div className="mt-2 md:mt-0 flex gap-2">
        <button
          onClick={onCustomize}
          className="px-4 py-2 border border-gray-400 text-gray-800 rounded hover:bg-gray-100 transition"
        >
          Customize
        </button>
        <button
          onClick={onAccept}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Accept All
        </button>
      </div>
    </div>
  );
};

export default PrivacyBanner;
