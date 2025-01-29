import { Container } from "../ui/container";
import styles from "./index.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>&copy; 2022 - {new Date().getFullYear()}</Container>
    </footer>
  );
}
