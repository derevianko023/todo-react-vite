// hooks
import { useTodoContext } from "@/shared/libs/hooks/useTodoContext";
// ui
import { TodoTask } from "../../../HomePage/ui/Todo/ui/TodoTask/TodoTask";
//styles
import styles from "./CompletedTasks.module.scss";

export const CompletedTasks = () => {
  const { arrOfCompletedTasks } = useTodoContext();

  console.log(arrOfCompletedTasks);

  return (
    <div className={styles.contentWrapper}>
      {arrOfCompletedTasks.length >= 1 ? (
        <>
          <h2 className={styles.header}>My completed tasks</h2>
          <ul className={styles.list}>
            {arrOfCompletedTasks.map((todo) => (
              <TodoTask
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
              />
            ))}
          </ul>
        </>
      ) : (
        <h2 className={styles.header}>There are no completed tasks yet</h2>
      )}
    </div>
  );
};
