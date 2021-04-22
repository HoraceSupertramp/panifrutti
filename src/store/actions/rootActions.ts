import {initState} from "../reducers/rootReducer";
import {authFB} from "../../../firebase/configs/firebase.config";

const SELECT_VIEW = "SELECT_VIEW";
const OPEN_SIDE_MENU = "OPEN_SIDE_MENU";
const CLOSE_SIDE_MENU = "CLOSE_SIDE_MENU";
const OPEN_CART_POPUP = "OPEN_CART_POPUP";
const CLOSE_CART_POPUP = "CLOSE_CART_POPUP";
const LOGOUT_USER = "LOGOUT_USER";

export interface SelectView {
    type: typeof SELECT_VIEW,
    selectedView: string
}

export interface OpenSideMenu {
    type: typeof OPEN_SIDE_MENU,
    sideMenuAppear: boolean
}

export interface CloseSideMenu {
    type: typeof CLOSE_SIDE_MENU,
    sideMenuAppear: boolean
}

export interface OpenCartPopup {
    type: typeof OPEN_CART_POPUP,
    cartPopupAppear: boolean
}

export interface CloseCartPopup {
    type: typeof  CLOSE_CART_POPUP,
    cartPopupAppear: boolean
}

export const selectView = (view_name : string) => {
    return {
        type: SELECT_VIEW,
        selectedView: view_name
    }
}

export const openSideMenu = () => {
    return {
        type: OPEN_SIDE_MENU,
        sideMenuAppear: true
    }
}
export const closeSideMenu = () => {
    return {
        type: CLOSE_SIDE_MENU,
        sideMenuAppear: false
    }
}

export const openCartPopup = () => {
    return {
        type: OPEN_CART_POPUP,
        cartPopupAppear: true
    }
}

export const closeCartPopup = () => {
    return {
        type: CLOSE_CART_POPUP,
        cartPopupAppear: false
    }
}

export const logoutUser = () => {
    return (dispatch: any) => {
        authFB.signOut()
            .then(() =>{
                dispatch(logoutSuccess())
        })
            .catch((error: any) => window.alert(error))

    }
}

const logoutSuccess = () => {
    return {
        type: LOGOUT_USER,
        defaultState: initState
    }
}


export type RootActions =
    SelectView |
    OpenSideMenu |
    CloseSideMenu |
    OpenCartPopup |
    CloseCartPopup  ;