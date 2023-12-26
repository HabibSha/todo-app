import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Todos from "./Todos";
import TodoArea from "./TodoArea";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {
    setTodos(() => {
      const filteredTodos = todos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };

  return (
    <div className="bg-gray-700 h-screen">
      <h1 className="text-white text-center pt-[25px] text-[50px] font-bold">
        Todo App
      </h1>
      <div>
        <Todos onAddTodo={handleAddTodo} />
      </div>
      <div className="mt-[30px]">
        <TodoArea todos={todos} onRemoveTodo={handleRemoveTodo} />
      </div>
    </div>
  );
};

export default Home;
