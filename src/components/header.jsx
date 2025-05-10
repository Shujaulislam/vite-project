import React from 'react'
import { Link } from 'react-router'

const header = () => {
  return (
    <div className=' min-h-screen w-full bg-amber-400 text-black'>
      <Link to="/">Home</Link>
      <Link to="/components/Kanban">Kanban</Link>
      <Link to="/components/VanishList">To-do List</Link>
      <Link to="/pages/login">Login</Link>
      <Link to="/pages/register">Register</Link>
    </div>
  )
}

export default header
