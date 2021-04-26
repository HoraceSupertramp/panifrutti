import {
    combineReducers
} from "redux";


import {
    categoriesReducer, productsReducer,
    sectionsReducer,
    selectedCategoryReducer, selectedProductReducer,
    selectedSectionReducer
} from "./categories-reducers/reducersCatalog";

import {
    cartPopupAppearAppearReducer,
    selectedViewReducer,
    sideMenuAppearReducer
} from "./viewsReducers";

import {
    cartProductsReducer
} from "./cart-reducers/reducersCart";
import {userTokenReducer} from "./firebase-reducers/firebaseAuthReducers";
import {AppState, CartProduct, Category, Product, Section} from "../../app.types";
import {AppActions} from "../actions/appActions";
import {Reducer} from "redux";

//************************************************

export const initState : AppState = {
    userRole: "",
    userToken: "",
    cartPopupAppear: false,
    cartProducts: [],
    sections: [],
    selectedView: "",
    selectedProduct: "",
    selectedSection: "",
    selectedCategory: "",
    categories: [],
    products: [],
    sideMenuAppear: false
}

const appReducer = combineReducers({
    userRole: userTokenReducer,
    userToken: userTokenReducer,
    selectedView: selectedViewReducer,
    categories: categoriesReducer,
    selectedCategory: selectedCategoryReducer,
    sections: sectionsReducer,
    selectedSection: selectedSectionReducer,
    products: productsReducer,
    selectedProduct: selectedProductReducer,
    sideMenuAppear: sideMenuAppearReducer,
    cartProducts: cartProductsReducer,
    cartPopupAppear: cartPopupAppearAppearReducer
});


const rootReducer : Reducer<AppState,AppActions> = (state : AppState | undefined, action : AppActions) => {
    if (action.type === "LOGOUT_USER") return initState
    else return appReducer(state,action);
};


export default rootReducer;

