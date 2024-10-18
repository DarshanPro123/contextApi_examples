// import React from "react";
// import { useTodo } from "../contexts";
// import { useForm } from "react-hook-form";

// const TodoList = () => {
//   const { reset } = useForm();

//   const { todos, addTodo, deleteTodo } = useTodo();
//   return (
//     <ul>
//       {todos.map((task) => (
//         <li
//           key={task.id}
//           className="flex justify-between border p-3 rounded-md mt-5"
//         >
//           <span>{task.todo}</span>
//           <div>
//             <span
//               className="cursor-pointer mr-5"
//               onClick={() => reset({ id: task.id, todo: task.todo })}
//             >
//               📂
//             </span>
//             <span
//               className="cursor-pointer"
//               onClick={() => deleteTodo(task.todo, task.id)}
//             >
//               ❎
//             </span>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;
