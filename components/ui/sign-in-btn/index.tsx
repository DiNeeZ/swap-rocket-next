import styles from "./index.module.css";
import React from "react";

type SignInBtnProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.PropsWithChildren;

export function SignInBtn({ children, ...otherProps }: SignInBtnProps) {
  return (
    <a className={styles.btn} {...otherProps}>
      {children}
    </a>
  );
}
