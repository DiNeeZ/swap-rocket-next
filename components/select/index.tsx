import React, { useEffect, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import { Montserrat } from "next/font/google";

import { SelectArrow } from "../ui/icons";
import type { Currency } from "@/data";

import "simplebar-react/dist/simplebar.min.css";
import styles from "./index.module.css";
import { Spinner } from "../ui/spinner";

type SelectProps = {
  options: Currency[] | null;
  value: Currency | null;
  onChange: (currency: Currency) => void;
};

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

const Select = ({ options, value, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref]);

  const handleOptionClick = (option: Currency) => {
    onChange(option);
    setIsOpen(false);
  };

  if (!options) return <Spinner />;
  if (!value) return <Spinner />;

  return (
    <div
      ref={ref}
      className={`${styles.select} ${montserrat.className}${
        isOpen ? ` ${styles.open}` : ""
      }`}
    >
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.current}>{value.name}</span>
        <SelectArrow className={styles.arrow} />
      </div>
      {isOpen && (
        <SimpleBar className={styles.options}>
          <ul className={styles.list}>
            {options?.map((option) => (
              <li
                className={styles.option}
                key={option.id}
                onClick={() => handleOptionClick(option)}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </SimpleBar>
      )}
    </div>
  );
};

export default Select;
