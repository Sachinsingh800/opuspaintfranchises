import React from "react";
import styles from "./AssuranceBanner.module.css";
import banner from "./images/assurance-component-desktop.png";

const AssuranceBanner = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.glassBand}>
          <div className={styles.banner}>
            <img
              src={banner}
              alt="Opus assurance and quality banner"
              loading="lazy"
              decoding="async"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssuranceBanner;
