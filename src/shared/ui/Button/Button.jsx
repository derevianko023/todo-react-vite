import styles from "./Button.module.scss";

export const Button = ({ onClick, children, disabled }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
