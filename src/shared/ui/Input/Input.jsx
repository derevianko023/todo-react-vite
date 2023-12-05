//styles
import styles from './Input.module.scss';

export const Input = ({ value, onChange, type, placeholder }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className={styles.input}
    />
  );
};
