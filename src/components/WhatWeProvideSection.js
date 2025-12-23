import React from "react";
import styles from "./WhatWeProvideSection.module.css";

export default function WhatWeProvideSection() {
  const items = [
    {
      icon: "📚",
      title: "Training Programs",
      desc: "Product knowledge, sales techniques, operations",
    },
    {
      icon: "🎨",
      title: "Showroom Design",
      desc: "Layout planning, visual merchandising guidance",
    },
    {
      icon: "📣",
      title: "Marketing Support",
      desc: "Creatives, campaigns, digital presence",
    },
    {
      icon: "🚚",
      title: "Supply Chain",
      desc: "Reliable inventory, on-time delivery",
    },
    {
      icon: "🛠️",
      title: "After-Sales",
      desc: "Service network, warranty support",
    },
    {
      icon: "📞",
      title: "Dedicated Manager",
      desc: "Personal support for business growth",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h2 className={styles.title}>What We Provide</h2>
          <p className={styles.subtitle}>
            Complete support ecosystem for your success
          </p>
        </header>

        <div className={styles.grid}>
          {items.map((it) => (
            <div key={it.title} className={styles.card}>
              <div className={styles.icon} aria-hidden="true">
                {it.icon}
              </div>
              <h3 className={styles.cardTitle}>{it.title}</h3>
              <p className={styles.cardDesc}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
