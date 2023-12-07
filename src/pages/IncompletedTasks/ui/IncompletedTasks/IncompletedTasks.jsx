// hooks
import { useTodoContext } from "@/shared/libs/hooks/useTodoContext";
// ui
import { TodoTask } from "../../../HomePage/ui/Todo/ui/TodoTask/TodoTask";
//styles
import styles from "./IncompletedTasks.module.scss";

export const IncompletedTasks = () => {
  const { arrOfIncompletedTasks } = useTodoContext();

  console.log(arrOfIncompletedTasks);

  return (
    <div className={styles.contentWrapper}>
      {arrOfIncompletedTasks.length >= 1 ? (
        <>
          <h2 className={styles.header}>My incompleted tasks</h2>
          <ul className={styles.list}>
            {arrOfIncompletedTasks.map((todo) => (
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
        <h2 className={styles.header}>There are no incompleted tasks yet</h2>
      )}
    </div>
  );
};
