import { Container } from "@/components/ui/container";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <div>Swap Rocket - Private Exchange. Main Section</div>
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
