"use client";

import React, { useState } from "react";

import styles from "./index.module.css";
import { Rates } from "@/types";

export function RatesList({ rates }: { rates: Rates[] }) {
  const [visibleCount, setVisibleCount] = useState(5);
  const isAllVisible = rates && visibleCount >= rates.length;

  return (
    <>
      <div className={styles.table}>
        <span className={`${styles.cell} ${styles.header}`}>Валюта</span>
        <span className={`${styles.cell} ${styles.header}`}>Купівля</span>
        <span className={`${styles.cell} ${styles.header}`}>Продаж</span>

        {rates.slice(0, visibleCount).map((currency) => (
          <React.Fragment key={currency.id}>
            <span className={`${styles.cell} ${styles.tableCell}`}>
              {currency.code.toLocaleUpperCase()}
            </span>
            <span className={`${styles.cell} ${styles.tableCell}`}>
              {currency.buy}
            </span>
            <span className={`${styles.cell} ${styles.tableCell}`}>
              {currency.sell}
            </span>
          </React.Fragment>
        ))}
      </div>
      {!isAllVisible && (
        <button
          className={styles.button}
          onClick={() => setVisibleCount(rates.length)}
        >
          Курс всіх іноземних валют
        </button>
      )}
    </>
  );
}
