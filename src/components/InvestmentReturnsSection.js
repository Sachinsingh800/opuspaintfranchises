import React from "react";
import styles from "./InvestmentReturnsSection.module.css";

export default function InvestmentReturnsSection() {
  const columns = ["Franchise", "Dealership", "Distributorship"];

  const rows = [
    {
      aspect: "Initial Investment",
      Franchise: "₹5-10 Lakhs",
      Dealership: "₹10-20 Lakhs",
      Distributorship: "₹20+ Lakhs",
    },
    {
      aspect: "Space Required",
      Franchise: "800-1200 sq ft",
      Dealership: "500-800 sq ft",
      Distributorship: "2000+ sq ft",
    },
    {
      aspect: "Est. Monthly Revenue",
      Franchise: "₹6-9 Lakhs",
      Dealership: "₹3-6 Lakhs",
      Distributorship: "₹15-25 Lakhs",
    },
    {
      aspect: "Breakeven Period",
      Franchise: "12-18 months",
      Dealership: "10-15 months",
      Distributorship: "18-24 months",
    },
    {
      aspect: "Support Level",
      Franchise: "Comprehensive",
      Dealership: "Standard",
      Distributorship: "Strategic",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Investment &amp; Returns</h2>
          <p className={styles.subtitle}>Detailed breakdown of what to expect</p>
        </header>

        {/* Desktop/Tablet table */}
        <div className={styles.tableWrap} role="region" aria-label="Investment and returns table">
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th} scope="col">Aspect</th>
                {columns.map((c) => (
                  <th key={c} className={styles.th} scope="col">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className={styles.tbody}>
              {rows.map((r) => (
                <tr key={r.aspect} className={styles.tr}>
                  <th className={styles.aspectCell} scope="row">
                    {r.aspect}
                  </th>
                  {columns.map((c) => (
                    <td key={c} className={styles.td}>
                      {r[c]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards (better than squeezing table) */}
        <div className={styles.mobileCards} aria-label="Investment and returns mobile view">
          {rows.map((r) => (
            <div key={r.aspect} className={styles.mobileCard}>
              <div className={styles.mobileAspect}>{r.aspect}</div>
              <div className={styles.mobileGrid}>
                {columns.map((c) => (
                  <div key={c} className={styles.mobileItem}>
                    <div className={styles.mobileLabel}>{c}</div>
                    <div className={styles.mobileValue}>{r[c]}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
