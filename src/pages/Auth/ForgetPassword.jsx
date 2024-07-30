import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Toaster,toast } from "sonner";

const initialState = { email: "", password: "", confirmPassword: "" };
export default function ForgetPassword() {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState((preState) => {
      return { ...preState, [e.target.name]: e.target.value };
    });
    console.log(state);
  };

  const handleResetPassword = () => {
    event.preventDefault();
    let users = JSON.parse(localStorage.getItem("users"));
    const { email, password, confirmPassword } = state;
    if (email === "" || password === "" || confirmPassword === "")
      return toast.error("Enter All Credentials")
    if(password!==confirmPassword){
      return toast.error("Passwords Should Match")
    }
    if(password.length<6){
      return toast.error("Password Length Must Be Greater Than 6")
    }

    users=users.map((user)=>{
      if(user.email===email){
        return ({...user,password:confirmPassword})
      }
      return user
    })

    localStorage.setItem("users",JSON.stringify(users))
    setState(initialState)
    toast.success("Password Reset Successfully")
  };

  return (
    <>
      <Toaster richColors position="top-right" />

      <div className="REGISTER">
        <div className="container ">
          <div className="forget-password d-flex justify-content-center align-items-center">
            <div className="forget-password-page">
              <h1 className="mb-5 text-center  mt-3">Reset Password</h1>
              <form action="" onSubmit={handleResetPassword}>
                <div className="input-group first-input-group mb-4">
                  <input
                    type="email"
                    className=" border-0"
                    name="email"
                    id="email"
                    placeholder=" "
                    value={state.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email">Email</label>
                  {/* <MdEmail style={{ fontSize: "22px" }} className="mb-2" /> */}
                </div>

                <div className="input-group first-input-group">
                  <input
                    type="password"
                    className=" border-0"
                    name="password"
                    id="password"
                    placeholder=" "
                    value={state.password}
                    onChange={handleChange}
                  />
                  <label htmlFor="password">Password</label>
                  {/* <FaLock style={{ fontSize: "21px" }} className="mb-2" /> */}
                </div>

                <div className="input-group mb-3">
                  <input
                    type="password"
                    className=" border-0 mb-1"
                    name="confirmPassword"
                    id="confirmPassword"
                    // required=""
                    placeholder=" "
                    value={state.confirmPassword}
                    onChange={handleChange}
                  />

                  <label htmlFor="confirmPassword"> Confirm Password</label>
                  {/* <FaLock style={{ fontSize: "19px" }} className="mb-2" /> */}
                </div>

                {/* <input
                  type="submit"
                  value="Reset Password"
                  className="btn w-100 rounded-5 btn-outline-success px-4 me-3 mb-2 mt-2"
                /> */}
                <div className="reset-btn" onClick={handleResetPassword}>
                  <button>
                    Reset Password
                    <div className="arrow-wrapper">
                      <div className="arrow"></div>
                    </div>
                  </button>
                </div>
              </form>
              <div className="toggle mt-2 text-center">
                <span className=" me-1">Reset Password ? </span>
                <Link to="/auth/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
