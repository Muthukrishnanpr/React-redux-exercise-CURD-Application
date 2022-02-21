const ADD_CONTACT = "ADD_CONTACT"

const initialState = [
    { id: 0, name: "Raman Sharma", email: "email@email.com", phone: 1234567890 },
    { id: 1, name: "Test Name", email: "test@test.com", phone: 4567891230 },
];

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            state = [...state, action.payload];
            return state
        default:
            return state
    }
}