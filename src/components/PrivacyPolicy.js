import React from "react";
import styles from "./PrivacyPolicy.module.css"; // CSS module import
import Navbar from "./Navbar";
import Footer from "./Footer";

function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <section className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.effectiveDate}>Effective Date: January 1, 2023</p>

        <div className={styles.content}>
          <p>
             Opus ("we," "us," or "our") respects your privacy and is
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, and disclose information
            through our website and services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, and contact details when you submit forms
            </li>
            <li>
              <strong>Usage Data:</strong> IP address, browser type, pages
              visited, and interaction data
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies to enhance your browsing
              experience (you can manage preferences in your browser settings)
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Respond to inquiries and offer customer support</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Improve our website and product offerings</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with:
          </p>
          <ul>
            <li>Service providers assisting our operations</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners during mergers/acquisitions</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement industry-standard security measures including
            encryption, access controls, and regular security assessments.
            However, no internet transmission is 100% secure.
          </p>

          <h2>5. Your Rights</h2>
          <p>You may request to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccuracies</li>
            <li>Delete your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
          <p>Contact us at privacy@-opus.com to exercise these rights.</p>

          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this policy periodically. The revised version will be
            posted on our website with an updated effective date.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            For questions about this Privacy Policy:
            <br />
             Opus Customer Support
            <br />
            Email: <a href="mailto:privacy@-opus.com">privacy@-opus.com</a>
            <br />
            WhatsApp: <a href="https://wa.me/917581905308">+91-7581905308</a>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;