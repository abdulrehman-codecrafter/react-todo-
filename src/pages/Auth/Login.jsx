import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AuthContext } from "../../Contexts/AuthContext";

const initialState = { email: "", password: "" };

export default function Login() {

  const {setIsAuthenticated}=useContext(AuthContext)
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState((preState) => ({ ...preState, [e.target.name]: e.target.value }));
    console.log(state);
  };

  const handleLogin = () => {
    event.preventDefault()
    const { email, password } = state;
    const users = JSON.parse(localStorage.getItem("users"));
    if(email===""||password==="") return toast.error("Enter All Credentials")
    const userFound = users.find((user) => {
      return user.email === email && user.password === password;
    });

    if (!userFound) {
      return toast.error("Invalid Email or Password");
    } else {
      localStorage.setItem("LoggedUser",JSON.stringify( userFound))
      navigate("/frontened/home");
      setIsAuthenticated("true")
      localStorage.setItem("isAuthenticated","true")
    }
  };
  return (
    <>
      <Toaster richColors position="top-right" />

      <div className="LOGIN">
        <div className="container ">
          <div className="login d-flex justify-content-center align-items-center">
            <div className="login-page">
              <h1 className="mb-5 text-center  mt-3">Login</h1>
              <form action="" onSubmit={handleLogin}>
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
                <div className="input-group mb-1">
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
                <div className="text-end ">
                  <Link
                    to="/auth/forgetpassword"
                    className="btn text-secondary ms-3"
                  >
                    Forget Password ?
                  </Link>
                </div>
                {/* <input
                  type="submit"
                  value="Login"
                  className="btn w-100 rounded-5 btn-outline-success px-4 me-3 mb-2 mt-2"
                /> */}
                <div className="login-btn" onClick={handleLogin}>
                  <button>
                    Login
                    <div className="arrow-wrapper">
                      <div className="arrow"></div>
                    </div>
                  </button>
                </div>
              </form>
              <div className="toggle mt-2 text-center">
                <span className=" me-1">Don't have an account</span>
                <Link to="/auth/register">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
