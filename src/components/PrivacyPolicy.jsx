// src/components/PrivacyPolicy.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen px-6 py-16 bg-white text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-10">
          <img src="/images/icon-logo-.svg" alt="Logo" className="w-10 h-10" />
          <button
            onClick={() => navigate("/")}
            className="bg-gray-200 border border-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-300"
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-wide text-gray-800">
          Privacy Policy
        </h1>

        {/* Policy Content */}
        <div className="space-y-8 leading-relaxed text-[17px] text-gray-700">
          <p>
            This Privacy Policy outlines how we collect, process, and use your personal data in compliance with the General Data Protection Regulation (GDPR), Irish Data Protection Laws, and relevant UK data protection legislation. By accessing or using our website, you consent to the practices described herein.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">1. Google Analytics</h2>
          <p>
            We utilise Google Analytics to monitor and analyse visitor behaviour on our website. This tool collects non-personal data including pages visited, time spent on the site, browser and device types, and anonymised IP addresses. No personally identifiable information is captured.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">2. Getform Data Processing</h2>
          <p>
            We may employ Getform to process data submitted via our contact and enquiry forms. Getform acts as a data processor on our behalf and processes your data strictly in accordance with our instructions and applicable data protection laws.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">3. Cookies and Local Storage</h2>
          <p>
            Cookies and similar local storage technologies are used to enhance your browsing experience, store your preferences, and provide us with analytics information. You can control your cookie settings through our Privacy Preference Centre.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">4. Data Protection and Security</h2>
          <p>
            We take the security of your personal data seriously. Your information is stored on secure servers with restricted access and is protected by industry-standard encryption and security protocols. We regularly review our security practices to ensure your data is safeguarded.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">5. Your Rights</h2>
          <p>
            Under GDPR, as well as Irish and UK data protection laws, you have several rights, including:
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Access:</strong> Request access to the personal data we hold about you.
            </li>
            <li>
              <strong>Rectification:</strong> Request correction of any inaccurate or incomplete data.
            </li>
            <li>
              <strong>Erasure:</strong> Request deletion of your personal data, subject to legal constraints.
            </li>
            <li>
              <strong>Restriction:</strong> Request that we limit the processing of your data.
            </li>
            <li>
              <strong>Data Portability:</strong> Request a copy of your data in a structured format.
            </li>
            <li>
              <strong>Objection:</strong> Object to the processing of your data, particularly for direct marketing purposes.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">6. Third-Party Data Transfers</h2>
          <p>
            In instances where we share data with third-party services (such as Google Analytics or Getform), we ensure that adequate safeguards are in place. Should your data be transferred outside the European Economic Area (EEA), such transfers will be subject to appropriate legal mechanisms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">7. Record Keeping</h2>
          <p>
            We maintain records of all data processing activities and your consent preferences. These records are securely stored and can be made available upon request.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page along with an updated "Last Updated" date. We encourage you to review this policy periodically.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">9. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at:{" "}
            <span className="underline">alisonflynn.design@gmail.com</span> or via our support channels.
          </p>

          <p className="text-sm text-gray-500">
            Last updated: March 2025 • This policy is compliant with GDPR, Irish Data Protection Laws, and applicable UK data protection standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
