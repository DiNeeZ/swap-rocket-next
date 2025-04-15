import Link from 'next/link'
import { Container } from "@/components/ui/container";
import { RatesList } from "@/components/currency-rates/rates-list-ssr";
import { CardContainer } from '@/components/ui/card-container';
import CurrentTime from "@/components/current-time";
import type { Metadata } from "next";


import styles from "./page.module.css";


export const metadata: Metadata = {
  title: "Курс валют в обменниках EXPRIVAT – доллар и евро сегодня",
  description:
    "Актуальный курс доллара и евро в обменниках Одессы. Сравните курс доллара к гривне, курс евро к гривне и выберите лучший обменник в Одессе.",
  metadataBase: new URL("https://www.exprivat.com.ua/"),
  keywords:"курс доллара в обменниках, курс валюты одесса, курс евро к гривне в обменниках, обменник одесса, доллар в грн в обменниках",
};

export default function Kurs() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <div className={styles.inner}>

            <CardContainer>
                <div className={styles.col} itemScope itemType="https://schema.org/WebPage">
                    <RatesList />
                </div>
            </CardContainer>
            <div className={styles.textWrapper}>
              <h1 className={styles.title}>
                Курс валют у обмінниках на <CurrentTime />
              </h1>
                <p className={styles.pageP}>
                  Завжди в наявності є гривня та валюта, якщо у Вас велика сума на замовлення ми обов&apos;язково вам надамо її
                </p>
                <p className={styles.pageP}>
                  Ми завжди стежимо за актуальним ринковим курсом валют, у нас ви можете обміняти за найвигіднішим курсом
                </p>
                <p className={styles.pageP}>
                  Ми пропонуємо нашим клієнтам найнижчу комісію за купівлю старої валюти, оскільки ми працюємо напряму без посередників.
                </p>

            <Link href="/" className={styles.button}>Як забронювати курс?</Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}