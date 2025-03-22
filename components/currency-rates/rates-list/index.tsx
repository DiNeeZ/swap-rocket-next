"use client";

import React, { useState } from "react";

import styles from "./index.module.css";
import { useExchangersStore } from "@/providers";
import { Spinner } from "@/components/ui/spinner";

function getUniqueByCode<T extends { code: string }>(array: T[]): T[] {
  return Array.from(new Map(array.map((item) => [item.code, item])).values());
}

function sortUrls<T extends { currency: string }>(arr: T[]) {
  return arr.sort((a, b) => {
    const numA = parseInt(a.currency.split("/")[4]);
    const numB = parseInt(b.currency.split("/")[4]);
    return numA - numB;
  });
}

export function RatesList() {
  const [visibleCount, setVisibleCount] = useState(5);
  const ratesList = useExchangersStore((store) => store.ratesList);

  if (!ratesList) {
    return <Spinner variant="accent" />;
  }

  const rates = sortUrls(getUniqueByCode(ratesList));
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
