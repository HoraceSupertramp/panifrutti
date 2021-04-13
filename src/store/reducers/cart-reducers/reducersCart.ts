
import {CartProduct, Product} from "../../../app.types";
import {CartActions} from "../../actions/cart-actions/cartActions";


export const cartProductsReducer = (state : CartProduct[] = [], action: CartActions) => {

    switch (action.type) {
        case "ADD_PRODUCT":
            let index = state.findIndex( (el : CartProduct) => el.product.id === action.productInCart.product.id)
            if (index === -1) return state.concat([action.productInCart])
            else {
                state[index].quantity = action.productInCart.quantity
                return state
            }

        default : return state;
    }
}
