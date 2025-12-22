import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, push } from "firebase/database";
import { app } from "../firebase";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaRupeeSign,
  FaMapMarkerAlt,
} from "react-icons/fa";

import styles from "./HeroForm.module.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  businessType: "",
  investment: "",
  city: "",
  state: "",
};

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = "Full name is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  if (!values.phone.trim()) errors.phone = "Phone number is required.";

  const digits = values.phone.replace(/[^\d]/g, "");
  if (values.phone && digits.length < 10) errors.phone = "Enter at least 10 digits.";

  return errors;
}

const HeroForm = () => {
  const navigate = useNavigate();
  const db = getDatabase(app);

  const [formData, setFormData] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const errors = useMemo(() => validate(formData), [formData]);

  const fieldError = (key) => (touched[key] ? errors[key] : "");

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    setTouched({
      name: true,
      email: true,
      phone: true,
      businessType: true,
      investment: true,
      city: true,
      state: true,
    });

    const currentErrors = validate(formData);
    if (Object.keys(currentErrors).length) return;

    setIsSubmitting(true);

    try {
      const applicationsRef = ref(db, "applications");

      const payload = {
        ...formData,
        phone: formData.phone.trim(),
        timestamp: new Date().toISOString(),
        source: "hero-form",
      };

      await push(applicationsRef, payload);

      setFormData(initialForm);
      setTouched({});
      navigate("/thankyou");
    } catch (error) {
      console.error("Error submitting form:", error);
      setServerError("Failed to submit. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.backdrop} />

      <div className={styles.container}>
        <div className={styles.heroInner}>
          {/* Left */}
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Opus Dealership Program</p>

            <h1 className={styles.title}>
              Step Into The Future With
              <span className={styles.titleHighlight}> Opus</span>
            </h1>

            <p className={styles.subtitle}>
              Become a trusted partner of India&apos;s premium paint brand and unlock growth, support, and
              profitable business opportunities.
            </p>

            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureBadge}>✓</div>
                <div>
                  <p className={styles.featureTitle}>Premium Product Range</p>
                  <p className={styles.featureText}>High-quality paints trusted by dealers and customers.</p>
                </div>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureBadge}>✓</div>
                <div>
                  <p className={styles.featureTitle}>Dedicated Business Support</p>
                  <p className={styles.featureText}>Training, marketing, and operational support from experts.</p>
                </div>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureBadge}>✓</div>
                <div>
                  <p className={styles.featureTitle}>High-Growth Potential</p>
                  <p className={styles.featureText}>Scale your business with a fast-growing national brand.</p>
                </div>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureBadge}>✓</div>
                <div>
                  <p className={styles.featureTitle}>Fast Onboarding</p>
                  <p className={styles.featureText}>Clear process with guidance at every step.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className={styles.formWrapper}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Start Your Business Journey</h2>
                <p className={styles.formSubtitle}>
                  Share your details and our team will contact you shortly.
                </p>
              </div>

              {serverError ? (
                <div className={styles.alert} role="alert">
                  {serverError}
                </div>
              ) : null}

              {/* Name */}
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">
                  Full Name <span className={styles.req}>*</span>
                </label>
                <div className={styles.inputGroup}>
                  <FaUser className={styles.inputIcon} />
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className={`${styles.control} ${fieldError("name") ? styles.controlError : ""}`}
                    placeholder="e.g., Rahul Kumar"
                    value={formData.name}
                    onChange={onChange}
                    onBlur={onBlur}
                    autoComplete="name"
                    required
                    aria-invalid={!!fieldError("name")}
                    aria-describedby={fieldError("name") ? "name-error" : undefined}
                  />
                </div>
                {fieldError("name") ? (
                  <p className={styles.errorText} id="name-error">
                    {fieldError("name")}
                  </p>
                ) : null}
              </div>

              {/* Email + Phone */}
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">
                    Email <span className={styles.req}>*</span>
                  </label>
                  <div className={styles.inputGroup}>
                    <FaEnvelope className={styles.inputIcon} />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className={`${styles.control} ${fieldError("email") ? styles.controlError : ""}`}
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={onChange}
                      onBlur={onBlur}
                      autoComplete="email"
                      required
                      aria-invalid={!!fieldError("email")}
                      aria-describedby={fieldError("email") ? "email-error" : undefined}
                    />
                  </div>
                  {fieldError("email") ? (
                    <p className={styles.errorText} id="email-error">
                      {fieldError("email")}
                    </p>
                  ) : null}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="phone">
                    Phone <span className={styles.req}>*</span>
                  </label>
                  <div className={styles.inputGroup}>
                    <FaPhone className={styles.inputIcon} />
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      className={`${styles.control} ${fieldError("phone") ? styles.controlError : ""}`}
                      placeholder="10-digit mobile"
                      value={formData.phone}
                      onChange={onChange}
                      onBlur={onBlur}
                      inputMode="numeric"
                      autoComplete="tel"
                      required
                      aria-invalid={!!fieldError("phone")}
                      aria-describedby={fieldError("phone") ? "phone-error" : undefined}
                    />
                  </div>
                  {fieldError("phone") ? (
                    <p className={styles.errorText} id="phone-error">
                      {fieldError("phone")}
                    </p>
                  ) : null}
                </div>
              </div>

              {/* Business Type */}
              <div className={styles.field}>
                <label className={styles.label} htmlFor="businessType">
                  Business Type
                </label>
                <div className={styles.inputGroup}>
                  <FaBuilding className={styles.inputIcon} />
                  <select
                    id="businessType"
                    name="businessType"
                    className={styles.control}
                    value={formData.businessType}
                    onChange={onChange}
                    onBlur={onBlur}
                    autoComplete="off"
                  >
                    <option value="">Select business type</option>
                    <option value="Dealership">Dealership</option>
                    <option value="Distributorship">Distributorship</option>
                  </select>
                </div>
              </div>

              {/* Investment */}
              <div className={styles.field}>
                <label className={styles.label} htmlFor="investment">
                  Expected Investment
                </label>
                <div className={styles.inputGroup}>
                  <FaRupeeSign className={styles.inputIcon} />
                  <select
                    id="investment"
                    name="investment"
                    className={styles.control}
                    value={formData.investment}
                    onChange={onChange}
                    onBlur={onBlur}
                    autoComplete="off"
                  >
                    <option value="">Choose a range</option>
                    <option value="Below ₹5 Lakh">Below ₹5 Lakh</option>
                    <option value="₹5–10 Lakh">₹5–10 Lakh</option>
                    <option value="₹10–20 Lakh">₹10–20 Lakh</option>
                    <option value="Above ₹20 Lakh">Above ₹20 Lakh</option>
                  </select>
                </div>
              </div>

              {/* City + State */}
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="city">
                    City
                  </label>
                  <div className={styles.inputGroup}>
                    <FaMapMarkerAlt className={styles.inputIcon} />
                    <input
                      id="city"
                      type="text"
                      name="city"
                      className={styles.control}
                      placeholder="e.g., Dhanbad"
                      value={formData.city}
                      onChange={onChange}
                      onBlur={onBlur}
                      autoComplete="address-level2"
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="state">
                    State
                  </label>
                  <div className={styles.inputGroup}>
                    <FaMapMarkerAlt className={styles.inputIcon} />
                    <input
                      id="state"
                      type="text"
                      name="state"
                      className={styles.control}
                      placeholder="e.g., Jharkhand"
                      value={formData.state}
                      onChange={onChange}
                      onBlur={onBlur}
                      autoComplete="address-level1"
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className={styles.button} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner} aria-hidden="true" />
                    Processing...
                  </>
                ) : (
                  "Apply Now & Get Consultation"
                )}
              </button>

              <p className={styles.privacyNote}>
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroForm;
