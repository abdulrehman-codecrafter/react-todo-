import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ShowTodos from './ShowTodos'
import AddTodos from './AddTodos'

export default function index() {
  return (
    <Routes>
        <Route path='showtodo' element={<ShowTodos />} />
        <Route path='addtodo' element={<AddTodos />} />
    </Routes>
)
}
