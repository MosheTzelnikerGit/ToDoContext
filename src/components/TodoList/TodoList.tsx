// src/components/TodoList.tsx
import React from "react";
import { useTodo } from "../../context/TodoContext";
import "./TodoList.css";

const TodoList: React.FC = () => {
  const { todos, toggleTodo, removeTodo } = useTodo();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          <span onClick={() => toggleTodo(todo.id)}>
            {todo.text}
          </span>
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
          <button >Update</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
