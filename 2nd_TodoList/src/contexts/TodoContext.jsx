import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [],

  addTodo: () => {},
  deleteTodo: () => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
