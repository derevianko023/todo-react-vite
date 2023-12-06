// hooks
import { useTodoContext } from "@/shared/libs/hooks/useTodoContext";
// ui
import { TodoTask } from "../TodoTask/TodoTask";
// styles
import styles from "./TodoList.module.scss";

export const TodoList = () => {
  const { todos } = useTodoContext();

  return (
    <ul className={styles.TodoList}>
      {todos.map((todo) => (
        <TodoTask key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
      ))}
    </ul>
  );
};
