// src/components/PrivacyPolicy.jsx
import React, { useLayoutEffect, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const backButtonRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Use useLayoutEffect to ensure refs are available before animation
  useLayoutEffect(() => {
    if (backButtonRef.current) {
      gsap.fromTo(
        backButtonRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
      );
    }
    if (toggleButtonRef.current) {
      gsap.fromTo(
        toggleButtonRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    }
  }, []);

  // Handle Back button: animate then navigate to "/"
  const handleBackClick = () => {
    if (backButtonRef.current) {
      gsap.to(backButtonRef.current, {
        scale: 0.95,
        duration: 0.2,
        onComplete: () => {
          console.log("Back button clicked, navigating home");
          navigate("/");
        },
      });
    } else {
      navigate("/");
    }
  };

  // Handle Toggle button: animate, remove consent, then navigate to "/" so the consent modal appears again
  const handleToggleConsent = () => {
    if (toggleButtonRef.current) {
      gsap.to(toggleButtonRef.current, {
        scale: 0.95,
        duration: 0.2,
        onComplete: () => {
          console.log("Toggle button clicked, removing consent and navigating home");
          localStorage.removeItem("privacyConsent");
          navigate("/");
        },
      });
    } else {
      localStorage.removeItem("privacyConsent");
      navigate("/");
    }
  };

  return (
    <section className="min-h-screen px-6 py-16 bg-white text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header with Back and Toggle Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <img src="/images/icon-logo-.svg" alt="Logo" className="w-10 h-10" />
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              ref={backButtonRef}
              onClick={handleBackClick}
              className="px-5 py-2 text-sm rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-all duration-300"
            >
              ← Back to Dashboard
            </button>
            <button
              ref={toggleButtonRef}
              onClick={handleToggleConsent}
              className="px-5 py-2 text-sm rounded-lg border border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100 transition-all duration-300"
            >
              Change Privacy Settings
            </button>
          </div>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-zinc-900 mb-10 leading-tight">
          Privacy Policy
        </h1>

        {/* Policy Content */}
        <div className="space-y-10 text-[17px] text-zinc-700 leading-relaxed">
          <p>
            This Privacy Policy outlines how we collect, process, and use your personal data in compliance with the General Data Protection Regulation (GDPR), Irish Data Protection Laws, and applicable UK data protection legislation. By accessing or using our website, you consent to the practices described herein.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-900">1. Google Analytics</h2>
          <p>
            We utilise Google Analytics to monitor and analyse visitor behaviour on our website. This tool collects non-personal data—including pages visited, time spent on the site, browser and device types, and anonymised IP addresses. No personally identifiable information is captured.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-900">2. Getform Data Processing</h2>
          <p>
            We may employ Getform to process data submitted via our contact and enquiry forms. Getform acts as a data processor on our behalf and processes your data strictly in accordance with our instructions and applicable data protection laws.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-900">3. Cookies and Local Storage</h2>
          <p>
            Cookies and similar local storage technologies are used to enhance your browsing experience, store your preferences, and provide us with analytics information. You can control your cookie settings through our Privacy Preference Centre.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-900">4. Data Protection and Security</h2>
          <p>
            We take the security of your personal data seriously. Your information is stored on secure servers with restricted access and protected by industry-standard encryption and security protocols. We regularly review our security practices to ensure your data is safeguarded.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-900">5. Your Rights</h2>
          <p>
            Under GDPR and Irish/UK data protection laws, you have several rights, including:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>Access:</strong> Request a copy of the personal data we hold about you.
            </li>
            <li>
              <strong>Rectification:</strong> Request correction of inaccurate or incomplete data.
            </li>
            <li>
              <strong>Erasure:</strong> Request deletion of your personal data (where legally applicable).
            </li>
            <li>
              <strong>Restriction:</strong> Ask us to limit processing of your data.
            </li>
            <li>
              <strong>Data Portability:</strong> Request data transfer to another controller.
            </li>
            <li>
              <strong>Objection:</strong> Object to processing based on legitimate interests or for direct marketing.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-zinc-900">6. Third-Party Data Transfers</h2>
          <p>
            When sharing data with third-party services such as Google Analytics or Getform, we ensure that adequate safeguards are in place. If your data is transferred outside the European Economic Area (EEA), such transfers will use legally approved mechanisms.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-900">7. Record Keeping</h2>
          <p>
            We maintain records of all data collection and processing activities as well as your consent preferences. You may request details of your stored data at any time.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-900">8. Changes to This Policy</h2>
          <p>
            This policy may be updated periodically. Any changes will be posted on this page along with an updated "Last Updated" date. We encourage you to review this policy periodically.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-900">9. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at:{" "}
            <span className="underline">alisonflynn.design@gmail.com</span>.
          </p>

          <p className="text-sm text-gray-500 mt-4">
            Last updated: March 2025 • This policy is compliant with GDPR, Irish Data Protection Laws, and applicable UK data protection standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
