import React from "react";
import Header from "../../../components/Header/Header";
import Image from "../../../assets/user.jpg";
import { Link } from "react-router-dom";


export default function Home() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const users = JSON.parse(localStorage.getItem("users"))|| [];
  const loggedUser = JSON.parse(localStorage.getItem("LoggedUser"))||{};

  const filteredTodos = todos.filter((todo) => {
    return todo.user_id === loggedUser.user_id;
  });
  return (
    <>
      <Header />
      <div className="home-page">
        <div className="container d-flex justify-content-center align-items-center flex-wrap ">
          <div className="card1">
            <div className="card m-3">
              <img
                src="https://www.shutterstock.com/image-vector/3d-white-clipboard-task-management-600nw-2108142080.jpg"
                alt=""
              />
              <div className="card-content p-2">
                <h2>Todos</h2>
                <p className="text-success">Active : {filteredTodos.length} </p>
                <Link
                  to="/frontened/todos/showtodo"
                  className="cta"
                  style={{ textDecoration: "none" }}
                >
                  <span className="manage-btn">Manage</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="card m-3">
              <img
                // src="https://www.shutterstock.com/shutterstock/photos/2141124049/display_1500/stock-photo-successful-caucasian-young-man-student-freelancer-using-laptop-watching-webinars-working-remotely-2141124049.jpg"
                src="https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393667.jpg?size=626&ext=jpg&ga=GA1.1.1250833130.1722085946&semt=ais_user"
                alt=""
              />
              <div className="card-content p-2">
                <h2>Users</h2>
                <p className="text-success">Active : {users.length}</p>
                <Link
                  to="/frontened/users"
                  className="cta"
                  style={{ textDecoration: "none" }}
                >
                  <span className="manage-btn">Manage</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
