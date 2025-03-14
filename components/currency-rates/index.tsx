"use client";

import React, { useState } from "react";
import { Currency } from "@/types";
import styles from "./index.module.css";

export default function CurrencyRates({
  currensyList,
}: {
  currensyList: Currency[];
}) {
  const [visibleCount, setVisibleCount] = useState(5);
  const isAllVisible = visibleCount >= currensyList.length;

  return (
    <div className={styles.rates}>
      <h3 className={styles.title}>
        Курс валют на {new Date().toLocaleDateString("ru-RU")}
      </h3>

      <div className={styles.table}>
        <span className={`${styles.cell} ${styles.header}`}>Валюта</span>
        <span className={`${styles.cell} ${styles.header}`}>Купівля</span>
        <span className={`${styles.cell} ${styles.header}`}>Продаж</span>

        {currensyList.slice(0, visibleCount).map((currency) => (
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
      {!isAllVisible ? (
        <button
          className={styles.button}
          onClick={() => setVisibleCount(currensyList.length)}
        >
          Курс всіх іноземних валют
        </button>
      ) : (
        <button className={styles.button} onClick={() => setVisibleCount(5)}>
          Згорнути
        </button>
      )}
    </div>
  );
}
