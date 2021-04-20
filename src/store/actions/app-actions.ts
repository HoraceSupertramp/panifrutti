import {CatalogActions} from "./catalog-actions/catalogActions";
import {FirebaseActions} from "./firebase-actions";
import {GlobalActions} from "./global-actions";
import {CartActions} from "./cart-actions/cartActions";



export type AppActions =
    FirebaseActions |
    CatalogActions |
    GlobalActions |
    CartActions;