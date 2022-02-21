import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

const Home = () => {

  const contacts = useSelector(state => state.user)

  return (
    <>
      <div className="container">
        <div className="text-end">
          <Link to={"/addUser"} className="btn btn-outline-dark my-4">AddUser</Link>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table className="table table-hover">
              <thead className="table-header bg-dark text-white">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {contacts.length > 0 ? (
                  contacts.map((contact, id) => (
                    <tr key={id}>
                      <td>{id + 1}</td>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.phone}</td>
                    </tr>
                  ))
                ) : (
                  <th>
                    No contacts found
                  </th>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

// const mapStateToProps = (state) => {
//   return(
//     {
//       contacts: state.user,
//     }
//   )
// };


export default Home;