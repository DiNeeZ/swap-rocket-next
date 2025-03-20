import { RatesList } from "./rates-list";

import styles from "./index.module.css";
import { getCurrencyRaqtes } from "@/actions";

export default async function CurrencyRates() {
  const rates = await getCurrencyRaqtes();

  console.log(rates);

  return (
    <div className={styles.rates}>
      <h3 className={styles.title}>
        Курс валют на {new Date().toLocaleDateString("ru-RU")}
      </h3>
      <RatesList rates={rates} />
    </div>
  );
}
