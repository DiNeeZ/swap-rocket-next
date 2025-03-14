import React, { useEffect, useRef } from "react";
import { Montserrat } from "next/font/google";

import { SelectDropdown } from "./select-dropdown";
import { Spinner } from "../ui/spinner";
import { SelectArrow } from "../ui/icons";
import type { Currency } from "@/types";

import "simplebar-react/dist/simplebar.min.css";
import styles from "./index.module.css";
import { SelectMobileDropdown } from "./select-mobile-dropdown";

type SelectProps = {
  options: Currency[];
  value: Currency | null;
  onChange: (currency: Currency) => void;
  isSelectOpen: boolean;
  setIsSelectOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

const Select = ({
  options,
  value,
  onChange,
  isSelectOpen,
  setIsSelectOpen,
}: SelectProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsSelectOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSelectOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref, setIsSelectOpen]);

  const handleClose = () => setIsSelectOpen(false);

  const handleOptionClick = (option: Currency) => {
    onChange(option);
    handleClose();
  };

  // if (!options) return <Spinner />;
  if (!value) return <Spinner />;

  return (
    <div
      ref={ref}
      className={`${styles.select} ${montserrat.className}${
        isSelectOpen ? ` ${styles.open}` : ""
      }`}
    >
      <div
        className={styles.header}
        onClick={() => setIsSelectOpen(!isSelectOpen)}
      >
        <span className={styles.current}>{value.currency_name}</span>
        <SelectArrow className={styles.arrow} />
      </div>
      {isSelectOpen && (
        <SelectDropdown
          options={options}
          handleOptionClick={handleOptionClick}
        />
      )}
      {isSelectOpen && (
        <SelectMobileDropdown
          isOpen={isSelectOpen}
          options={options}
          handleOptionClick={handleOptionClick}
          handleClose={handleClose}
          value={value}
        />
      )}
    </div>
  );
};

export default Select;
