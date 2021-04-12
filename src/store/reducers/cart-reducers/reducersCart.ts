
import {CartProduct, Product} from "../../../app.types";
import {CartActions} from "../../actions/cart-actions/cartActions";


export const cartProductsReducer = (state : CartProduct[] = [], action: CartActions) => {
/*
    let prodIns = () : CartProduct[] => {
        let index = 1 //state.findIndex( (el : CartProduct) => el.product === action.productInCart.product)
        if (index === -1) return state.concat([action.productInCart]);
        else {
            state[index].quantity +=1
            return state
        }
    }*/




    switch (action.type) {
        case "ADD_PRODUCT":
            let index = state.findIndex( (el : CartProduct) => el.product.id === action.productInCart.product.id)
            action.productInCart.quantity += action.productInCart.quantity
            if (index === -1) return state.concat([action.productInCart])
            else {
                state[index].quantity += action.productInCart.quantity
                return state
            }

        default : return state;
    }
}

/*
{
                ...state,
                cartProducts: () => {
                    let index = state.findIndex(el => el === action.product);
                    return (index === -1)
                        ? state.concat([action.product])
                        : state[index].quantity++
                }
            }
 */