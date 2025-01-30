import { SelectHTMLAttributes } from "react";
import type { Currency } from "@/data";
import styles from "./index.module.css";
import React from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  data: Currency[];
}

export function Select({ data, ...otherProps }: SelectProps) {
  return (
    <select className={styles.select} {...otherProps}>
      {data.map((option) => (
        <option key={option.id} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}
