import {FirebaseActions} from "../../actions/firebase-actions";

export const userTokenReducer = (state = "", action : FirebaseActions) => {
    switch (action.type) {
        case "SET_USER_TOKEN" :
            return action.userToken
        case "LOGIN_WITH_EP":
            return action.userToken
        case "SIGNUP_WITH_EP":
            return action.userToken
        case "LOGOUT_USER":
            return action.userToken
        default : return state;
    }
}