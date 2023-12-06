// styles
import styles from "./HomePage.module.scss";
//widgets
import { Todo } from "@/pages/HomePage/ui/Todo";

export const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <Todo></Todo>
    </div>
  )
}
