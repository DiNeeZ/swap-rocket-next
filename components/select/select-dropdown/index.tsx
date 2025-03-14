import SimpleBar from "simplebar-react";
import styles from "./index.module.css";
import { Currency } from "@/types";

type SelectDropdownProps = {
  options: Currency[] | null;
  handleOptionClick: (option: Currency) => void;
};

export function SelectDropdown({
  options,
  handleOptionClick,
}: SelectDropdownProps) {
  return (
    <SimpleBar className={styles.options}>
      <ul className={styles.list}>
        {options?.map((option) => (
          <li
            className={styles.option}
            key={option.id}
            onClick={() => {
              handleOptionClick(option);
              console.log(option);
            }}
          >
            {option.currency_name}
          </li>
        ))}
      </ul>
    </SimpleBar>
  );
}
