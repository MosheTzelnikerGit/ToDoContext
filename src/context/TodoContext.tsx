import { FC, createContext, useState, useContext, useEffect, ReactNode } from "react";
import { Todo } from "../types/TextType";

interface TodoContextProps {
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}
interface TodoProviderProps {
    children: ReactNode;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
            {children}
        </TodoContext.Provider>
    );
}


export const useTodo = () => {
    const context = useContext(TodoContext);
    if (context === undefined) {
        throw new Error('useTodo must be used within a TodoProvider');
    }
    return context;
}





