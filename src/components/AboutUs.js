import React from "react";
import styles from "./AboutUs.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AboutUs() {
  const features = [
    {
      title: "Premium Product Portfolio",
      description: "Access our exclusive range of high-quality paints and coatings"
    },
    {
      title: "Comprehensive Business Support", 
      description: "Get end-to-end support from marketing to technical assistance"
    },
    {
      title: "Lucrative Growth Opportunities",
      description: "Scale your business with our proven business model"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Partners" },
    { number: "100+", label: "Cities Covered" },
    { number: "24/7", label: "Support" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span>Premium Partnership</span>
            </div>
            <h1 className={styles.title}>
              Become a Part of{" "}
              <span className={styles.highlight}> Opus</span>
            </h1>
            
            <p className={styles.subtitle}>
              Join India's most trusted paint brand and unlock exceptional business 
              opportunities with premium products and unmatched support.
            </p>

            {/* Stats */}
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div className={styles.statItem} key={index}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div className={styles.featureCard} key={index}>
                <div className={styles.cardHeader}>
                  <div className={styles.checkmark}>
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className={styles.featureNumber}>0{index + 1}</div>
                </div>
                <h3 className={styles.featureTitle}>
                  {feature.title}
                </h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Content Section */}
        <section className={styles.additionalContent}>
          <div className={styles.contentWrapper}>
            <div className={styles.contentHeader}>
              <h2 className={styles.sectionTitle}>
                Why Choose <span className={styles.highlight}> Opus?</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Experience the difference of partnering with a brand that values your success
              </p>
            </div>
            
            <div className={styles.contentGrid}>
              <div className={styles.contentColumn}>
                <div className={styles.contentIcon}>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className={styles.contentTitle}>Innovation Driven</h3>
                <p>
                  With a legacy of trust and quality,  Opus brings you innovative paint solutions 
                  that combine superior performance with environmental responsibility.
                </p>
              </div>
              
              <div className={styles.contentColumn}>
                <div className={styles.contentIcon}>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className={styles.contentTitle}>Excellence Guaranteed</h3>
                <p>
                  Our commitment to excellence and customer satisfaction makes us the preferred choice 
                  for homeowners, architects, and business partners across India.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;