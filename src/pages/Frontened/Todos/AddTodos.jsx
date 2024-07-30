import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";

const initialState = { title: "", description: "", location: "", date: "" };

export default function AddTodos() {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState((preState) => {
      return { ...preState, [e.target.name]: e.target.value };
    });
    console.log(state);
  };

  const handleAddTodo = () => {
    event.preventDefault();
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    const { title, description, location, date } = state;

    if ((title === "", description === "", location === "", date === ""))
      return toast.error("Fill All Inputs");

    let todo = {
      title,
      description,
      location,
      date,
      status: "pending",
      dateCreates: new Date(),
      id: Math.random().toString(36).slice(2),
      user_id: JSON.parse(localStorage.getItem("LoggedUser")).user_id
    };

    todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(todos))
    toast.success("Todo Added Successfully")
    setState(initialState)

    console.log(todo)
  };
  return (
    <>
      <Toaster richColors position="top-right" />

      <div className="ADDTODO">
        <Header />
        <div className="ADDTODO">
          <div className="container ">
            <div className="addtodo d-flex justify-content-center align-items-center">
              <div className="addtodo-page">
                <h1 className="mb-5 text-center text-white  mt-3">Add Todo</h1>

                <form action="" onSubmit={handleAddTodo}>
                  <div className="input-group first-input-group mb-4">
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control ps-2 "
                      name="title"
                      id="title"
                      value={state.title}
                      placeholder=" Title"
                    />
                  </div>
                  <div className="input-group first-input-group mb-4">
                    <textarea
                      onChange={handleChange}
                      type="email"
                      className="form-control "
                      name="description"
                      id="description"
                      value={state.description}
                      placeholder=" Description"
                    />
                  </div>
                  <div className="input-group first-input-group mb-4">
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control ps-3 "
                      name="location"
                      id="location"
                      value={state.location}
                      placeholder="Location"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      onChange={handleChange}
                      type="date"
                      className=" form-control ps-3 text-dark mb-1"
                      name="date"
                      id="date"
                      value={state.date}
                    />
                  </div>
                  <div className="addtodo-btn">
                    <button onClick={handleAddTodo}>
                      Add Todo
                      <div className="arrow-wrapper">
                        <div className="arrow"></div>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
