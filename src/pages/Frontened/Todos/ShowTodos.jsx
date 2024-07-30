import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useTypewriter,Cursor} from 'react-simple-typewriter'

export default function ShowTodos() {

  const [text] = useTypewriter({
    words: [' TASKS'],
    loop:{}
})
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [todoToDelete, setTodoToDelete] = useState(null);
  const [todoToEdit, setTodoToEdit] = useState(null);
  const [editData, setEditData] = useState({
    title: "",
    description: "",
    date: "",
    status: "",
  });

  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const loggedUser = JSON.parse(localStorage.getItem("LoggedUser")) || {};

  const filteredTodos = todos.filter((todo) => {
    return todo.user_id === loggedUser.user_id;
  });

  const [Todos, setTodos] = useState(filteredTodos);

  const navigate = useNavigate();

  const handleEdit = (todo) => {
    setTodoToEdit(todo);
    setEditData(todo);
    setShowEditModal(true);
  };

  const handleUpdate = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoToEdit.id ? { ...todoToEdit, ...editData } : todo
    );
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    const updatedFilteredTodos = updatedTodos.filter((todo) => {
      return todo.user_id === loggedUser.user_id;
    });
    setTodos(updatedFilteredTodos); // Update state to trigger re-render
    setShowEditModal(false);
    setTodoToEdit(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleDelete = (todo) => {
    setShowDeleteModal(true);
    setTodoToDelete(todo);
  };

  const confirmDelete = () => {
    const todosAfterDeletion = todos.filter((todo) => {
      return todo.id !== todoToDelete.id;
    });
    const filteredTodosAfterDeletion = todosAfterDeletion.filter((todo) => {
      return todo.user_id === loggedUser.user_id;
    });
    setShowDeleteModal(false);
    setTodos(filteredTodosAfterDeletion);
    localStorage.setItem("todos", JSON.stringify(todosAfterDeletion));
  };

  const handleAddBtn = () => {
    navigate("/frontened/todos/addtodo");
  };

  return (
    <>
      <Header />
      <div className="SHOWTODO">
        <div className="container">
          <div className="todo-container table-responsive">
            <h1 className="text-center mt-5 mb-4 fw-bolder" style={{color:"white"}}>
              TODO
              {text}
              {<Cursor cursorColor={'white'}/>}
            </h1>
            <table className="table table-dark rounded-4 " style={{backgroundColor:"#433D8B"}}>
              <thead >
                <tr>
                  <th scope="col" className="ps-md-5">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Todos.map((todo, i) => (
                  <tr key={i}>
                    <th scope="row" className="ps-md-5">{i + 1}</th>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td>{todo.date}</td>
                    <td>{todo.status}</td>
                    <td>
                      <button
                        className="btn btn-success rounded-3 me-1"
                        style={{ height: "30px", width: "42px" }}
                        onClick={() => handleEdit(todo)}
                      >
                        <FaEdit
                          className=""
                          style={{ marginTop: "-13px", fontSize: "18px" }}
                        />
                      </button>
                      <button
                        className="btn btn-danger rounded-3 me-1"
                        style={{ height: "30px", width: "42px" }}
                        onClick={() => handleDelete(todo)}
                      >
                        <MdDelete
                          className=""
                          style={{ marginTop: "-13px", fontSize: "18px" }}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <span className="add-todo-btn" onClick={handleAddBtn}>
              <button className="icon-btn add-btn">
                <div className="add-icon"></div>
                <div className="btn-txt">Add Todo</div>
              </button>
            </span>
          </div>
        </div>
      </div>

      {showDeleteModal && (
        <div
          className="modal text-black"
          tabIndex="-1"
          style={{ display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowDeleteModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this todo?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showEditModal && (
        <div
          className="modal text-black"
          tabIndex="-1"
          style={{ display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Todo</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowEditModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={editData.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows="3"
                      value={editData.description}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                      value={editData.date}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="status" className="form-label">
                      Status
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="status"
                      name="status"
                      value={editData.status}
                      onChange={handleInputChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setShowEditModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
