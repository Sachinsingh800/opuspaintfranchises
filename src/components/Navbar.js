import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "./images/-opus-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    closeMenu();
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer} onClick={handleLogoClick}>
          <img
            src={logo}
            loading="lazy"
            decoding="async"
            height="40"
            width="auto"
            alt=" Opus"
            className={styles.logo}
          />
        </div>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
          <div className={styles.navItems}>
            <a href="/" onClick={closeMenu} className={styles.navItem}>
              <span>HOME</span>
            </a>
            <a href="/about-us" onClick={closeMenu} className={styles.navItem}>
              <span>ABOUT US</span>
            </a>
            <a href="/contact" onClick={closeMenu} className={styles.navItem}>
              <span>CONTACT</span>
            </a>
          </div>
        </nav>

        <div className={styles.menuButton} onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className={styles.menuIcon} />
          ) : (
            <FaBars className={styles.menuIcon} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;