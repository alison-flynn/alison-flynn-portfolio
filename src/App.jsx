import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CookieConsent from "react-cookie-consent";
import PrivacyPolicy from "./components/PrivacyPolicy";

// Import the ProgressBar and LoadingScreen components
import LoadingScreen from "./components/LoadingScreen";
import ProgressBar from "./components/ProgressBar";

// Pages
import LandingPage from "./components/LandingPage";
import AirlineCaseStudy from "./components/AirlineCaseStudy";
import EngineeringCaseStudy from "./components/EngineeringCaseStudy";
import CareerCoachCaseStudy from "./components/CareerCoachCaseStudy";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);

  // Optional: GSAP reveal animation for elements with .reveal-up
  useEffect(() => {
    if (!loading) {
      const revealEls = document.querySelectorAll(".reveal-up");
      revealEls.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      });
    }
  }, [loading]);

  return (
    <Router>
      <ReactLenis root>
        {/* Always visible progress bar */}
        <ProgressBar />

        {/* Cookie Consent Banner */}
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="portfolioCookieConsent"
          style={{
            background: "#2B373B",
            fontSize: "14px",
            fontFamily: "Inter, sans-serif",
            padding: "16px",
          }}
          buttonStyle={{
            color: "#2B373B",
            fontSize: "14px",
            borderRadius: "4px",
            background: "#f7f7f7",
            padding: "8px 16px",
          }}
          declineButtonStyle={{
            color: "#fff",
            fontSize: "14px",
            borderRadius: "4px",
            background: "#b00",
            padding: "8px 16px",
            marginLeft: "8px",
          }}
          expires={150}
        >
          We use cookies to enhance your experience. By clicking “Accept”, you consent to our use of cookies.{" "}
          <a
            href="/privacy-policy"
            style={{ color: "#f7f7f7", textDecoration: "underline" }}
          >
            Learn More
          </a>
        </CookieConsent>

        {/* Show LoadingScreen until onComplete sets loading = false */}
        {loading ? (
          <LoadingScreen onComplete={() => setLoading(false)} />
        ) : (
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/airlinecasestudy" element={<AirlineCaseStudy />} />
            <Route path="/engineeringcasestudy" element={<EngineeringCaseStudy />} />
            <Route path="/careercoachcasestudy" element={<CareerCoachCaseStudy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          </Routes>
        )}
      </ReactLenis>
    </Router>
  );
};

export default App;
