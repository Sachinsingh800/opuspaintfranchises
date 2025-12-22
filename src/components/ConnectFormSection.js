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
              alt=" Opus logo"
              loading="lazy"
              decoding="async"
              className={styles.logo}
            />
            <h2 className={styles.title}>Let&apos;s connect</h2>
            <p className={styles.subtitle}>
              Share a few details and our business expert will get in touch to
              discuss the right opportunity for you.
            </p>

            <ul className={styles.bullets}>
              <li>Personalized guidance for your city and market</li>
              <li>Transparent investment and support details</li>
              <li>Quick response within one working day</li>
            </ul>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRowFull}>
              <label className={styles.label}>
                Full Name *
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </label>
            </div>

            <div className={styles.formRow}>
              <label className={styles.label}>
                Email *
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </label>

              <label className={styles.label}>
                Phone *
                <input
                  type="tel"
                  name="phone"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </label>
            </div>

            <div className={styles.formRow}>
              <label className={styles.label}>
                Business type
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className={styles.input}
                >
                  <option value="">Select Business Type</option>
                  <option value="Dealership">Dealership</option>
                  <option value="Distributorship">Distributorship</option>
                </select>
              </label>

              <label className={styles.label}>
                Investment range
                <select
                  name="investment"
                  value={formData.investment}
                  onChange={handleChange}
                  className={styles.input}
                >
                  <option value="">Investment &amp; financial details</option>
                  <option value="Below ₹5L">Below ₹5L</option>
                  <option value="Above ₹5L">Above ₹5L</option>
                </select>
              </label>
            </div>

            <div className={styles.formRow}>
              <label className={styles.label}>
                City
                <input
                  type="text"
                  name="city"
                  placeholder="Your city"
                  value={formData.city}
                  onChange={handleChange}
                  className={styles.input}
                />
              </label>

              <label className={styles.label}>
                State
                <input
                  type="text"
                  name="state"
                  placeholder="Your state"
                  value={formData.state}
                  onChange={handleChange}
                  className={styles.input}
                />
              </label>
            </div>

            <button
              type="submit"
              className={styles.button}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Apply now"}
            </button>

            <p className={styles.disclaimer}>
              By submitting this form, you agree to be contacted by the 
              Opus team for franchise-related communication.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConnectFormSection;
