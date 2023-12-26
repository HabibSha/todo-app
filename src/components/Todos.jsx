import React, { useState } from "react";

const Todos = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo; // destructuring...

  const handleChange = (e) => {
    const name = e.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: e.target.value };
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onAddTodo(todo);
        setTodo({ title: "", desc: "" });
      }}
      className="bg-gray-800 w-[700px] mx-auto my-[10px] rounded-md p-[10px]"
    >
      <div className="mt-[25px] flex justify-center">
        <label htmlFor="title" className="text-white text-lg">
          Title:{" "}
        </label>
        <input
          type="text"
          onChange={handleChange}
          id="title"
          name="title"
          value={title}
          className="w-full rounded-md ml-[90px] p-[6px]"
          placeholder="Todo title"
        />
      </div>

      <div className="mt-[25px] flex justify-center">
        <label htmlFor="desc" className="text-white text-lg">
          Description:{" "}
        </label>
        <input
          type="textarea"
          onChange={handleChange}
          id="desc"
          name="desc"
          value={desc}
          className="w-full rounded-md ml-[34px] p-[6px]"
          placeholder="Todo description"
        />
      </div>
      <div className="mt-[25px] text-center">
        <button
          type="submit"
          className="text-black border-1 font-bold bg-gray-200 px-[55px] py-[4px] rounded-md"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default Todos;
