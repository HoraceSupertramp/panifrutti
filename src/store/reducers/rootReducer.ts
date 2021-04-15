import {
    combineReducers
} from "redux";

import authReducer from "./auth-reducers/authReducer";

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



const rootReducer = combineReducers({
    auth: authReducer,
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


export default rootReducer;