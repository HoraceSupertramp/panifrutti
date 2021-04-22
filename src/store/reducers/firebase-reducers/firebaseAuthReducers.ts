import {FirebaseActionsRdx} from "../../actions/firebase-actions/firebaseActionsRdx";

export const userTokenReducer = (state = "", action : FirebaseActionsRdx) => {
    switch (action.type) {
        case "SET_USER_TOKEN" :
            return action.userToken
        case "LOGIN_WITH_EP":
            return action.userToken
        case "SIGNUP_WITH_EP":
            return action.userToken
        default : return state;
    }
}