import { Currency } from "@/data";
import styles from "./index.module.css";

type SelectMobileDropdownProps = {
  options: Currency[] | null;
  handleOptionClick: (option: Currency) => void;
};

export function SelectMobileDropdown({
  options,
  handleOptionClick,
}: SelectMobileDropdownProps) {
  return (
    <div className={styles.options}>
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
    </div>
  );
}
