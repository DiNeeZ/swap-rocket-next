import { Currency } from "@/data";
import styles from "./index.module.css";

type SelectMobileDropdownProps = {
  options: Currency[] | null;
  handleOptionClick: (option: Currency) => void;
  // isSelectOpen: boolean;
  // setIsSelectOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SelectMobileDropdown({
  options,
  handleOptionClick,
}: SelectMobileDropdownProps) {
  return <div className={styles.options}>SelectMobileDropdown</div>;
}
