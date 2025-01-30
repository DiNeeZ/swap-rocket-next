import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

import styles from "./index.module.css";
import { SignInBtn } from "@/components/ui/sign-in-btn";

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <Link className={styles.logo} href="/" title="Главная страница">
            <Image
              width={146}
              height={40}
              src="logo.svg"
              alt="private-exchange"
            />
          </Link>
          <SignInBtn
            href="https://swap-rocket-currency-api.onrender.com/admin/"
            target="_blank"
            title="Войти admin"
          >
            Войти
          </SignInBtn>
        </nav>
      </Container>
    </header>
  );
}
