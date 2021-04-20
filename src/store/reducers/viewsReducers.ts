import {GlobalActions} from "../actions/global-actions";


export const selectedViewReducer = (state = "", action : GlobalActions) => {
    switch (action.type) {
        case "SELECT_VIEW" :
            return action.selectedView;

        default : return state;
    }
}


export const sideMenuAppearReducer = (state = false, action : GlobalActions) => {
    switch (action.type) {
        case "OPEN_SIDE_MENU" :
            return action.sideMenuAppear;

        case "CLOSE_SIDE_MENU" :
            return action.sideMenuAppear;

        default : return state;
    }
}

export const cartPopupAppearAppearReducer = (state = false, action : GlobalActions) => {
    switch (action.type) {
        case "OPEN_CART_POPUP" :
            return action.cartPopupAppear;

        case "CLOSE_CART_POPUP" :
            return action.cartPopupAppear;

        default : return state;
    }
}
