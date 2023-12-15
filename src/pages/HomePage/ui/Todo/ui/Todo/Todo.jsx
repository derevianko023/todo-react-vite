// ui
import { TodoAdd } from "../TodoAdd/TodoAdd";
import { TodoList } from "../TodoList/TodoList";
// styles
import styles from "./Todo.module.scss";

export const Todo = () => {
  return (
      <div className={styles.Todo}>
        <TodoAdd />
        <TodoList />
      </div>
  );
};
