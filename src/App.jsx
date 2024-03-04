import { useState } from 'react'
import './App.css'
import {TodoList} from './TodoList'

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      setTasks([...tasks, {id:Date.now(),name:inputText}])
      setInputText('')
      setError('')
      e.currentTarget.reset()
    } else {
      setError('Please enter a task to add')
    }
  }
  
  const handleInputText = (e) => {
    setInputText(e.target.value);
    if (inputText.trim() !== '') {
      setError('')
    }
  }

  const deleteHandler = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <>
      {error !== '' && <span style={{color:'red'}}>{error}</span>}
      <h1>Todo task list</h1>
      <form onSubmit={handleSubmit} style={{display:"flex", gap:'15px'}}>
        <input type="text" name="task" id="input-task" onChange={handleInputText} />
        <button type="submit">Add task</button>
      </form>
      <TodoList 
        tasks={tasks}
        deleteHandler={deleteHandler} />
    </>
  )
}

export default App
