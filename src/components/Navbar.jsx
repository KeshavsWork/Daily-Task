import React from 'react'

const Navbar = () => {
  return (
    <div className="">
    <nav className='flex justify-between bg-slate-700 text-white py-4'>
      <span className='font-bold text-xl mx-9' > Daily Tasks</span>
      <ul className='flex gap-8 mx-9 '  >
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
