import * as actionType from "../constants/ActionType"

export const getUsers = (users) => ({
    type: actionType.GET_USERS,
    payload: users
})

export const userDeleted = () => ({
    type: actionType.DELETE_USER
})

export const userAdded = () => ({
    type: actionType.ADD_USER
})

export const getSingleUser = (user) => ({
    type: actionType.GET_SINGLE_USER,
    payload: user
})

export const userUpdated = () => ({
    type: actionType.UPDATE_USER
})