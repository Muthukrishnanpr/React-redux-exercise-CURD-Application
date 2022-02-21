import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { deleteUser, loadUsers } from "../api/api"

const Home = () => {
    const dispatch = useDispatch();
    let { users } = useSelector((state) => state.data)

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    const handleDelete = (id) => {
        if(window.confirm(`Are you sure wanted to delete the User ? `)) {
            dispatch(deleteUser(id))
            dispatch(loadUsers())
        }
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-11 mx-auto mt-5">
                        <div className="text-end mb-4">
                            <Link to={"/adduser"} className="btn btn-outline-dark px-4 py-2">Add User</Link>
                        </div>
                        <table className="table table-striped table-hover table-responsive">
                            <thead className="table-header bg-dark text-white text-center">
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.length > 0 ? (
                                    users.map((user, index) => (
                                        <tr key={index} className="">
                                            <td className="text-center">{index + 1}</td>
                                            <td className="ps-5">{user.name}</td>
                                            <td className="ps-5">{user.email}</td>
                                            <td className="ps-5">{user.contact}</td>
                                            <td className="text-center">
                                                <button type="button" className="btn btn-danger py-1 me-2"
                                                onClick={() => handleDelete(user.id)}
                                                >Delete</button>
                                                <Link to={`/edituser/${user.id}`} type="button" className="btn btn-warning py-1 ms-2">Edit</Link>
                                            </td>
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

export default Home