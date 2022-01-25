import React from "react";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.app.todos);

  return (
    <div>
      <h4> Your Todo List</h4>
      {todos.map((item) => (
        <div key={item.id}> {item.title} </div>
      ))}
    </div>
  );
}

export default TodoList;
