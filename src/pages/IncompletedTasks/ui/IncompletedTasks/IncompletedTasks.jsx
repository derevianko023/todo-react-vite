// hooks
import { useTodoContext } from "@/shared/libs/hooks/useTodoContext";
// ui
import { TodoTask } from "@/widgets/Todo/ui/TodoTask/TodoTask";

export const IncompletedTasks = () => {
  const { todos } = useTodoContext();
  const arrOfIncompletedTasks = todos.filter((todo) => todo.completed === false);

  return <div>My incompleted tasks
  {arrOfIncompletedTasks.map((todo) => (
    <TodoTask
      key={todo.id}
      id={todo.id}
      text={todo.text}
      completed={todo.completed}
    />
  ))}</div>;
};
