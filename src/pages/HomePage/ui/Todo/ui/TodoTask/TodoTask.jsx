// react
import { useState } from "react";
// hooks
import { useTodoContext } from "@/shared/libs/hooks/useTodoContext";
// ui
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
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
      className={`${styles.TodoTask} ${
        completed ? styles.completedTask : ""
      }`}
    >
      {!isEditing ? (
        <>
          <Input
            type="checkbox"
            checked={completed}
            onChange={onToggleCompletedClick}
            className={styles.input}
          />
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
