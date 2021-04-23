import {authFB, firestoreFB} from "../../../../firebase/configs/firebase.config";
import {UserCredential} from "@firebase/auth-types";
import {AppState, Category, LocalUserCredentials} from "../../../app.types";
import {selectView} from "../rootActions";
import firebase from "firebase";
import {firestore} from "firebase-admin/lib/firestore";
import DocumentData = firestore.DocumentData;
import {categoriesFetchEnd} from "../catalog-actions/catalogActions";


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

export interface SignupWithEmailAndPassword{
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

/**
 *  setUserToken = (str: string) => void
 *
 *  Sets into the state the string associated to the user UID
 *
 * * @param str represents the user UID
 */


export const setUserToken = (str: string) => {
    return {
        type: "SET_USER_TOKEN",
        userToken: str
    }
}

/**
 * loginWithEmailAndPassword = (credentials: LocalUserCredentials) => void
 *
 *  *  Async function:
 *  calls the firebase API to authenticate a user with the email
 *  and the password.
 *
 * @param credentials an object whose values represents email and password fields
 */

export const loginWithEmailAndPassword = (credentials: LocalUserCredentials) => {
    return (dispatch : any) => {
        authFB.signInWithEmailAndPassword(credentials.email, credentials.password)
            .then((usr_cred : UserCredential ) => {
                let tmp = usr_cred.user?.uid
                if(tmp) {
                    dispatch(loginSuccess(tmp));
                }
                //TODO: revision for set persistence
                authFB.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                    .then(()=> {
                        dispatch(selectView("categories"))
                    }
                    )
                    .catch((error) => {
                        // Handle Errors here.
                        let errorCode = error.code;
                        let errorMessage = error.message;
                        console.log("CODE: ", errorCode);
                        console.log("MESSAGE: ", errorMessage);
                    });

            })
            .catch((error : any) => {
                dispatch(loginFailure(error))
            })
    }
}
/**
 *  loginSuccess = (str: string ) => void
 *
 *  If login has success sets into the state the user UID and navigate to a specific
 *  view of the app
 *
 *  @param str correspond to the user UID
 *  @returns void
 *
 */


const loginSuccess = (str: string ) => {
    return (dispatch : any) =>{
        dispatch((setUserToken(str)));
        dispatch((selectView("categories")))
    }
}

/**
 *  loginFailure = (error: any) => void
 *
 *  If login has failed shows the message's and the code's error
 *
 * @param error manged when the signup fails
 * @returns void
 */

const loginFailure = (error: any) => {
    return (dispatch : any) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode == 'auth/wrong-password') {
            window.alert('Wrong password.');
        } else {
            window.alert(errorMessage);
        }
        dispatch(setUserToken(""))
    }
}


/**
 * signupWithEmailAndPassword = (credentials: LocalUserCredentials) => void
 *
 *  Async function:
 *  1) calls the firebase API to register a new user with the email
 *  and the password.
 *  2)
 *
 *
 *  @params credentials an object whose values represents email and password fields
 *
 *  @returns void
 * */
export const signupWithEmailAndPassword = (credentials: LocalUserCredentials) => {
    return (dispatch : any) => {

        authFB.createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then((usr_cred : UserCredential ) => {
                let tmp = usr_cred.user?.uid
                if(tmp) {
                    firestoreFB.collection("users").doc(tmp).
                        set({
                        name: "",
                        lastName: "",
                        address: {latitude: 0, longitude: 0}
                        })
                        .then(() =>{
                            console.log("CREATED USER");
                        })
                        .catch((error : any) => {
                            console.log("CODE: ", error.code);
                            console.log("MESSAGE: ", error.message);
                        })
                    firestoreFB.collection("users")
                        .get()
                        .then((snapshot) => {
                            const result = snapshot.docs.map((doc): Category => ({
                                id: doc.id,
                                ...doc.data(),
                            }));
                            console.log(result);
                        });
                    dispatch(signupSuccess(tmp))
                }
            })
            .catch((error : any) => {
                dispatch(signupFailure(error))
            })
    }
}
/**
 *  signupSuccess = (str: string ) => void
 *
 *  If signup has success set into the state the user UID and navigate to a specific
 *  view of the app
 *
 *  @param str correspond to the user UID
 *  @returns void
 *
 */

const signupSuccess = (str: string ) => {
    return (dispatch : any) =>{
        dispatch((setUserToken(str)));
        dispatch((selectView("categories")))
    }
}

/**
 *  signupFailure = (error: any) => void
 *
 *  If signup has failed shows the message's and the code's error
 *
 * @param error manged when the signup fails
 * @returns void
 */
const signupFailure = (error: any) => {
    return (dispatch : any) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode == 'auth/wrong-password') {
            window.alert('Wrong password.');
        } else {
            window.alert(errorMessage);
        }
        dispatch(setUserToken(""))
    }
}


export type FirebaseActionsRdx =
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