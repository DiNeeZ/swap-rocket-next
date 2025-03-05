import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

import styles from "./index.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <Link className={styles.logo} href="/" title="Главная страница">
            <Image
              width={32}
              height={26}
              src="logo.svg"
              alt="private-exchange"
              className={styles.logoImg}
            />
            Private <span>exchanges</span>
          </Link>
        </nav>
      </Container>
    </header>
  );
}
