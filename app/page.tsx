import { Container } from '@/components/ui/container';
import { MainForm } from '@/components/main-form';
import styles from './page.module.css';
import { dataSteps } from '@/data';

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <div className={styles.inner}>
            <div className={styles.textWrapper}>
              <h1 className={styles.title}>
                Просто та вигідно обміняти валюту
              </h1>
              <p className={styles.subtitle}>
                Введіть суму, яку хочете продати або купити, і натисніть «Знайти
                де обміняти»
              </p>
              <p className={styles.rate}>Оптовий курс від 500 $/€</p>
            </div>
            <MainForm />
          </div>
        </Container>
      </section>

      {false && (
        <section>
          <Container>
            <div>Swap Rocket - Private Exchange. Output</div>
          </Container>
        </section>
      )}

      <section>
        <Container>
          <div className={styles.steps}>
            <h2 className={styles.stepsTitle}>Це просто:</h2>
            <ul className={styles.stepsList}>
              {dataSteps.map((step, index) => (
                <li className={styles.stepsItem} key={step.id}>
                  <span className={styles.stepsNumber}>{index + 1}</span>
                  <div className={styles.stepsContent}>
                    <h3 className={styles.stepsTitle}>{step.title}</h3>
                    <p className={styles.stepsText}>{step.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
}
