import { Container } from '../ui/container';
import styles from './index.module.css';


export function Contacts() {
  return (
    <section>
      <Container>
        <div className={styles.contactRow}>
        <span className={styles.contactText}>
          <h2 className={styles.servicesTitle}>Зв'язок з нами</h2>
          <p className={styles.serviceText}>Наша команда завжди рада допомогти та відповісти на всі ваші запитання.</p>
        </span>
        <ul className={styles.contactList}>
          <li className={styles.serviceItem}>
            <div className={styles.serviceContent}>
              <h3 className={styles.contactName}>Керівник</h3>
              <a href="tel:+380634765088" className={styles.contactTel}>063 476 50 88</a>
              <a href="https://t.me/private_obmen" target="_blank">
                {/* <img src="/telegram_logo.svg" alt="https://t.me/private_obmen" > */}
              </a>
            </div>
          </li>
          <li className={styles.serviceItem}>
            <div className={styles.serviceContent}>
              <h3 className={styles.contactName}>Менеджер</h3>
              <a href="tel:+380967228090" className={styles.contactTel}>096 722 80 90</a>
            </div>
          </li>
        </ul>
        </div>

      </Container>
    </section>
  );
}
