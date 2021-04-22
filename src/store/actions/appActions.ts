import {CatalogActions} from "./catalog-actions/catalogActions";
import {FirebaseActionsRdx} from "./firebase-actions/firebaseActionsRdx";
import {RootActions} from "./rootActions";
import {CartActions} from "./cart-actions/cartActions";



export type AppActions =
    FirebaseActionsRdx |
    CatalogActions |
    RootActions |
    CartActions;