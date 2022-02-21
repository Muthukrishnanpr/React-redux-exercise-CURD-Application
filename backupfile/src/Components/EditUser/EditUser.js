import React, { useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const history = useHistory()

const handleSubmit = (e) => {
  e.preventDefault()
  history.push("/")
}
  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center text-dark py-3 display-3 fst-italic fw-lighter">Edit Student {id}</h1>
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
                  className="btn btn-block btn-dark"
                  type="submit"
                  value="Update Student" />
                  <Link to={"/"} className="btn btn-danger w-25 ms-5">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditUser