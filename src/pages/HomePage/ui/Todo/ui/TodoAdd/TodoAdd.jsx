// react
import { useContext, useState } from "react";
// context
import { TodoContext } from "@/app/providers/context/todo/TodoContext";
// libs
import { v4 as uuidv4 } from "uuid";
// ui
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
//styles
import styles from "./TodoAdd.module.scss";

export const TodoAdd = () => {
  const [todoText, setTodoText] = useState("");

  const { addTodo } = useContext(TodoContext);

  const isValidTodoText = todoText.trim().length > 4;

  const onTodoTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const onAddTodoClick = () => {
    const todo = {
      text: todoText,
      id: uuidv4(),
      completed: false
    };

    addTodo(todo);

    setTodoText("");
  };

  return (
    <div className={styles.wrapper}>
      <Input
        onChange={onTodoTextChange}
        value={todoText}
        placeholder="Write a task..."
        type="text"

      />
      <Button onClick={onAddTodoClick} disabled={!isValidTodoText}>
        Add New Todo
      </Button>
    </div>
  );
};
