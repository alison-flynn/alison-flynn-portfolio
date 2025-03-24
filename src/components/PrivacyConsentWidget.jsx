// src/components/PrivacyConsentWidget.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonPrimary, ButtonOutline } from "./Button";

const PrivacyConsentWidget = () => {
  const [showModal, setShowModal] = useState(true); // Modal opens on load
  const [consent, setConsent] = useState(null); // "accepted" or "declined"
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState("");
  const savedScrollPosition = useRef(0);
  const navigate = useNavigate();

  // Check for stored consent and force flag on mount
  useEffect(() => {
    const stored = localStorage.getItem("privacyConsent");
    const forceShow = localStorage.getItem("forceConsentModal");
    if (stored && !forceShow) {
      setConsent(stored);
      setShowModal(false);
    } else {
      setShowModal(true);
      localStorage.removeItem("forceConsentModal");
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
      setConfirmed(
        choice === "accepted"
          ? "Thank you for accepting all cookies."
          : "You have chosen to reject non‑essential cookies."
      );
      setTimeout(() => {
        setShowModal(false);
        navigate("/"); // Return to homepage
        window.scrollTo(0, savedScrollPosition.current);
      }, 2000);
    }, 1200);
  };

  if (consent && !localStorage.getItem("forceConsentModal")) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {showModal && (
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-3xl w-full text-gray-800 relative">
          {/* Header: Title */}
          <header className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold font-heading tracking-wide">
              Privacy Consent
            </h2>
          </header>
          {loading ? (
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border-4 border-transparent border-t-green-400 border-b-green-400 animate-spin mb-4"></div>
              <p className="text-sm">Processing your choice...</p>
            </div>
          ) : confirmed ? (
            <p className="text-lg mb-6">{confirmed}</p>
          ) : (
            <>
              <p className="text-base mb-6">
                We use cookies to enhance your browsing experience, provide personalised content, and analyse our traffic. Strictly necessary cookies are always enabled. By clicking{" "}
                <strong>"Accept All Cookies"</strong> you consent to our use of non‑essential cookies (including analytics and advertising cookies). If you choose{" "}
                <strong>"Reject Non‑Essential Cookies"</strong>, only essential cookies will be used. For more details, please read our{" "}
                <Link
                  to="/privacy-policy"
                  className="underline text-green-500 transition-colors duration-200 hover:text-green-400"
                  onClick={() => {
                    setShowModal(false);
                    navigate("/privacy-policy");
                  }}
                >
                  Privacy Policy
                </Link>.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <ButtonPrimary
                  label="Accept All Cookies"
                  onClick={() => handleConsent("accepted")}
                  classes="px-4 py-2 rounded w-full font-semibold text-white bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300"
                />
                <ButtonOutline
                  label="Reject Non‑Essential Cookies"
                  onClick={() => handleConsent("declined")}
                  classes="px-4 py-2 rounded w-full font-semibold text-white border border-gray-700 bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
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
