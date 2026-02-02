import React from "react";
import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo from "./images/-opus-logo.png";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.topRow}>
          {/* Brand / newsletter */}
          <div className={`${styles.column} ${styles.brandColumn}`}>
            <p className={styles.tagline}>Sign up for our colour letter</p>
            <div className={styles.logos}>
              <img
                src={logo}
                loading="lazy"
                decoding="async"
                alt=" Opus"
                className={styles.logo}
              />
            </div>
            <p className={styles.description}>
              Get vibrant ideas, expert decor tips, and colour trends directly
              in your inbox.
            </p>
          </div>

          {/* Quick links */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Quick links</h3>
            <ul className={styles.linkList}>
              <li onClick={() => handleNavigation("/")}>Home</li>
              <li onClick={() => handleNavigation("/about-us")}>About us</li>
              <li onClick={() => handleNavigation("/contact")}>Contact</li>
            </ul>
          </div>

          {/* Policy */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Policy</h3>
            <ul className={styles.linkList}>
              <li onClick={() => handleNavigation("/privacy-policy")}>
                Privacy policy
              </li>
              <li onClick={() => handleNavigation("/terms-and-conditions")}>
                Terms &amp; conditions
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contact us</h3>
            <p className={styles.address}>
               Opus Paints (Grasim Industries Ltd.)<br />
              9th Floor,  Centurion, Worli,<br />
              Mumbai – 400030, Maharashtra, India
            </p>
            <p className={styles.email}>contact@birlaopuspaintsfranchises.com</p>

            <div className={styles.whatsapp}>
              <a
                href="https://wa.me/917581905308"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappLink}
              >
                <WhatsAppIcon className={styles.whatsappIcon} />
                <span>+91 7581905308</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.copyRight}>
            © 2025  Opus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
