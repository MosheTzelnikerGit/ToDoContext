import React from "react";
import { useTodo } from "../../context/TodoContext";
import "./TodoList.css";

const TodoList: React.FC = () => {
  const { todos, toggleTodo, removeTodo } = useTodo();
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <span
           className={'todo-text ' + (todo.completed ? 'completed' : '')}
           onClick={() => toggleTodo(todo.id)}>
            {todo.text}
          </span>
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
