// src/components/PrivacyPolicy.jsx
import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="case-study-section max-w-4xl mx-auto px-6 py-10 text-white leading-relaxed">
      {/* Header with Logo and Title */}
      <header className="flex items-center mb-8">
        <img
          src="/images/icon-logo-.svg"
          alt="Logo"
          className="w-12 h-12 mr-4"
        />
        <h1 className="headline-2 font-bold text-3xl md:text-4xl tracking-wide">
          Privacy Policy
        </h1>
      </header>
      <p className="text-base mb-8">Effective Date: January 1, 2025</p>

      <section className="mb-8">
        <h2 className="headline-2 font-semibold text-2xl mb-2">
          1. Introduction
        </h2>
        <p className="text-base mb-2">
          Welcome to Alison Flynn’s Portfolio (“Site”), available at{" "}
          <a
            href="https://alisonflynn.design"
            className="text-purple-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://alisonflynn.design
          </a>
          . This Privacy Policy explains how we collect and process data using
          Google Analytics – the only tracking tool used on this Site. We are
          committed to protecting your privacy in accordance with the General
          Data Protection Regulation (GDPR) and applicable Irish data protection
          laws.
        </p>
        <p className="text-base">
          By accessing or using this Site, you consent to the practices described
          in this Privacy Policy. If you disagree with any part of this policy,
          please do not use our Site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="headline-2 font-semibold text-2xl mb-2">
          2. Data Controller
        </h2>
        <p className="text-base">
          <strong>Data Controller:</strong> Alison Flynn <br />
          <strong>Email:</strong> your.email@example.com <br />
          <strong>Address:</strong> Your Address
        </p>
      </section>

      <section className="mb-8">
        <h2 className="headline-2 font-semibold text-2xl mb-2">
          3. Information We Collect via Google Analytics
        </h2>
        <p className="text-base mb-2">
          We use Google Analytics to collect non-personal data about how visitors
          interact with our Site. This includes:
        </p>
        <ul className="list-disc ml-6 mb-2 text-base">
          <li>
            <strong>Usage Data:</strong> Pages visited, time spent on pages,
            browser type, device type, anonymized IP address, and referring URLs.
          </li>
          <li>
            <strong>Cookies:</strong> Google Analytics uses cookies to track site
            usage. These cookies do not personally identify you but help us
            analyze traffic trends and user behavior.
          </li>
        </ul>
        <p className="text-base">
          We have enabled IP anonymization in Google Analytics, ensuring that your
          IP address is masked before processing, further protecting your
          privacy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="headline-2 font-semibold text-2xl mb-2">
          4. Legal Basis for Processing
        </h2>
        <p className="text-base mb-2">
          We process your non-personal data on the following bases:
        </p>
        <ul className="list-disc ml-6 mb-2 text-base">
          <li>
            <strong>Consent:</strong> By using our Site, you consent to the
            collection and processing of data via Google Analytics.
          </li>
          <li>
            <strong>Legitimate Interests:</strong> To improve our Site, understand
            visitor behavior, and enhance user experience.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="headline-2 font-semibold text-2xl mb-2">
          5. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 mb-2 text-base">
          <li>
            <strong>Analytics & Reporting:</strong> To monitor site usage, measure
            traffic, and understand visitor behavior.
          </li>
          <li>
            <strong>Site Optimization:</strong> To identify areas for improvement
            and enhance the overall user experience.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="headline-2 font-semibold text-2xl mb-2">
          6. Data Sharing and Retention
        </h2>
        <p className="text-base mb-2">
          We do not sell or trade your personal data. Google, as our data processor,
          processes the collected data in accordance with its own Privacy Policy,
          which can be viewed{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-purple-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>.
        </p>
        <p className="text-base">
          Data is retained in aggregated, anonymized form for analysis and only for
          as long as necessary to fulfill the purposes outlined in this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="headline-2 font-semibold text-2xl mb-2">
          7. Your Rights
        </h2>
        <p className="text-base mb-2">
          Under the GDPR, you have the following rights regarding your data:
        </p>
        <ul className="list-disc ml-6 mb-2 text-base">
          <li>
            <strong>Right of Access:</strong> Request access to your personal data.
          </li>
          <li>
            <strong>Right to Rectification:</strong> Request correction of any
            inaccurate data.
          </li>
          <li>
            <strong>Right to Erasure:</strong> Request deletion of your personal
            data, subject to legal restrictions.
          </li>
          <li>
            <strong>Right to Restrict Processing:</strong> Request limitation of
            how we process your data.
          </li>
          <li>
            <strong>Right to Data Portability:</strong> Request your data in a
            structured, commonly used format.
          </li>
          <li>
            <strong>Right to Object:</strong> Object to processing based on our
            legitimate interests or for direct marketing.
          </li>
          <li>
            <strong>Right to Withdraw Consent:</strong> If processing is based on
            consent, you may withdraw it at any time using the Google Analytics
            opt-out browser add-on available{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              className="text-purple-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="headline-2 font-semibold text-2xl mb-2">8. Cookies</h2>
        <p className="text-base">
          Our Site uses cookies solely for analytics via Google Analytics. You can
          manage your cookie settings through your browser or opt out using the
          Google Analytics opt-out add-on.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="headline-2 font-semibold text-2xl mb-2">
          9. International Data Transfers
        </h2>
        <p className="text-base">
          Data collected via Google Analytics may be transferred and processed in
          countries outside the European Economic Area (EEA). Google ensures that
          adequate safeguards are in place in accordance with the GDPR.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="headline-2 font-semibold text-2xl mb-2">
          10. Changes to This Privacy Policy
        </h2>
        <p className="text-base">
          We may update this Privacy Policy from time to time. When changes occur,
          the "Effective Date" will be updated, and the revised policy will be
          posted on this page. We encourage you to review this policy periodically.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="headline-2 font-semibold text-2xl mb-2">11. Contact Us</h2>
        <p className="text-base">
          If you have any questions or concerns about this Privacy Policy or our data
          practices, please contact us at:
        </p>
        <p className="text-base">
          <strong>Email:</strong> your.email@example.com <br />
          <strong>Address:</strong> Your Address
        </p>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/"
          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded transition duration-300"
        >
          Back to Dashboard
        </Link>
        <img
          src="/images/icon-logo-.svg"
          alt="Logo"
          className="w-12 h-12"
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
