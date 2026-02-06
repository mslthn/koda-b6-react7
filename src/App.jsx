import { useState, useRef } from 'react'

function App() {
  const [todo, setTodo] = useState([])
  const [newTask, setNewTask] = useState("")
  const inputRef = useRef(null)

  const handleAddTask = (e) => {
    if(newTask.trim() !== ""){
      setTodo([...todo, {completed:false, Text:newTask, Date: new Date().toLocaleDateString()}])
      setNewTask("")
    }
  }

  const handleComplete = (taskIndex) => {
    setTodo(todo => 
      todo.map((task, index) => 
        index === taskIndex ? {...task, completed: !task.completed} : task
      )
    )
  }

  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#BFC6C4] mt-5 h-150 rounded-2xl">
        <h1 className="text-2xl flex justify-end mr-5 mt-3">TODO</h1>
        <form className="bg-[#E8E2D8] mx-3 h-12 w-96 rounded-xl flex items-center px-5 gap-5">
          <input className="outline-none bg-transparent w-full text-gray-700" 
            type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyDown={(e)=> e.key === 'Enter' && handleAddTask } placeholder='Add item'/>
          <button className="bg-[#ACBAC4] w-8 h-8 rounded-full text-white font-bold"
            type="submit">
            {/* // onClick={() => setTodo((todo) => )}> */}
            {/* // + {todo} */}
          +</button>
        </form>
        <div>

        </div>
      </div>
    </div>
  )
}

export default App
