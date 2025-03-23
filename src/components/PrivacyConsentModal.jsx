import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PrivacyConsentModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [consent, setConsent] = useState(null); // null = not answered

  // Check if consent is already stored in localStorage
  useEffect(() => {
    const storedConsent = localStorage.getItem("privacyConsent");
    if (storedConsent) {
      setConsent(storedConsent);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("privacyConsent", "accepted");
    setConsent("accepted");
    setShowModal(false);
  };

  const handleDecline = () => {
    localStorage.setItem("privacyConsent", "declined");
    setConsent("declined");
    setShowModal(false);
  };

  // If consent is already provided, don't show anything
  if (consent) return null;

  return (
    <>
      {/* Privacy Icon */}
      {!showModal && (
        <div
          className="fixed bottom-4 right-4 z-50 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <img
            src="/images/privacy-icon.svg"  // Ensure you have a suitable icon image here
            alt="Privacy"
            className="w-12 h-12"
          />
        </div>
      )}

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[rgba(217,180,255,0.8)] backdrop-blur-md rounded-2xl shadow-xl p-6 max-w-md mx-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 font-heading tracking-wide">
              Privacy Consent
            </h2>
            <p className="text-gray-800 text-base mb-6">
              Do you want to share your data to enhance your experience on our site? Your data will be used solely for analytics through Google Analytics.
            </p>
            <div className="flex flex-col md:flex-row md:justify-between gap-3">
              <button
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-gray-800 font-semibold rounded transition duration-300 flex-1"
                onClick={handleAccept}
              >
                Yes
              </button>
              <button
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded transition duration-300 flex-1"
                onClick={handleDecline}
              >
                No
              </button>
              <Link
                to="/privacy-policy"
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded transition duration-300 flex-1 text-center"
                onClick={() => setShowModal(false)}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacyConsentModal;
