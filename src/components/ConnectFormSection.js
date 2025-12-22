import React, { useState } from "react";
import styles from "./ConnectFormSection.module.css";
import { getDatabase, ref, push } from "firebase/database";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import logo from "./images/-opus-logo.png";

const ConnectFormSection = () => {
  const db = getDatabase(app);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    investment: "",
    city: "",
    state: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in Name, Email, and Phone fields");
      return;
    }

    try {
      setIsSubmitting(true);
      const applicationsRef = ref(db, "applications");

      const formDataWithTimestamp = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: "connect-form",
      };

      await push(applicationsRef, formDataWithTimestamp);

      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        investment: "",
        city: "",
        state: "",
      });

      navigate("/thankyou");
    } catch (error) {
      console.error("Error saving data:", error);
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
              Share a few details and our business expert will get in touch to discuss
              the right opportunity for you.
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

            <button
              type="submit"
              className={styles.button}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Apply now"}
            </button>

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

export default ConnectFormSection;
