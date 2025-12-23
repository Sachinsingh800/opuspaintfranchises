import React, { useMemo, useState } from "react";
import styles from "./FranchisingCardsSection.module.css";
import ConnectFormSection from "./ConnectFormSection";


export default function FranchisingCardsSection() {
  const cards = useMemo(
    () => [
      {
        key: "dealership",
        icon: "🏢",
        title: "Dealership",
        investment: "₹10-20 Lakhs",
        points: [
          "Showroom setup guidance",
          "Product range access",
          "Sales support",
          "Promotional materials",
          "Order fulfillment",
        ],
      },
      {
        key: "distributorship",
        icon: "📦",
        title: "Distributorship",
        investment: "₹30-50 Lakhs",
        points: [
          "Large territory coverage",
          "Bulk purchasing benefits",
          "Dealer network support",
          "Warehouse setup",
          "Logistics assistance",
        ],
      },
      {
        key: "franchise",
        icon: "🏪",
        title: "Franchise",
        investment: "₹20-30 Lakhs",
        points: [
          "Premium showroom setup",
          "Exclusive territory rights",
          "Full brand support",
          "Marketing assistance",
          "Staff training included",
        ],
      },
    ],
    []
  );

  const [isOpen, setIsOpen] = useState(false);
  const [applyFor, setApplyFor] = useState("");

  const openDialog = (type) => {
    setApplyFor(type);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeDialog = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeDialog();
  };

  React.useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeDialog();
    };
    if (isOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {cards.map((c) => (
            <article key={c.key} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.icon} aria-hidden="true">
                  {c.icon}
                </div>
                <h3 className={styles.cardTitle}>{c.title}</h3>
              </div>

              <p className={styles.investment}>
                <span className={styles.investLabel}>Investment:</span>{" "}
                <span className={styles.investValue}>{c.investment}</span>
              </p>

              <ul className={styles.list}>
                {c.points.map((p) => (
                  <li key={p} className={styles.listItem}>
                    <span className={styles.tick} aria-hidden="true">
                      ✓
                    </span>
                    <span className={styles.pointText}>{p}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.cardFooter}>
                <button
                  className={styles.applyBtnCard}
                  onClick={() => openDialog(c.title)}
                  type="button"
                >
                  Apply Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className={styles.overlay} onMouseDown={onOverlayClick} role="presentation">
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-label="Connect form dialog"
          >
            <div className={styles.modalHeader}>
              <div className={styles.modalTitle}>
                Connect Form{" "}
                <span className={styles.modalSubtitle}>
                  ({applyFor})
                </span>
              </div>

              <button className={styles.closeBtn} onClick={closeDialog} type="button">
                ✕
              </button>
            </div>

            <div className={styles.modalBody}>
              <ConnectFormSection applyFor={applyFor} onClose={closeDialog} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
