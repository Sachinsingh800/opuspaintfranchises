import React from "react";
import styles from "./PaintingMadeEasy.module.css";
import paintingBanner1 from "./images/paintingBanner1.png";
import paintingBanner2 from "./images/paintingBanner2.png";
import paintingBanner3 from "./images/paintingBanner3.png";
import { FaPaintBrush, FaClipboardCheck, FaBookOpen } from "react-icons/fa";

const services = [
  {
    title: "Professional Painting Services",
    description:
      "Expert painting solutions for homes and commercial spaces with premium finishes.",
    img: paintingBanner1,
    icon: <FaPaintBrush />,
    features: ["Expert Team", "Quality Materials", "Timely Completion"],
  },
  {
    title: "Planning Your Paint Project",
    description:
      "Comprehensive guidance for planning and executing your perfect paint project.",
    img: paintingBanner2,
    icon: <FaClipboardCheck />,
    features: ["Color Consultation", "Budget Planning", "Timeline Management"],
  },
  {
    title: "Learn Paint Terminology",
    description:
      "Master the language of painting with our comprehensive guide to paint lingo.",
    img: paintingBanner3,
    icon: <FaBookOpen />,
    features: ["Technical Terms", "Product Knowledge", "Application Techniques"],
  },
];

const PaintingMadeEasy = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Services &amp; guidance</p>
          <h2 className={styles.heading}>
            Painting made <span className={styles.highlight}>effortless</span>
          </h2>
          <p className={styles.subtext}>
            From expert on-site services to easy planning tools and learning resources, explore
            everything needed to make your paint journey smooth and stress-free.
          </p>
        </header>

        <div className={styles.cardList}>
          {services.map((item, index) => (
            <article className={styles.card} key={index}>
              <div className={styles.cardInner}>
                <div className={styles.contentCol}>
                  <div className={styles.iconTitleRow}>
                    <div className={styles.iconWrapper}>{item.icon}</div>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                  </div>

                  <p className={styles.description}>{item.description}</p>

                  <div className={styles.features}>
                    {item.features.map((feature, idx) => (
                      <span key={idx} className={styles.feature}>
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className={styles.learnMore} type="button">
                    Learn more
                    <span className={styles.learnArrow} />
                  </button>
                </div>

                <div className={styles.mediaCol}>
                  <div className={styles.imageShell}>
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className={styles.image}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaintingMadeEasy;
