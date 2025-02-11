import Button from "@/components/ui/button";
import type { Exchanger } from "@/types";
import styles from "./index.module.css";
import { Location } from "@/components/ui/icons";
import Link from "next/link";

export function ExchangerCard({ exchanger }: { exchanger: Exchanger }) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.info}>
          <span className={styles.rate}>41.90</span>
          <span className={styles.address}>{exchanger.address}</span>
        </div>
        <Link className={styles.location} href={"/"}>
          <div className={styles.iconWrapper}>
            <Location className={styles.icon} />
          </div>
          <span className={styles.locationText}>Маршрут</span>
        </Link>
      </div>
      <Button size="small">Забронювати</Button>
    </article>
  );
}
