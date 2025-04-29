import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import PrivateRoute from './components/PrivateRoute';
import Kanban from './components/Kanban'
import VanishList from './components/VanishList'

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
      {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />

      {/* Protected routes */}
        <Route path='/kanban' 
          element= {
            <PrivateRoute>
              <VanishList />
              <Kanban />
            </PrivateRoute>
          }
        />
        
      </Routes>
    </div>
  );
}

export default App
