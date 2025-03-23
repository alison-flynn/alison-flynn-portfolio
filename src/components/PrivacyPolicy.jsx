// src/components/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-zinc-900 leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm mb-8">Effective Date: January 1, 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p className="mb-2">
          Welcome to Alison Flynn’s Portfolio (“Site”), available at{" "}
          <a
            href="https://alisonflynn.design"
            className="text-purple-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://alisonflynn.design
          </a>
          . This Privacy Policy explains how we collect and process information using Google Analytics—the only tracking tool used on this Site. We are committed to protecting your privacy and processing your personal data in accordance with the General Data Protection Regulation (GDPR) and applicable Irish data protection laws.
        </p>
        <p>
          By accessing or using this Site, you consent to the collection and use of information as described in this Privacy Policy. If you do not agree with any part of this policy, please do not use our Site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Data Controller</h2>
        <p>
          <strong>Data Controller:</strong> Alison Flynn <br />
          <strong>Email:</strong> [your.email@example.com] <br />
          <strong>Address:</strong> [Your Address]
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Information We Collect via Google Analytics</h2>
        <p className="mb-2">
          We use Google Analytics to collect non-personal data about how visitors interact with our Site. This includes:
        </p>
        <ul className="list-disc ml-6 mb-2">
          <li>
            <strong>Usage Data:</strong> Information such as pages visited, time spent on pages, browser type, device type, anonymized IP address, and referring URLs.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> Google Analytics uses cookies to track Site usage. These cookies do not identify you personally but help us analyze traffic trends and user behavior.
          </li>
        </ul>
        <p>
          We have enabled IP anonymization in Google Analytics, meaning your IP address is masked before processing to further protect your privacy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Legal Basis for Processing</h2>
        <p className="mb-2">
          We process your non-personal data on the following bases:
        </p>
        <ul className="list-disc ml-6 mb-2">
          <li>
            <strong>Consent:</strong> By using our Site, you consent to the collection and processing of non-personal data via Google Analytics.
          </li>
          <li>
            <strong>Legitimate Interests:</strong> We use this data to improve our Site, understand visitor behavior, and enhance user experience.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. How We Use Your Information</h2>
        <ul className="list-disc ml-6 mb-2">
          <li>
            <strong>Analytics and Reporting:</strong> To monitor and analyze how visitors use our Site.
          </li>
          <li>
            <strong>Site Optimization:</strong> To identify areas where the Site can be improved.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Data Sharing and Retention</h2>
        <p className="mb-2">
          We do not sell or trade your personal data. Google, as our data processor, processes this data in accordance with its own Privacy Policy, which you can view{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-purple-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <p>
          Data is retained only as long as necessary for the purposes described in this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Your Rights</h2>
        <p className="mb-2">
          Under the GDPR, you have the following rights regarding your data:
        </p>
        <ul className="list-disc ml-6 mb-2">
          <li><strong>Right of Access:</strong> Request access to your personal data.</li>
          <li><strong>Right to Rectification:</strong> Request correction of any inaccurate data.</li>
          <li><strong>Right to Erasure:</strong> Request deletion of your personal data (subject to legal limitations).</li>
          <li><strong>Right to Restrict Processing:</strong> Request limitation of how we process your data.</li>
          <li><strong>Right to Data Portability:</strong> Request a copy of your personal data in a structured, commonly used format.</li>
          <li><strong>Right to Object:</strong> Object to processing based on our legitimate interests or for direct marketing.</li>
          <li>
            <strong>Right to Withdraw Consent:</strong> If processing is based on consent, you may withdraw it at any time using the Google Analytics opt-out browser add-on available{" "}
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
        <h2 className="text-2xl font-semibold mb-2">8. Cookies</h2>
        <p>
          Our Site uses cookies solely for analytics via Google Analytics. You can control cookies via your browser settings or opt out using the Google Analytics opt-out add-on.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">9. International Data Transfers</h2>
        <p>
          Data collected by Google Analytics may be transferred outside the European Economic Area (EEA). Google ensures appropriate safeguards are in place in accordance with the GDPR.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">10. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When changes are made, the "Effective Date" will be updated, and the new policy will be posted on this page. We encourage you to review this policy periodically.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">11. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> [your.email@example.com] <br />
          <strong>Address:</strong> [Your Address]
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
