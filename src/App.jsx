import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import useTask from './Hook/useTask'

//Hapus semua section
function App() {
  const [count, setCount] = useState(0);
  const [tasks, addtask] = useTask();
  return (
    <>
    <nav>
      <label>STUDY REACT</label>
    </nav>
    
    <h1>Todo App</h1>
    <p>Ini adalah aplikasi todo app</p>

    <TodoForm onAddTask={addtask}/>
    <TodoList/>
    </>
  )
}

export default App