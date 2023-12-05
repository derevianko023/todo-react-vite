// styles
import styles from "./HomePage.module.scss";
//widgets
import { Todo } from "@/widgets/Todo";

export const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <Todo></Todo>
    </div>
  )
}
