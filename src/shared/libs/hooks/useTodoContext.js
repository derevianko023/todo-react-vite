// react
import { useContext } from "react";
// context
import { TodoContext } from "@/app/providers/context/todo/TodoContext";

export const useTodoContext = () => {
  return useContext(TodoContext);
};
