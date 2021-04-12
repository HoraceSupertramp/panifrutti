import {ViewsActions} from "../actions/views-actions";


export const selectedViewReducer = (state = "", action : ViewsActions) => {
    switch (action.type) {
        case "SELECT_VIEW" :
            return action.selectedView;

        default : return state;
    }
}


export const sideMenuAppearReducer = (state = false, action : ViewsActions) => {
    switch (action.type) {
        case "OPEN_SIDE_MENU" :
            return action.sideMenuAppear;

        case "CLOSE_SIDE_MENU" :
            return action.sideMenuAppear;

        default : return state;
    }
}