import React from "react";
import styles from "./ColorfulStoreSection.module.css";
import bannerVideo from "./images/opus-experience-stores-aditya--paint.mp4";
import { FaMapMarkerAlt, FaPalette, FaUsers, FaLightbulb } from "react-icons/fa";

const ColorfulStoreSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.header}>
              <h2 className={styles.heading}>
                Step Into Our <span className={styles.highlight}>Colorful World</span>
              </h2>
              <p className={styles.subtext}>
                Immerse yourself in a spectrum of colors and designs that inspire 
                creativity. Our experience stores are designed to transform your 
                vision into reality with expert guidance and premium products.
              </p>
            </div>

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <FaPalette />
                </div>
                <div className={styles.featureContent}>
                  <h4>Color Exploration</h4>
                  <p>Explore endless color possibilities with our interactive displays</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <FaUsers />
                </div>
                <div className={styles.featureContent}>
                  <h4>Expert Consultation</h4>
                  <p>Get personalized advice from our color specialists</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <FaLightbulb />
                </div>
                <div className={styles.featureContent}>
                  <h4>Design Inspiration</h4>
                  <p>Discover trending designs and innovative applications</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <FaMapMarkerAlt />
                </div>
                <div className={styles.featureContent}>
                  <h4>Nationwide Presence</h4>
                  <p>Visit our stores across multiple cities in India</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.mediaContent}>
            <div className={styles.videoContainer}>
              <div className={styles.videoWrapper}>
                <video
                  className={styles.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={bannerVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className={styles.videoOverlay}></div>
                <div className={styles.playIndicator}>
                  <div className={styles.playIcon}></div>
                </div>
              </div>
              
              <div className={styles.videoCaption}>
                <h4>Experience Store Tour</h4>
                <p>Take a virtual tour of our premium experience centers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorfulStoreSection;