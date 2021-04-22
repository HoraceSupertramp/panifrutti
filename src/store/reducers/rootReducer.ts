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

/*
const rootReducer = combineReducers({
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
})

function combineeReducers (reducersMap : any){
    return (state : any,action : any) => {
        const nextState = {} as any;
        for (const key in reducersMap) {
            nextState[key] = reducersMap[key](action)
        }
        return nextState;
    }
}

export default rootReducer;
*/

//************************************************

export const initState : AppState = {
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

