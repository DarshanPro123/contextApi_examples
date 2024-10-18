import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TodoContext } from "../contexts";

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, d * 1000)
    );
  };

  const onSubmit = async (data) => {
    await delay(1);
    addTodo(data);
    reset();
  };

  return (
    <>
      {isSubmitting && (
        <p className="text-[#fa689e] text-lg font-bold mb-5">Loading...</p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("todo", { required: true })}
          type="text"
          placeholder="Enter your task"
          className="border border-gray-300 py-3 px-5 rounded w-1/2 mb-5"
        />
        {errors.todo && <p className="text-red-500">This field is required</p>}
        <input
          disabled={isSubmitting}
          type="submit"
          className="border py-3 hover:bg-[#ad3c66] px-5 rounded mx-1 bg-[#fa689e] text-white cursor-pointer"
        />
      </form>
    </>
  );
};

export default TodoForm;
