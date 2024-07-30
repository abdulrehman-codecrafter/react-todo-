import React from 'react'
import Header from '../../../components/Header/Header'
import { FaEdit } from "react-icons/fa";

export default function index() {

  let users=JSON.parse(localStorage.getItem("users"))||[];


  return (
    
    <>
      <Header />
      <div className="container">
        <div className="todo-container table-responsive">
          <h1 className="mt-5 mb-3 text-center">Users List</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Id</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.user_id}</td>
                  <td>
                    <button
                      className="btn btn-success rounded-3 me-1"
                      style={{ height: "30px", width: "42px" }}
                      // onClick={() => handleEdit(todo)}
                    >
                      <FaEdit
                        className=""
                        style={{ marginTop: "-13px", fontSize: "18px" }}
                      />
                    </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      </div>
    </>
  )
}
