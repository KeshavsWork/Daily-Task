import React from 'react'
import { MdAddTask } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="">
    <nav className='flex justify-between bg-slate-700 text-white py-4'>
      <span className='font-bold text-xl mx-9 flex' >
      <button onClick={(e) => { handleDelete(e, item.id) }} className='mx-1 bg-gray-700 hover:bg-gray-950 p-1.5 py-1 rounded-md font-bold'><MdAddTask />
      </button>
          <h1>
            Daily Tasks
          </h1> 
         </span>
      <ul className='flex gap-8 mx-9 '  >
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
