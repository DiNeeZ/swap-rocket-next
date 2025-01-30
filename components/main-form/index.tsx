"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import { Select } from "@/components/ui/select";
import { selectData, type Currency } from "@/data";

export function MainForm() {
  const [mode, setMode] = useState<"buy" | "sell">("buy");
  const [currency, setCurrency] = useState<Currency>(selectData[0]);

  console.table({
    Режим: mode,
    "Текущая валюта": currency.text,
  });

  const buyBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (mode !== "buy") {
      setMode("buy");
    }
  };

  const sellBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (mode !== "sell") {
      setMode("sell");
    }
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const currencyObject = selectData.find((item) => item.value === value);

    if (currencyObject) {
      setCurrency(currencyObject);
      return;
    }

    throw new Error("This Currency doesn't exists, for some reason");
  };

  return (
    <form className={styles.form}>
      <nav className={styles.tabs}>
        <button
          className={styles.navBtn}
          onClick={buyBtnClick}
          disabled={mode === "buy"}
        >
          Купить
        </button>
        <button
          className={styles.navBtn}
          onClick={sellBtnClick}
          disabled={mode === "sell"}
        >
          Продать
        </button>
      </nav>
      <div className={styles.wrapper}>
        <Select data={selectData} onChange={handleSelect} />
      </div>
    </form>
  );
}
