// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrivacyConsentWidget from "./components/PrivacyConsentWidget";

// Import components
import LoadingScreen from "./components/LoadingScreen";
import ProgressBar from "./components/ProgressBar";

// Pages
import LandingPage from "./components/LandingPage";
import AirlineCaseStudy from "./components/AirlineCaseStudy";
import EngineeringCaseStudy from "./components/EngineeringCaseStudy";
import CareerCoachCaseStudy from "./components/CareerCoachCaseStudy";
import PrivacyPolicy from "./components/PrivacyPolicy";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);

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
        <ProgressBar />
        {/* Always render Privacy Consent Widget on home */}
        <PrivacyConsentWidget />
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
