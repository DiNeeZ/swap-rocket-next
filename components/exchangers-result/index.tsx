"use client";

import { Container } from "../ui/container";
import styles from "./index.module.css";
import { ExchangerCard } from "../exchanger-card";
import { useExchangersStore } from "@/providers";
import { Spinner } from "../ui/spinner";

export default function ExchangersResult() {
  const { data, exchangerMode, isLoading, error } = useExchangersStore(
    (state) => state
  );

  if (isLoading) {
    return <Spinner variant="accent" />;
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
              <ExchangerCard exchanger={item} mode={exchangerMode} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
