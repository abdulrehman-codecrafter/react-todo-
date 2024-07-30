import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext=createContext()

export default function AuthContextProvider(props) {
    const [isAuthenticated,setIsAuthenticated]=useState("false")
    // const [loggedUser,setLoggedUser]=useState("")
    const navigate=useNavigate();

    const logout =()=>{
        setIsAuthenticated("false")
        localStorage.removeItem("isAuthenticated")
        localStorage.removeItem("LoggedUser")
        navigate("/")
    }

    useEffect(()=>{
        setIsAuthenticated(localStorage.getItem("isAuthenticated"))
    },[])

  return (
    <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated,logout}}>
        {props.children}
    </AuthContext.Provider>
  )
}
