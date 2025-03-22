import { RatesList } from "./rates-list";

import styles from "./index.module.css";
import CurrentTime from "../current-time";

export default async function CurrencyRates() {
  return (
    <div className={styles.rates}>
      <h3 className={styles.title}>
        Курс валют на <CurrentTime />
      </h3>
      <RatesList />
    </div>
  );
}
