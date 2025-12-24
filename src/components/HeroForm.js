import React, { useState } from "react";
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

const HeroForm = () => {
  const navigate = useNavigate();
  const db = getDatabase(app);

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
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in required fields: Name, Email, and Phone");
      setIsSubmitting(false);
      return;
    }

    try {
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
      console.error("Error submitting form:", error);
      alert("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />

      <div className={styles.heroInner}>
        {/* Left: Text / Content */}
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}> Opus Dealership Program</p>

          <h1 className={styles.title}>
            Step Into The Future With
            <span className={styles.titleHighlight}>  Opus</span>
          </h1>

          <p className={styles.subtitle}>
            Become a trusted partner of India&apos;s fastest-growing premium
            paint brand and unlock growth, support, and profitable business
            opportunities.
          </p>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureBadge}>✓</div>
              <div>
                <p className={styles.featureTitle}>Premium Product Range</p>
                <p className={styles.featureText}>
                  High-quality paints trusted by dealers and customers.
                </p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureBadge}>✓</div>
              <div>
                <p className={styles.featureTitle}>
                  Dedicated Business Support
                </p>
                <p className={styles.featureText}>
                  Training, marketing, and operational support from experts.
                </p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureBadge}>✓</div>
              <div>
                <p className={styles.featureTitle}>High-Growth Potential</p>
                <p className={styles.featureText}>
                  Scale your business with a fast-growing national brand.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Start Your Business Journey</h2>
              <p className={styles.formSubtitle}>
                Share your details and our team will contact you shortly.
              </p>
            </div>

            <div className={styles.inputGroup}>
              <FaUser className={styles.inputIcon} />
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <FaEnvelope className={styles.inputIcon} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <FaPhone className={styles.inputIcon} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  className={styles.input}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <br />
            <div className={styles.inputGroup}>
              <FaBuilding className={styles.inputIcon} />
              <select
                name="businessType"
                className={styles.input}
                value={formData.businessType}
                onChange={handleChange}
              >
                <option value="">Select Business Type</option>
                <option value="Dealership">Dealership</option>
                <option value="Distributorship">Distributorship</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <FaRupeeSign className={styles.inputIcon} />
              <select
                name="investment"
                className={styles.input}
                value={formData.investment}
                onChange={handleChange}
              >
                <option value="">Expected Investment</option>
                <option value="Below ₹5 Lakh">Below ₹5 Lakh</option>
                <option value="₹5–10 Lakh">₹5–10 Lakh</option>
                <option value="₹10–20 Lakh">₹10–20 Lakh</option>
                <option value="Above ₹20 Lakh">Above ₹20 Lakh</option>
              </select>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <FaMapMarkerAlt className={styles.inputIcon} />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className={styles.input}
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputGroup}>
                <FaMapMarkerAlt className={styles.inputIcon} />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  className={styles.input}
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className={`${styles.button} ${
                isSubmitting ? styles.buttonLoading : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className={styles.spinner} />
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
    </section>
  );
};

export default HeroForm;
