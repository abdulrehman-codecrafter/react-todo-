import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import todologo from "../../assets/todologo.png";


export default function Header() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark text-white"
      style={{ backgroundColor: "#011638" }}
    >
      <div className="container">
        <Link to="/frontened/home" className="navbar-brand" href="#">
          <img
            src={todologo}
            alt=""
            style={{ width: "32px", }}
            className="me-2"
          />
          <span style={{ fontSize: "18px", color: "#4db3ca" }}>
            Home
          </span>
        </Link>
        {isAuthenticated === "true" ? (
          <div className="d-flex" id="">
            <span className="me-3 mt-1">
              {JSON.parse(localStorage.getItem("LoggedUser")).email}
            </span>
            {/* <button className="btn btn-danger" onClick={logout}>Logout</button> */}
            <button className="logout-Btn" onClick={logout}>
              <div className="sign ms-1" >
                <svg viewBox="0 0 512 512">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>

              <div className="text">Logout</div>
            </button>
          </div>
        ) : (
          <Link to="/" className="btn btn-danger">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
