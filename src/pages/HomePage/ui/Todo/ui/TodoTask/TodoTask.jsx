// react
import { useState } from "react";
// hooks
import { useTodoContext } from "@/shared/libs/hooks/useTodoContext";
// ui
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input";
import { Checkbox } from "@/shared/ui/Checkbox";
// styles
import styles from "./TodoTask.module.scss";

export const TodoTask = ({ id, text, completed }) => {
  const [todoText, setTodoText] = useState(text);

  const [isEditing, setIsEditing] = useState(false);

  const { deleteTodo, updateTodo } = useTodoContext();

  const onTodoTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const onEditTodoClick = () => {
    setIsEditing(true);
  };

  const onSaveTodoClick = () => {
    const todo = {
      text: todoText,
      id: id,
      completed: completed,
    };
    updateTodo(todo);
    setIsEditing(false);
  };

  const onDeleteTodoClick = () => {
    deleteTodo(id);
  };
  const onToggleCompletedClick = () => {
    const todo = {
      text: text,
      id: id,
      completed: !completed,
    };
    updateTodo(todo);
  };

  return (
    <li
      className={`${styles.TodoTask} ${completed ? styles.completedTask : ""}`}
    >
      {!isEditing ? (
        <>
          <Checkbox checked={completed} onChange={onToggleCompletedClick} />
          <div className={styles.txtWrapper}>{text}</div>
          <div>
            <Button onClick={onEditTodoClick}>Edit</Button>
            <Button onClick={onDeleteTodoClick}>Delete</Button>
          </div>
        </>
      ) : (
        <>
          <Input value={todoText} type="text" onChange={onTodoTextChange} />
          <Button onClick={onSaveTodoClick}>Save</Button>
        </>
      )}
    </li>
  );
};
