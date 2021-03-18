import {combineReducers} from "redux";
import authReducer from "./auth-reducers/authReducer";
import categoriesReducer from "./categories-reducers/categoriesReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoriesReducer
})

export default rootReducer;