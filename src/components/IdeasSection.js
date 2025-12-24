import React from "react";
import styles from "./IdeasSection.module.css";
import banner1 from "./images/banner1.png";
import banner2 from "./images/banner2.png";
import banner3 from "./images/banner3.png";
import { FaArrowRight } from "react-icons/fa";

const ideas = [
  {
    title: "Decor Nook",
    image: banner1,
    description: "Transform your spaces with creative decor ideas",
    tag: "Decor tips",
  },
  {
    title: "Lifestyle",
    image: banner2,
    description: "Discover trends that complement your lifestyle",
    tag: "Lifestyle",
  },
  {
    title: "Homes",
    image: banner3,
    description: "Get inspired by beautiful home transformations",
    tag: "Real homes",
  },
];

const IdeasSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Inspiration hub</p>
          <h2 className={styles.heading}>Design ideas for every room</h2>
          <p className={styles.subheading}>
            Browse handpicked stories, looks, and colour themes to spark your
            next makeover.
          </p>
        </header>

        <div className={styles.cardRow}>
          {ideas.map((item, index) => (
            <article className={styles.card} key={index}>
              <div className={styles.cardMedia}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className={styles.image}
                />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.tag}>{item.tag}</div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
                <button className={styles.ctaButton}>
                  Explore ideas
                  <FaArrowRight className={styles.ctaIcon} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <button className={styles.viewAllButton}>
            View all design stories
            <FaArrowRight className={styles.viewAllIcon} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default IdeasSection;
