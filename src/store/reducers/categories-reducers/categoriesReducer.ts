import {firestoreApp} from "../../../../firebase/firebase.config";
import {AppState, Category} from "../../../app.types";
import {MyActions} from "../../actions/categories-actions/categoriesActions";



const categoriesReducer = (state = null, action : MyActions) => {
    switch (action.type) {
        case "CATEGORIES_FETCH_END" :
            return action.collection;
        default : return state;
    }
}

export default categoriesReducer;