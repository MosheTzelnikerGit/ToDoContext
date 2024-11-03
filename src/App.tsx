import React from 'react'
import { TodoProvider } from './context/TodoContext'
import TodoList from './components/TodoList/TodoList'
import AddTodoForm from './components/AddTodoForm/AddTodoForm'


const App: React.FC = () => {
  return (
    <TodoProvider>
      <div className="App-container">
        <AddTodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  )
}

export default App
