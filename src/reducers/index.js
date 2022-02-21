import { combineReducers } from "redux";
import { UserReducer } from "./userReducer";

const rootReducer = combineReducers({
    data: UserReducer
})

export default rootReducer;