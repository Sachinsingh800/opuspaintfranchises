import React, { useState } from "react";
import styles from "./FAQSection.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is Opus Paints Franchise?",
    answer:
      "Opus Paints Franchise is our exclusive business partnership program offering premium paint products and entrepreneurial opportunities for those looking to partner with a trusted brand in the painting industry.",
  },
  {
    question: "Is Opus Paints Franchise different from Trade / Retail products?",
    answer:
      "Yes, Opus Paints Franchise is our specialized business program that provides exclusive products, pricing, and support systems distinct from regular trade and retail channels.",
  },
  {
    question: "Does Opus Paints Franchise consist of sampler packs?",
    answer:
      "Our franchise program primarily focuses on bulk quantities and complete product range for business operations, but sampler options are available for customer demonstration and color selection purposes.",
  },
  {
    question: "How many colour shades are available?",
    answer:
      "Opus Paints Franchise offers an extensive color palette with hundreds of shades to choose from, catering to diverse customer preferences and project requirements.",
  },
  {
    question: "How do I know the type of Paint product to be used?",
    answer:
      "Our franchise support includes technical expertise to guide you in selecting the right paint products based on surface type, environmental conditions, desired finish, and project specifications.",
  },
  {
    question: "How many types of Paints are offered by Opus Paints Franchise?",
    answer:
      "Our franchise offers a comprehensive range including interior emulsions, exterior emulsions, enamel paints, waterproofing solutions, primers, and specialty coatings for various applications.",
  },
  {
    question: "What is the major difference between interior and exterior paints?",
    answer:
      "Interior paints are formulated for indoor conditions focusing on aesthetics and washability, while exterior paints are designed to withstand weather elements, UV radiation, and temperature variations.",
  },
  {
    question: "What are exterior Texture products?",
    answer:
      "Exterior texture products are specialized coatings that create decorative and protective textured finishes on external surfaces, enhancing aesthetics while providing additional durability.",
  },
  {
    question: "What does Washable paint mean for walls?",
    answer:
      "Washable paint refers to finishes that can be easily cleaned without damaging the surface, making them ideal for high-traffic areas and spaces prone to stains.",
  },
  {
    question: "What are Waterproofing paints?",
    answer:
      "Waterproofing paints are specialized coatings that create a protective barrier against moisture penetration, preventing water damage and dampness in walls and surfaces.",
  },
  {
    question: "What are Enamel paints?",
    answer:
      "Enamel paints are hard-drying, durable finishes typically used for woodwork, metal surfaces, and areas requiring high resistance to wear, moisture, and cleaning.",
  },
  {
    question: "What type of services are offered for Projects?",
    answer:
      "Our franchise provides comprehensive project services including technical consultation, color consultancy, surface preparation guidance, application support, and professional after-sales service.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles.faqWrapper}>
      <div className={styles.faqInner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Have questions?</p>
          <h2 className={styles.heading}>Frequently asked questions</h2>
          <p className={styles.subtext}>
            Find quick answers about Opus Paints Franchise, products, and services to help
            you plan your next project with confidence.
          </p>
        </header>

        <div className={styles.accordion}>
          {faqs.map((item, index) => {
            const isActive = activeIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <article
                key={index}
                className={`${styles.accordionItem} ${
                  isActive ? styles.accordionItemActive : ""
                }`}
              >
                <button
                  type="button"
                  id={buttonId}
                  className={styles.question}
                  onClick={() => toggle(index)}
                  aria-expanded={isActive}
                  aria-controls={panelId}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.icon}>
                    {isActive ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`${styles.answerWrapper} ${
                    isActive ? styles.answerOpen : styles.answerClosed
                  }`}
                >
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
