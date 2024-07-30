import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Auth from './Auth'
import Frontened from './Frontened'
import Login from './Auth/Login'

export default function Index
() {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='auth/*' element={<Auth />} />
        <Route path='frontened/*' element={<Frontened />} />
    </Routes>
  )
}
