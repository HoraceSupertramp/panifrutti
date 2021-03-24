import {combineReducers} from "redux";
import authReducer from "./auth-reducers/authReducer";
import {
    categoriesReducer, productsReducer,
    sectionsReducer,
    selectedCategoryReducer, selectedProductReducer,
    selectedSectionReducer
} from "./categories-reducers/reducersCatalog";
/*import categoriesReducer from "./categories-reducers/categoriesReducer";
import selectedCategoryReducer from "./categories-reducers/selectedCategoryReducer";
import selectedSectionReducer from "./categories-reducers/selectedSectionReducer";
import sectionsReducer from "./categories-reducers/sectionsReducer";
*/

const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
    selectedCategory: selectedCategoryReducer,
    sections: sectionsReducer,
    selectedSection: selectedSectionReducer,
    products: productsReducer,
    selectedProduct: selectedProductReducer
})

export default rootReducer;