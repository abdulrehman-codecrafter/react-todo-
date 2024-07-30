import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Todos from './Todos'
import Users from './Users'

export default function index() {
  return (
    <Routes>
        <Route path='home' element={<Home />} />
        <Route path='todos/*' element={<Todos />} />
        <Route path='users' element={<Users />} />
        
    </Routes>
)
}
