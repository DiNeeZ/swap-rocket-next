export const dynamic = "force-dynamic";

import { RatesList } from "./rates-list";

import styles from "./index.module.css";
import { getCurrencyRaqtes } from "@/actions";

function getUniqueByCode<T extends { code: string }>(array: T[]): T[] {
  return Array.from(new Map(array.map((item) => [item.code, item])).values());
}

function sortUrls<T extends { currency: string }>(arr: T[]) {
  return arr.sort((a, b) => {
    const numA = parseInt(a.currency.split("/")[4]);
    const numB = parseInt(b.currency.split("/")[4]);
    return numA - numB;
  });
}

export default async function CurrencyRates() {
  const rates = getUniqueByCode(await getCurrencyRaqtes());
  const sortedRates = sortUrls(rates);

  // const today = new Date(
  //   sortedRates.find((rate) => rate.code === "usd")?.updatedAt ?? ""
  // ).toLocaleDateString("ru-RU");

  const today = `${new Date().getMinutes()} ${new Date().getSeconds()}`;

  return (
    <div className={styles.rates}>
      <h3 className={styles.title}>Курс валют на {today}</h3>
      <RatesList rates={sortedRates} />
    </div>
  );
}
