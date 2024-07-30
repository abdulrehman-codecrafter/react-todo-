import React from "react";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { Toaster, toast } from "sonner";

const initialState = { username: "", email: "", password: "" };

export default function Register() {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState((preState) => ({ ...preState, [e.target.name]: e.target.value }));
    console.log(state);
  };

  const handleRegister = () => {
    event.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const {username,email,password}=state

    if(username===""||email===""||password==="") return toast.error("Please Fill All Credentials")
  
      const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/; 
      if(!regex.test(email)){
        return toast.error("Invalid Email")
      }
    if(password.length<6) return toast.error("Password Length Must Be Greater Than 6")

    console.log(users)

    const alreadyRegisteredUser = users.find((user) => {
      return user.email === email;
    });

    if (alreadyRegisteredUser) {
      return toast.error("User Already Registered");
    }
    let user={
      username,
      email,
      password,
      user_id: Math.random().toString(36).slice(2)
    }
    users.push(user)
    localStorage.setItem("users",JSON.stringify(users))
    setState(initialState)
    toast.success("User Registered Successfully")

  };

  return (
    <>
      <Toaster richColors position="top-right" />

      <div className="REGISTER">
        <div className="container ">
          <div className="register d-flex justify-content-center align-items-center">
            <div className="register-page">
              <h1 className="mb-5 text-center  mt-3">Register</h1>
              <form action="">
                <div className="input-group first-input-group mb-4">
                  <input
                    type="text"
                    className=" border-0"
                    name="username"
                    id="name"
                    placeholder=" "
                    value={state.username}
                    onChange={handleChange}
                  />
                  <label htmlFor="name">User Name</label>
                  {/* <FaUser  style={{fontSize:"21px"}} className="mb-2 ms-3" /> */}
                </div>
                <div className="input-group first-input-group mb-4">
                  <input
                    type="email"
                    className=" border-0"
                    name="email"
                    id="email"
                    placeholder=" "
                    onChange={handleChange}
                    value={state.email}
                  />
                  <label htmlFor="email">Email</label>
                  {/* <MdEmail style={{fontSize:"22px"}} className="mb-2" /> */}
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className=" border-0 mb-1"
                    name="password"
                    id="password"
                    // required=""
                    placeholder=" "
                    onChange={handleChange}
                    value={state.password}
                  />

                  <label htmlFor="password"> Password</label>
                  {/* <FaLock style={{fontSize:"19px"}} className="mb-2"/> */}
                </div>

                <div className="register-btn" onClick={handleRegister}>
                  <button>
                    Register
                    <div className="arrow-wrapper">
                      <div className="arrow"></div>
                    </div>
                  </button>
                </div>
              </form>
              <div className="toggle mt-2 text-center">
                <span className=" me-1">Already have an account</span>
                <Link to="/auth/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
