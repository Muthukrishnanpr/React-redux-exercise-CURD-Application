import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";

const AddUser = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { name, email, phone }
    addUser(data)
    history.push("/")
  }

  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center text-dark py-3 display-3 fst-italic fw-lighter">Add Student</h1>
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
                  value={phone}
                  onChange={e => setPhone(e.target.value)} />
              </div>
              <div className="form-group pt-3">
                <input
                  className="btn btn-block btn-dark w-25"
                  type="submit"
                  value="Add Student" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

const ADD_CONTACT = "ADD_CONTACT"

const mapDispatchToProps = (dispatch) => ({
  addUser: (data) => {
    dispatch({ type: ADD_CONTACT, payload: data })
  }
})

export default connect(null, mapDispatchToProps)(AddUser);