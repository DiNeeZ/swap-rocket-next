import { Container } from "@/components/ui/container";
import styles from "./page.module.css";
import { MainForm } from "@/components/main-form";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <div className={styles.inner}>
            <div className={styles.textWrapper}>
              <h1 className={styles.title}>Просто и выгодно обменять валюту</h1>
              <p className={styles.subtitle}>
                Введите сумму которую хотите продать или купить и нажмите кнопку
                для поиска обменных пунктах рядом с вами
              </p>
            </div>
            <MainForm />
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div>Swap Rocket - Private Exchange. Output</div>
        </Container>
      </section>
    </div>
  );
}
