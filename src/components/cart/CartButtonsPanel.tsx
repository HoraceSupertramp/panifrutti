import React, {useCallback, useState} from 'react';
import {CartProduct, Product} from "../../app.types";
import {addProduct} from "../../store/actions/cart-actions/cartActions";
import {useDispatch} from "react-redux";

type CartButtonsPanelProps = {
    product: Product
}

const CartButtonsPanel : React.FC<CartButtonsPanelProps> = ({product}) => {

    const dispatch = useDispatch();

    let addToCart = useCallback((product: Product, quantity: number) => (e: any) => {
        let cartProd : CartProduct = {
            product: product,
            quantity: quantity
        }
        dispatch(addProduct(cartProd));
    },[])

    let [quantity,setQuantity] = useState<number>(0);

    let addQuantity = useCallback(() => setQuantity(quantity + 1),[quantity]);

    let removeQuantity = useCallback(() => setQuantity(quantity-1),[quantity]);

    return (
        <div className="ListItemInforms" id="cartButtonsPanel">
                <div className="ItemAttributes" > <h3 id="add-quantity" onClick={addQuantity}>+</h3> </div>
                <div className="ItemAttributes"> <h3 id="remove-quantity" onClick={removeQuantity}>-</h3> </div>
                <input className="ItemAttributes-input" id={"select-quantity-"+product.id}
                       placeholder={(product.measureKg) ? quantity.toString()+" "+product.measureKg : quantity.toString() }
                       key={product.id+"input"}/>
                <button className="ItemAttributes-button" id="add-to-cart" onClick={addToCart(product,quantity)}> BUY!</button>
        </div>

    );
}

export default CartButtonsPanel;