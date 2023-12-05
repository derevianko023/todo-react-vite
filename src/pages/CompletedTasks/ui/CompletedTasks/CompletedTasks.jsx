// hooks
import { useTodoContext } from "@/shared/libs/hooks/useTodoContext";
// ui
import { TodoTask } from "@/widgets/Todo/ui/TodoTask/TodoTask";

export const CompletedTasks = () => {
  const { todos } = useTodoContext();
  const arrOfCompletedTasks = todos.filter((todo) => todo.completed === true);
  return (
    <div>
      My completed tasks
      {arrOfCompletedTasks.map((todo) => (
        <TodoTask
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};
