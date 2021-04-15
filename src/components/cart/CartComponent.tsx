import React, {useEffect, useState} from 'react';
import {AppState, CartProduct} from "../../app.types";
import {useSelector} from "react-redux";

const CartComponent : React.FC = () => {
    const cart = useSelector<AppState,CartProduct[]>((state) => state.cartProducts);


    return (
    <div className="Cart-container">
        <div className="TitleCart">
        <h1 id="cart-title" >CART</h1>
        {(cart.length == 0)
            ? <h2 className="CartSubtitle">Select products</h2>
            : null}
        </div>
        {(cart.length !== 0) &&
            <div className="CartList-container">
                <ul className="CartList">
                {cart.map((el : CartProduct) => (
                    <li className="CartListItem" key={el.product.id+"cart"}>
                        <div className="ListItemInforms" id="image-cart-list-item">
                            <div className="TEMPimage">{el.product.image}</div>
                        </div>
                        <div className="ListItemInforms" id="details-wrapper-cart-list-item">
                            <h6>{el.product.id}</h6>
                            <h6>{el.product.price+"€/ "+el.product.measureKg}</h6>
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