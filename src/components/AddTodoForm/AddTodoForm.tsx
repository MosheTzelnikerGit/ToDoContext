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
        <div>
            <h1>Add Todo</h1>
        <form onSubmit={handleSubmit}>
            <input className="input" type="text"
             value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter new todo"
              />
            <button type="submit">Add Todo</button>
        </form>
        </div>
    );
};

export default AddTodoForm