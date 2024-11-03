import React, { useState } from "react";
import { useTodo } from "../../context/TodoContext";
import "./AddTodoForm.css";

const AddTodoForm:React.FC = () => {

    const { addTodo } = useTodo();

    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
             value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter new todo"
              />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodoForm