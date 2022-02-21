import * as actionType from "../constants/ActionType"

const initialState = {
    users: [],
    user: {},
    loading: true
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case actionType.DELETE_USER:
        case actionType.ADD_USER:
        case actionType.UPDATE_USER:
            return {
                ...state,
                loading: false
            }
        case actionType.GET_SINGLE_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        default:
            return state
    }
}