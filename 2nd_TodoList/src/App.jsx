import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import { useForm } from "react-hook-form";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoForm from "./components/TodoForm";

const getData = () => {
  const data = localStorage.getItem("Todos");
  if (data) return JSON.parse(data);
  return [];
};

function App() {
  const { reset } = useForm();
  const [todos, setTodos] = useState(getData());
  const [editTodo, setEditTodo] = useState("");
  const addTodo = (todo) => {
    if (!todo) {
      toast.error("Please enter the task");
      return;
    }

    const { id } = todo;

    if (id) {
      setTodos((newTask) => newTask.map((t) => (t.id === id ? todo : t)));
      toast.info("Task updated successfully");
    } else {
      setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
      toast.success("Task added successfully");
    }

    reset({ id: null, todo: "" });
  };

  const handleUpdate = (id, name) => {
    setEditTodo({ id, name });
  };

  const deleteTodo = (todo, id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirm) {
      const newTasks = todos.filter((todo) => todo.id !== id);
      setTodos(newTasks);
      toast.error(`${todo} deleted successfully`);
    }
  };

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo }}>
      <div className="h-screen bg-gradient-to-b from-[#6a1d39] via-[#96369d] to-[#6a1d4e] flex items-center justify-center">
        <div className="w-10/12 md:w-1/2 lg:w-1/3 h-auto p-10 mt-10 text-center mx-auto bg-gray-50 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            My Todo Form ☑️{" "}
          </h1>

          <TodoForm editTodo={editTodo} setEditTodo={setEditTodo} />

          <ul>
            {todos.map((task) => (
              <li
                key={task.id}
                className="flex justify-between border p-3 rounded-md mt-5"
              >
                <span>{task.todo}</span>
                <div>
                  <span
                    className="cursor-pointer mr-5"
                    onClick={() => handleUpdate(task.id, task.todo)}
                  >
                    📂
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => deleteTodo(task.todo, task.id)}
                  >
                    ❎
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ToastContainer
          position="bottom-right"
          pauseOnHover={false}
          autoClose={2000}
          hideProgressBar={true}
          theme="colored"
          transition={Slide}
        />
      </div>
    </TodoProvider>
  );
}

export default App;
