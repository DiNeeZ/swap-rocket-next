import styles from "./index.module.css";

type ButtonProps = {
  size?: "small" | "default";
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.PropsWithChildren;
export default function Button({
  children,
  size = "default",
  ...otherProps
}: ButtonProps) {
  return (
    <button
      className={`${styles.btn}${
        size === "small" ? ` ${styles.btnSmall}` : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
