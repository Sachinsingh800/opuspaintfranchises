import React, { useRef, useState, useEffect } from "react";
import styles from "./PopularColorSlider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const colors = [
  { name: "Spring Forest", code: "YG 8083", bgColor: "#E8D958" },
  { name: "Strawberry Shortcake", code: "RR 3076", bgColor: "#C46D66" },
  { name: "Nectarine", code: "YR 2027", bgColor: "#FBA34B" },
  { name: "Blissful Aqua", code: "BG 2024", bgColor: "#A3D8D8" },
  { name: "Lime Spark", code: "YL 9010", bgColor: "#D7E77A" },
  { name: "Ocean Blue", code: "BB 4050", bgColor: "#4A90E2" },   // data kept, UI colors changed
  { name: "Royal Purple", code: "PP 6020", bgColor: "#9B59B6" },
  { name: "Crimson Red", code: "RR 1050", bgColor: "#E74C3C" },
];

const PopularColorSlider = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScrollPosition = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 4);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 4);

    const firstChild = scrollRef.current.firstElementChild;
    if (!firstChild) return;
    const cardWidth = firstChild.getBoundingClientRect().width;
    if (cardWidth > 0) {
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.8;
    const scrollTo =
      direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

    scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    setTimeout(checkScrollPosition, 350);
  };

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const firstCard = scrollRef.current.firstElementChild;
    if (!firstCard) return;
    const cardWidth = firstCard.getBoundingClientRect().width;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener("resize", checkScrollPosition);
    return () => window.removeEventListener("resize", checkScrollPosition);
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.heading}>Popular Colours</h2>
          <p className={styles.subheading}>
            A curated palette of shades designers love using to instantly uplift any room.
          </p>
        </header>

        <div className={styles.sliderWrapper}>
          <button
            className={`${styles.arrow} ${styles.arrowLeft} ${
              !showLeftArrow ? styles.hidden : ""
            }`}
            onClick={() => scroll("left")}
            aria-label="Previous colours"
          >
            <FaChevronLeft />
          </button>

          <div className={styles.sliderContainer}>
            <div
              className={styles.slider}
              ref={scrollRef}
              onScroll={checkScrollPosition}
            >
              {colors.map((color, index) => (
                <article
                  key={index}
                  className={styles.card}
                  aria-label={`${color.name} ${color.code}`}
                >
                  <div
                    className={styles.swatch}
                    style={{ backgroundColor: color.bgColor }}
                  >
                    <div className={styles.swatchGradient} />
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.chip}>Top shade</div>
                    <h4 className={styles.colorName}>{color.name}</h4>
                    <p className={styles.colorCode}>{color.code}</p>
                    <p className={styles.helperText}>Tap to explore combinations</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            className={`${styles.arrow} ${styles.arrowRight} ${
              !showRightArrow ? styles.hidden : ""
            }`}
            onClick={() => scroll("right")}
            aria-label="Next colours"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className={styles.dots} aria-hidden="true">
          {colors.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === activeIndex ? styles.activeDot : ""
              }`}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularColorSlider;
