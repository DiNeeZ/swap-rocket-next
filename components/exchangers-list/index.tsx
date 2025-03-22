// export const dynamic = "force-dynamic";

import Link from "next/link";

import { Location } from "@/components/ui/icons";
import { getExchangersList } from "@/actions";

import styles from "./index.module.css";

export default async function ExchangersList() {
  const exchangers = await getExchangersList();

  return (
    <div className={styles.exchangers}>
      <h3 className={styles.title}>обмінні пункти</h3>
      <div className={styles.list}>
        {exchangers.map((exchanger) => (
          <div className={styles.exchanger} key={`exchanger-${exchanger.id}`}>
            <Link
              className={styles.location}
              href={exchanger.address_map}
              target="_blank"
            >
              <div className={styles.iconWrapper}>
                <Location className={styles.icon} />
              </div>
              <span className={styles.locationText}>Маршрут</span>
            </Link>
            <div className={styles.info}>
              <span className={styles.address}>{exchanger.address}</span>
              <span className={styles.hours}>{exchanger.working_hours}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
