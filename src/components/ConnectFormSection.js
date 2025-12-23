import React, { useEffect, useMemo, useState } from "react";
import styles from "./ConnectFormSection.module.css";
import { getDatabase, ref, push } from "firebase/database";
import { app } from "../firebase";
import logo from "./images/-opus-logo.png";

const ConnectFormSection = ({ applyFor = "", onClose }) => {
  const db = useMemo(() => getDatabase(app), []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ ok: false, message: "" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    investment: "",
    city: "",
    state: "",
  });

  // If user clicked a card (Dealership/Distributorship/Franchise), prefill the dropdown.
  useEffect(() => {
    const allowed = ["Dealership", "Distributorship", "Franchise"];
    if (allowed.includes(applyFor)) {
      setFormData((prev) => ({ ...prev, businessType: applyFor }));
    }
  }, [applyFor]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();

    if (!name || !email || !phone) return "Please fill in Name, Email, and Phone fields.";

    // Basic India mobile validation (10 digits). Adjust if you accept country codes.
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 10) return "Please enter a valid 10-digit mobile number.";

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ ok: false, message: "" });

    const error = validate();
    if (error) {
      alert(error);
      return;
    }

    try {
      setIsSubmitting(true);

      const applicationsRef = ref(db, "applications");

      const payload = {
        ...formData,
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        applyFor: applyFor || formData.businessType || "",
        timestamp: new Date().toISOString(),
        source: "connect-form",
      };

      await push(applicationsRef, payload); // push appends a new child with unique key. [web:4]

      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: allowedBusinessType(applyFor),
        investment: "",
        city: "",
        state: "",
      });

      setSubmitStatus({ ok: true, message: "Submitted successfully." });

      // For modal usage:
      // Close the dialog after submit (recommended)
      if (onClose) onClose();

      // If you still want /thankyou page instead, remove onClose above and use navigate.
      // navigate("/thankyou");
    } catch (err) {
      console.error("Error saving data:", err);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.banner}>
      <div className={styles.overlay} />

      <div className={styles.inner}>
        <div className={styles.formCard}>
          <div className={styles.leftContent}>
            <img
              src={logo}
              alt="Opus logo"
              loading="lazy"
              decoding="async"
              className={styles.logo}
            />

            <h2 className={styles.title}>Let&apos;s connect</h2>

            <p className={styles.subtitle}>
              Share a few details and our business expert will get in touch to discuss the right
              opportunity for you.
            </p>

            <ul className={styles.bullets}>
              <li>Personalized guidance for your city and market</li>
              <li>Transparent investment and support details</li>
              <li>Quick response within one working day</li>
            </ul>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formRowFull}>
              <label className={styles.label} htmlFor="name">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
                autoComplete="name"
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  autoComplete="email"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="phone">
                  Phone *
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  inputMode="numeric"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="businessType">
                  Business type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className={styles.input}
                >
                  <option value="">Select Business Type</option>
                  <option value="Dealership">Dealership</option>
                  <option value="Distributorship">Distributorship</option>
                  <option value="Franchise">Franchise</option>
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="investment">
                  Investment range
                </label>
                <select
                  id="investment"
                  name="investment"
                  value={formData.investment}
                  onChange={handleChange}
                  className={styles.input}
                >
                  <option value="">Investment &amp; financial details</option>
                  <option value="₹10-20 Lakhs">₹10-20 Lakhs</option>
                  <option value="₹20-30 Lakhs">₹20-30 Lakhs</option>
                  <option value="₹30-50 Lakhs">₹30-50 Lakhs</option>
                  <option value="Below ₹5L">Below ₹5L</option>
                  <option value="Above ₹5L">Above ₹5L</option>
                </select>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="city">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  placeholder="Your city"
                  value={formData.city}
                  onChange={handleChange}
                  className={styles.input}
                  autoComplete="address-level2"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="state">
                  State
                </label>
                <input
                  id="state"
                  type="text"
                  name="state"
                  placeholder="Your state"
                  value={formData.state}
                  onChange={handleChange}
                  className={styles.input}
                  autoComplete="address-level1"
                />
              </div>
            </div>

            <button type="submit" className={styles.button} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Apply now"}
            </button>

            {submitStatus.message ? (
              <p className={styles.statusMsg} data-ok={submitStatus.ok ? "1" : "0"}>
                {submitStatus.message}
              </p>
            ) : null}

            <p className={styles.disclaimer}>
              By submitting this form, you agree to be contacted by the Opus team for
              franchise-related communication.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

function allowedBusinessType(applyFor) {
  const allowed = ["Dealership", "Distributorship", "Franchise"];
  return allowed.includes(applyFor) ? applyFor : "";
}

export default ConnectFormSection;
