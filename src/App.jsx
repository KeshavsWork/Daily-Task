import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdAddTask } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFInished, setshowFInished] = useState(false)

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(todoString);
      setTodos(todos)
    }
  }, [])

  const savetoLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }


  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter(item => {
      return item.id !== id;
    });
    setTodos(newTodos);
    savetoLS();
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id;
    });
    setTodos(newTodos);
    savetoLS();
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    savetoLS();
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    savetoLS();
  }

  const toggleFinished = (e) => {
    setshowFInished(!showFInished);
  }
  
  return (
    <>
      <Navbar></Navbar>
      <div className="mx-3 md:container md:mx-auto bg-gray-500 md:w-1/2 text-white text-lg my-5 rounded-xl p-5 min-h-[80vh] ">
      <h2 className='text-xl font-bold flex justify-center'>Daily Tasks - Manage your daily tasks at one place</h2>
        <div className="addtodo my-5 flex flex-col gap-3">
          <h2 className='font-bold my-4'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} className=' rounded-xl text-green-900 w-full px-3' type="text" />
          <button onClick={handleAdd} disabled={todo.length<3} className=' bg-gray-700 hover:bg-gray-950 p-1 py-0 rounded-md '>Save</button>
        </div>

        <input onChange={toggleFinished} type="checkbox" checked={showFInished} />Show Finished
        <div className='font-bold my-4'>
          <h2>Your Todos</h2>
        </div>
        <div className="todos text-sm m-5 ">
          {todos.length === 0 && <div className=''> No Todos to Display</div>}
          {todos.map(item => {

            return (showFInished || !item.isCompleted) && <div key={item.id} className="todo flex gap-5 md:w-3/4 justify-between my-2">
              <div className='flex gap-5'> 
                <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
                <div className={item.isCompleted ? "line-through" : ""} >
                  {item.todo}
                </div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e) => { handleEdit(e, item.id) }} className='mx-1 bg-gray-700 hover:bg-gray-950 p-1.5 py-1 rounded-md font-bold'><FaEdit />
                </button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='mx-1 bg-gray-700 hover:bg-gray-950 p-1.5 py-1 rounded-md font-bold'><MdDelete />
                </button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
