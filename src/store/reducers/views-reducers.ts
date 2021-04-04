import {ViewsActions} from "../actions/views-actions";


export const selectedViewReducer = (state = "", action : ViewsActions) => {
    switch (action.type) {
        case "SELECT_VIEW" :
            return action.selectedView;

        default : return state;
    }
}
