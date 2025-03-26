import { Container } from '../ui/container';
import styles from './index.module.css';

import { dataServices } from "@/data";

export function Services() {
  return (
    <section id="services">
        <Container>
          <div className={styles.services}>
            <h2 className={styles.servicesTitle}>Наші послуги</h2>
            <ul className={styles.List}>
              {dataServices.map((step) => (
                <li className={styles.serviceItem} key={step.id}>
                  <div className={styles.serviceContent}>
                    <span><img src={step.icon} alt="" /></span>
                    <h3 className={styles.serviceTitle}>{step.title}</h3>
                    <p className={styles.serviceText}>{step.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </Container>
    </section>
  );
}
