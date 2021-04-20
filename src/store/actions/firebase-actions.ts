import {authFB} from "../../../firebase/configs/firebase.config";
import {UserCredential} from "@firebase/auth-types";
import {AppState, LocalUserCredentials} from "../../app.types";
import {selectView} from "./global-actions";

const SET_USER_TOKEN = "SET_USER_TOKEN";
const LOGIN_WITH_EP = "LOGIN_WITH_EP";
const LOGIN_SUCCESS = "LOGIN_WITH_SUCCESS";
const LOGIN_FAILED = "LOGIN_FAILED";
const SIGNUP_WITH_EP = "SIGNUP_WITH_EP";
const SIGNUP_SUCCESS = "SIGNUP_WITH_SUCCESS";
const SIGNUP_FAILURE = "SIGNUP_FAILURE";
const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
const LOGOUT_USER_FAILURE = "LOGOUT_USER_FAILURE";
const LOGOUT_USER = "LOGOUT_USER";

export interface SetUserToken {
    type: typeof SET_USER_TOKEN
    userToken: string;
}

export interface LoginWithEmailAndPassword {
    type: typeof LOGIN_WITH_EP;
    userToken: string;
}
export interface LoginSuccess {
    type: typeof LOGIN_SUCCESS;
    userToken: string;
}
export interface LoginFailure {
    type: typeof LOGIN_FAILED;
    userToken: string;
}

export interface SignupWithEmailAndPassword {
    type: typeof SIGNUP_WITH_EP;
    userToken: string;
}
export interface SignupSuccess {
    type: typeof SIGNUP_SUCCESS;
    userToken: string;
}
export interface SignupFailure {
    type: typeof SIGNUP_FAILURE;
    userToken: string;
}

export interface LogoutUser {
    type: typeof LOGOUT_USER;
    userToken: string;
}
export interface LogoutUserSuccess {
    type: typeof LOGOUT_USER_SUCCESS;
    userToken: string;

}
export interface LogoutUserFailure{
    type: typeof LOGOUT_USER_FAILURE;
    userToken: string;
}


export const setUserToken = (str: string) => {
    return {
        type: "SET_USER_TOKEN",
        userToken: str
    }
}

export const loginWithEmailAndPassword = (credentials: LocalUserCredentials) => {
    return (dispatch : any) => {
        authFB.signInWithEmailAndPassword(credentials.email, credentials.password)
            .then((usr_cred : UserCredential ) => {
                let tmp = usr_cred.user?.uid
                if(tmp) {
                    dispatch(loginSuccess(tmp))
                }
            })
            .catch((error : any) => {
                dispatch(loginFailure(error))
            })
    }
}
const loginSuccess = (str: string ) => {
    return (dispatch : any) =>{
        dispatch((setUserToken(str)));
        dispatch((selectView("categories")))
    }
}
const loginFailure = (error: any) => {
    return (dispatch : any) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode == 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        dispatch(setUserToken(""))
    }
}

export const signupWithEmailAndPassword= (credentials: LocalUserCredentials) => {
    return (dispatch : any) => {
        authFB.createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then((usr_cred : UserCredential ) => {
                let tmp = usr_cred.user?.uid
                if(tmp) {
                    dispatch(signupSuccess(tmp))

                }
            })
            .catch((error : any) => {
                dispatch(signupFailure(error))
            })
    }
}
const signupSuccess = (str: string ) => {
    return (dispatch : any) =>{
        dispatch((setUserToken(str)));
        dispatch((selectView("categories")))
    }
}
const signupFailure = (error: any) => {
    return (dispatch : any) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode == 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        dispatch(setUserToken(""))
    }
}


export type FirebaseActions =
    SetUserToken |
    LoginWithEmailAndPassword |
    LoginSuccess |
    LoginFailure |
    SignupWithEmailAndPassword |
    SignupSuccess |
    SignupFailure |
    LogoutUser |
    LogoutUserSuccess |
    LogoutUserFailure;