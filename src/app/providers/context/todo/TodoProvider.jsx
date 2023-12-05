// react
import { useState } from "react";
// context
import { TodoContext } from "./TodoContext";

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const arrOfCompletedTasks = todos.filter((todo) => todo.completed === true);

  const addTodo = (todo) => {
    const todosWithAddedTodo = [...todos, todo];

    setTodos(todosWithAddedTodo);
  };

  const deleteTodo = (id) => {
    const todosWithoutDeletedTodo = todos.filter((todo) => todo.id !== id);

    setTodos(todosWithoutDeletedTodo);
  };

  const updateTodo = (updatedTodo) => {
    const todosWithUpdatedTodo = todos.map((todo) =>
      updatedTodo.id === todo.id ? { ...updatedTodo } : todo
    );

    setTodos(todosWithUpdatedTodo);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
