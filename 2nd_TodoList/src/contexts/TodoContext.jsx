import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [],
  // {
  //   todo: "task1",
  //   id: 1,
  // },

  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
