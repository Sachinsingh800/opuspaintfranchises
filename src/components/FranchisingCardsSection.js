import React, { useEffect, useMemo, useState } from "react";
import styles from "./FranchisingCardsSection.module.css";
import ConnectFormSection from "./ConnectFormSection";

export default function FranchisingCardsSection() {
  const cards = useMemo(
    () => [
      {
        key: "dealership",
        icon: "🏢",
        title: "Dealership",
        investment: "₹5-10 Lakhs",
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
        investment: "₹10-20 Lakhs",
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
        investment: "₹20 + Lakhs",
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
  };

  const closeDialog = () => {
    setIsOpen(false);
    setApplyFor("");
  };

  const onOverlayMouseDown = (e) => {
    if (e.target === e.currentTarget) closeDialog();
  };

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeDialog();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!isOpen) return;
    if (typeof document === "undefined") return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
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
        <div
          className={styles.overlay}
          onMouseDown={onOverlayMouseDown}
          role="presentation"
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="connect-form-title"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div className={styles.modalTitle} id="connect-form-title">
                Connect Form{" "}
                <span className={styles.modalSubtitle}>({applyFor})</span>
              </div>

              <button
                className={styles.closeBtn}
                onClick={closeDialog}
                type="button"
                aria-label="Close dialog"
              >
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
