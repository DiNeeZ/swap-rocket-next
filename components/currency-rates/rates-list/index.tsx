"use client";

import React, { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { useExchangersStore } from "@/providers";

import styles from "./index.module.css";

export function RatesList() {
  const currencyList = useExchangersStore((state) => state.currencyList);
  const [visibleCount, setVisibleCount] = useState(5);
  const isAllVisible = currencyList && visibleCount >= currencyList.length;

  if (!currencyList)
    return (
      <div className={styles.loader}>
        <Spinner variant="accent" />
      </div>
    );

  return (
    <>
      <div className={styles.table}>
        <span className={`${styles.cell} ${styles.header}`}>Валюта</span>
        <span className={`${styles.cell} ${styles.header}`}>Купівля</span>
        <span className={`${styles.cell} ${styles.header}`}>Продаж</span>

        {currencyList.slice(0, visibleCount).map((currency) => (
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
          onClick={() => setVisibleCount(currencyList.length)}
        >
          Курс всіх іноземних валют
        </button>
      )}
    </>
  );
}
