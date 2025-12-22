import React from "react";
import styles from "./PaintProducts.module.css";
import product from "./images/-opus-one-true-life-website-mock.png";
import { FaStar, FaCheck } from "react-icons/fa";

const products = [
  {
    title: "One True Life",
    desc: "Discover unmatched protection and enduring elegance with Opus One True Life, offering superior durability and stunning finishes for your home.",
    price: "Product starts from ₹<s>728</s> ₹555",
    discount: "24% OFF",
    rating: 4.8,
    features: ["Washable", "Stain Resistant", "Eco-Friendly"],
    badge: "BEST SELLER",
  },
  {
    title: "One True Vision",
    desc: "Introducing Opus One True Vision, a revolutionary paint that sets new standards in color richness and long-lasting protection.",
    price: "Product starts from ₹<s>1028</s> ₹673",
    discount: "35% OFF",
    rating: 4.9,
    features: ["Premium Finish", "Easy Application", "Quick Dry"],
    badge: "PREMIUM",
  },
  {
    title: "One True Flex",
    desc: "Experience the transformative power of Opus One True Flex exterior paint. This advanced formula provides exceptional flexibility and weather resistance.",
    price: "Product starts from ₹<s>640</s> ₹474",
    discount: "26% OFF",
    rating: 4.7,
    features: ["Weather Resistant", "UV Protection", "Long Lasting"],
    badge: "TRENDING",
  },
];

const PaintProducts = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.heading}>Premium Paint Collection</h2>
          <p className={styles.subheading}>
            Discover our range of high-quality paints designed to transform your spaces
            with exceptional durability and stunning finishes.
          </p>
        </header>

        <div className={styles.cardGrid}>
          {products.map((item, index) => (
            <article className={styles.card} key={index}>
              <div className={styles.cardTopRow}>
                <span className={styles.badge}>{item.badge}</span>
                <span className={styles.discount}>{item.discount}</span>
              </div>

              <div className={styles.imageWrapper}>
                <div className={styles.imageBox}>
                  <img
                    src={product}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className={styles.image}
                  />
                </div>

                <div className={styles.ratingRow}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${styles.starIcon} ${
                        i < Math.round(item.rating)
                          ? styles.starFilled
                          : styles.starEmpty
                      }`}
                    />
                  ))}
                  <span className={styles.ratingValue}>{item.rating}</span>
                  <span className={styles.ratingLabel}>/ 5</span>
                </div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>

                <div className={styles.features}>
                  {item.features.map((feature, idx) => (
                    <div key={idx} className={styles.featureItem}>
                      <FaCheck className={styles.checkIcon} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <p className={styles.pack}>
                  Available in 1L, 4L, 10L, 20L pack sizes
                </p>

                <div className={styles.priceBlock}>
                  <p
                    className={styles.price}
                    dangerouslySetInnerHTML={{ __html: item.price }}
                  />
                  <span className={styles.priceNote}>
                    Inclusive of all taxes
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaintProducts;
