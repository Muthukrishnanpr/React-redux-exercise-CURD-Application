import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUser, loadUsers } from '../api/api';

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  
  const data = { name, email, contact }
  
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    dispatch(addUser(data))
    dispatch(loadUsers())
    history.push("/")
  }


  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center text-dark py-3 display-3 fst-italic fw-lighter">Add User</h1>
        <div className="row">
          <div className="col-md-5 p-5 mx-auto shadow">
            <form onSubmit={handleSubmit}>
              <div className="form-group py-3">
                <input className="form-control"
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={e => setName(e.target.value)} />
              </div>
              <div className="form-group py-3">
                <input className="form-control"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="form-group py-3">
                <input className="form-control"
                  type="text"
                  placeholder="Phone"
                  value={contact}
                  onChange={e => setContact(e.target.value)} />
              </div>
              <div className="form-group pt-3">
                <input
                  className="btn btn-block btn-dark w-25"
                  type="submit"
                  value="Add User" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddUser