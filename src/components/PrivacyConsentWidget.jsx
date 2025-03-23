// src/components/PrivacyConsentWidget.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdSecurity } from "react-icons/md";
import { ButtonPrimary, ButtonOutline } from "./Button";

const PrivacyConsentWidget = () => {
  const [showModal, setShowModal] = useState(true); // modal opens on load
  const [consent, setConsent] = useState(null); // "accepted" or "declined"
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState("");
  const savedScrollPosition = useRef(0);
  const navigate = useNavigate();

  // Check if consent is already set
  useEffect(() => {
    const stored = localStorage.getItem("privacyConsent");
    if (stored) {
      setConsent(stored);
      setShowModal(false);
    }
  }, []);

  // Save scroll position when modal opens
  useEffect(() => {
    if (showModal) {
      savedScrollPosition.current = window.pageYOffset;
    }
  }, [showModal]);

  const handleConsent = (choice) => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("privacyConsent", choice);
      setConsent(choice);
      setLoading(false);
      setConfirmed(choice === "accepted" ? "Thank you for accepting." : "No problem.");
      setTimeout(() => {
        setShowModal(false);
        navigate("/"); // Redirect to homepage ("/")
      }, 2000);
    }, 1200);
  };

  if (consent) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {showModal && (
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 max-w-3xl w-full text-gray-800 relative">
          {/* Header: Title only (no logo) */}
          <header className="mb-4">
            <h2 className="text-2xl font-bold font-heading tracking-wide">
              Privacy Consent
            </h2>
          </header>
          {loading ? (
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border-4 border-transparent border-t-green-400 border-b-green-400 animate-spin mb-3"></div>
              <p className="text-sm">Processing your choice...</p>
            </div>
          ) : confirmed ? (
            <p className="text-lg mb-6">{confirmed}</p>
          ) : (
            <>
              <p className="text-base mb-6">
                We use cookies for analytics via Google Analytics. Do you want to share your data to enhance your experience? Your data will be used solely for analytics.{" "}
                <Link
                  to="/privacy-policy"
                  className="underline text-green-500 transition-colors duration-200 hover:text-green-400"
                  onClick={() => {
                    setShowModal(false);
                    navigate("/privacy-policy");
                  }}
                >
                  Read More
                </Link>
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <ButtonPrimary
                  label="Yes"
                  onClick={() => handleConsent("accepted")}
                  classes="relative overflow-hidden px-4 py-2 rounded w-full font-semibold text-gray-900 bg-white/10 backdrop-blur-sm ring-1 ring-green-400 transition-transform duration-300 hover:scale-105"
                />
                <ButtonOutline
                  label="No"
                  onClick={() => handleConsent("declined")}
                  classes="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded transition-colors duration-300 w-full"
                />
              </div>
            </>
          )}
          {/* Branding Logo at Bottom-Right */}
          <div className="absolute bottom-4 right-4">
            <img src="/images/icon-logo-.svg" alt="Branding Logo" className="w-8 h-8 opacity-70" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyConsentWidget;
