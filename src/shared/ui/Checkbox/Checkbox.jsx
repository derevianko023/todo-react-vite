// styles
import styles from "./Checkbox.module.scss";

export const Checkbox = ({ checked, onChange }) => {
  return <input type="checkbox" checked={checked} onChange={onChange} />;
};
