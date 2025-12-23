import React, { useEffect, useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import HeroForm from "./components/HeroForm";
import styles from "./App.module.css";

// Lazy load non-critical components
const FranchisingCards = lazy(() =>
  import("./components/FranchisingCardsSection")
);
const InvestmentReturns = lazy(() =>
  import("./components/InvestmentReturnsSection")
);
const WhatWeProvide = lazy(() =>
  import("./components/WhatWeProvideSection")
);
const PopularColorSlider = lazy(() =>
  import("./components/PopularColorSlider")
);
const AssuranceBanner = lazy(() => import("./components/AssuranceBanner"));
const IdeasSection = lazy(() => import("./components/IdeasSection"));
const PaintProducts = lazy(() => import("./components/PaintProducts"));
const PaintingMadeEasy = lazy(() => import("./components/PaintingMadeEasy"));
const ConnectFormSection = lazy(() =>
  import("./components/ConnectFormSection")
);
const FAQSection = lazy(() => import("./components/FAQSection"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setShowScrollTop(scrollY > window.innerHeight);
          setIsScrolled(scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.stickyNavbar} ${
          isScrolled ? styles.scrolled : ""
        }`}
      >
        <Navbar />
      </div>
      <HeroForm />

      <Suspense fallback={<div className={styles.loadingPlaceholder} />}>
        <FranchisingCards />
         <InvestmentReturns />
         <WhatWeProvide />
        <PopularColorSlider />
        <AssuranceBanner />
        <IdeasSection />
        <PaintProducts />
        <PaintingMadeEasy />
        <ConnectFormSection />
        <FAQSection />
        <Footer />
      </Suspense>

      {showScrollTop && (
        <div className={styles.scrollTop} onClick={scrollToTop}>
          <span>↑</span>
        </div>
      )}
    </div>
  );
}

export default React.memo(App);
