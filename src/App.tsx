import { FC } from 'react'
import TodoList from './components/TodoList/TodoList'
import AddTodoForm from './components/AddTodoForm/AddTodoForm'


const App: FC = () => {
  return <>
        <AddTodoForm />
        <TodoList />
      </>;
};

export default App
