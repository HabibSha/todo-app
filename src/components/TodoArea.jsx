import React from "react";

import TodoContainer from "./TodoContainer";

const TodoArea = (props) => {
  return (
    <div className="h-full min-h-[300px] bg-gray-800 w-[700px] mx-auto my-[10px] rounded-md p-[8px]">
      <div className="mt-[8px] p-[10px]">
        {props.todos.map((todo) => (
          <TodoContainer
            todo={todo.todo}
            id={todo.id}
            onRemoveTodo={props.onRemoveTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoArea;
