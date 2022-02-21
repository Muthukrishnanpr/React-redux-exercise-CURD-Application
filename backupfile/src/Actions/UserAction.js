import axios from "axios"

const ADD_CONTACT = "ADD_CONTACT"

export const addUser = UserObj => {
  return (dispatch) => {
      axios.post(" http://localhost:5000/users", UserObj)
      .then(res => {
          dispatch({
              type : ADD_CONTACT,
              payload : res.data.user
          })
      })
  }
}

