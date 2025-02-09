import styles from './index.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.PropsWithChildren;
export default function Button({ children, ...otherProps }: ButtonProps) {
  return (
    <button className={styles.btn} {...otherProps}>
      {children}
    </button>
  );
}
