import { Montserrat, Roboto } from "next/font/google";
import { motion } from "framer-motion";
import { BackChevron } from "@/components/ui/icons/back-chevron";
import { Currency } from "@/types";
import styles from "./index.module.css";

type SelectMobileDropdownProps = {
  options: Currency[];
  value: Currency;
  isOpen: boolean;
  handleOptionClick: (option: Currency) => void;
  handleClose: () => void;
};

const sidebarVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

const montserrat = Montserrat({ weight: "500", subsets: ["cyrillic"] });
const roboto = Roboto({ weight: "700", subsets: ["cyrillic"] });

export function SelectMobileDropdown({
  options,
  value,
  isOpen,
  handleOptionClick,
  handleClose,
}: SelectMobileDropdownProps) {
  return (
    <motion.div
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      exit="exit"
      variants={sidebarVariants}
      transition={{ type: "tween", duration: 0.3 }}
      className={styles.options}
    >
      <div className={styles.header}>
        <button onClick={handleClose} className={styles.btn}>
          <BackChevron />
        </button>
        <h2 className={`${styles.title} ${roboto.className}`}>
          Виберіть валюту
        </h2>
      </div>
      <ul className={styles.list}>
        {options?.map((option) => {
          const isCurrent = option.currency_name === value.currency_name;

          return (
            <li
              className={`${styles.option} ${isCurrent && styles.active} ${
                montserrat.className
              }`}
              key={option.id}
              onClick={() => handleOptionClick(option)}
            >
              <span
                className={`${styles.checkbox} ${isCurrent && styles.active}`}
              />
              {option.currency_name}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
