import { RatesList } from "./rates-list";

import styles from "./index.module.css";

export default function CurrencyRates() {
  return (
    <div className={styles.rates}>
      <h3 className={styles.title}>
        Курс валют на {new Date().toLocaleDateString("ru-RU")}
      </h3>
      <RatesList />
    </div>
  );
}
