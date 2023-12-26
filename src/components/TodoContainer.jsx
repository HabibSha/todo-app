import React from "react";

import { RiDeleteBin6Line } from "react-icons/ri";

const TodoContainer = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;

  const handleClick = (id) => {
    props.onRemoveTodo(id);
  };

  return (
    <div className="bg-gray-900 mb-[8px] p-[8px] rounded-md relative">
      <h1 className="text-white text-xl font-bold">{title}</h1>
      <p className="text-gray-400 my-[8px]">{desc}</p>
      <RiDeleteBin6Line
        onClick={() => {
          handleClick(id);
        }}
        className="text-red-600 cursor-pointer mx-[12px] text-[30px] absolute right-0 top-7"
      />
    </div>
  );
};

export default TodoContainer;
