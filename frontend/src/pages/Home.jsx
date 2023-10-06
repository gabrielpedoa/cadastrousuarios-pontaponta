import React from 'react'
import { useAuth } from '../Context/AuthContext'



export const Home = () => {
  const {logout} = useAuth()
  
  return (
    <div>
        <h1>Você está logado</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

