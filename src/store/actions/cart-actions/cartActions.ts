import {CartProduct} from "../../../app.types";

const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export interface AddProduct {
    type: typeof ADD_PRODUCT;
    productInCart: CartProduct
}

export interface RemoveProduct {
    type: typeof REMOVE_PRODUCT;
    productInCart: CartProduct;
}

export const addProduct = (item: CartProduct) => {
    return {
        type: ADD_PRODUCT,
        productInCart: item
    }
}

export const removeFromCart = (item: CartProduct) => {
    return {
        type: REMOVE_PRODUCT,
        productInCart: item
    }
}


export type CartActions = AddProduct | RemoveProduct;