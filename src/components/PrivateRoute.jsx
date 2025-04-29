import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const {user, loading} = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? children : <Navigate to="/login" />;
};


export default PrivateRoute();
