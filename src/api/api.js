import axios from "axios";
import { getSingleUser, getUsers, userUpdated, userAdded, userDeleted } from "../actions/userAction"

export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/users`)
            .then((res) => {
                console.log(res.data)
                dispatch(getUsers(res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const deleteUser = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:5000/users/${id}`)
            .then((res) => {
                console.log(res.data)
                dispatch(userDeleted())
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const addUser = (user) => {
    return function (dispatch) {
        axios.post(`http://localhost:5000/users`, user)
            .then((res) => {
                console.log(res.data)
                dispatch(userAdded(res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const getUser = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/users/${id}`)
            .then((res) => {
                console.log(res.data)
                dispatch(getSingleUser(res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const updateUser = (user, id) => {
    return function (dispatch) {
        axios.put(`http://localhost:5000/users/${id}`, user)
            .then((res) => {
                console.log(res.data)
                dispatch(userUpdated())
            })
            .catch(err => {
                console.log(err)
            })
    }
}
