"use client";

import { Container } from "../ui/container";
import styles from "./index.module.css";
import { ExchangerCard } from "../exchanger-card";
import { useExchangersStore } from "@/providers";

export default function ExchangersResult() {
  const { data, isLoading, error } = useExchangersStore((state) => state);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className={styles.result}>
      <Container>
        <ul className={styles.list}>
          {data?.objects.map((item) => (
            <li key={item.id}>
              <ExchangerCard exchanger={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
