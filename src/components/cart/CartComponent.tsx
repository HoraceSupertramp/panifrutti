import React, {useEffect, useState} from 'react';
import {AppState, CartProduct} from "../../app.types";
import {useSelector} from "react-redux";

const CartComponent : React.FC = () => {
    const cart = useSelector<AppState,CartProduct[]>((state) => state.cartProducts);


    return (
    <div className="Cart">
       <h1>CART</h1>
        {(cart.length == 0)
            ? <h2>Select products</h2>
            : <div>
                <h2> Selected products:</h2>
                <ul>
                {cart.map((el : CartProduct) => (
                    <li className="CartListItem" key={el.product.id+"cart"}>
                        <div id="image-cart-list-item">
                            {el.product.image}
                        </div>
                        <div id="details-wrapper-cart-list-item">
                            <h6>{el.product.id}</h6>
                            <h6>{el.product.price}</h6>
                            <h5>{el.quantity}</h5>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        }
    </div>
    );
}

export default CartComponent;