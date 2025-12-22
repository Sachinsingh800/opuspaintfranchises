import React from "react";
import styles from "./TermsAndConditions.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <section className={styles.container}>
        <h1 className={styles.title}>Terms and Conditions</h1>
        <p className={styles.effectiveDate}>Effective Date: January 1, 2023</p>

        <div className={styles.content}>
          <h2>1. Introduction</h2>
          <p>
            Welcome to  Opus! These Terms and Conditions ("Terms") govern
            your use of our website, products, and services ("Services"). By
            accessing or using our Services, you agree to be bound by these
            Terms.
          </p>

          <h2>2. Acceptance of Terms</h2>
          <p>
            By accessing our website or purchasing our products, you confirm
            that you are at least 18 years old and agree to comply with these
            Terms. If you disagree with any part of these Terms, you may not use
            our Services.
          </p>

          <h2>3. Products and Purchases</h2>
          <ul>
            <li>
              All product descriptions and prices are subject to change without
              notice
            </li>
            <li>
              We reserve the right to limit quantities and discontinue products
            </li>
            <li>Payment must be completed before order processing</li>
            <li>Custom color orders may require additional processing time</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos,
            images, and software, is the property of  Opus or its licensors
            and is protected by copyright and trademark laws. You may not use
            any content without our express written permission.
          </p>

          <h2>5. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate account information</li>
            <li>Maintain the security of your credentials</li>
            <li>Use products only for their intended purposes</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>

          <h2>6. Prohibited Activities</h2>
          <p>You may not:</p>
          <ul>
            <li>
              Reverse engineer or attempt to extract source code from our
              digital properties
            </li>
            <li>Use our website for any illegal purpose</li>
            <li>Impersonate any person or entity</li>
            <li>Upload viruses or malicious code</li>
            <li>Interfere with the security features of our Services</li>
          </ul>

          <h2>7. Limitation of Liability</h2>
          <p>
             Opus shall not be liable for any indirect, incidental,
            special, or consequential damages arising from your use of our
            products or Services. Our maximum liability for any claim related to
            our products is limited to the purchase price of the product.
          </p>

          <h2>8. Disclaimers</h2>
          <p>
            Products are provided "as is" without warranties of any kind, either
            express or implied. While we ensure color accuracy in our digital
            displays, actual paint colors may vary due to monitor settings,
            lighting conditions, and surface characteristics.
          </p>

          <h2>9. Termination</h2>
          <p>
            We may suspend or terminate your access to our Services at any time
            without notice for conduct that we believe violates these Terms or
            is harmful to other users, us, or third parties.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of India. Any disputes arising under these Terms will be
            resolved in the courts of Mumbai.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued
            use of our Services after changes constitutes acceptance of the
            modified Terms.
          </p>

          <h2>12. Contact Information</h2>
          <p>
            For questions regarding these Terms:
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

export default TermsAndConditions;
