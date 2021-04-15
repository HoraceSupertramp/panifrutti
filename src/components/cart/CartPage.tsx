import React from 'react';
import CartComponent from "./CartComponent";

const CartPage : React.FC = () => {
    return (
        <div className="Content-wrapper">
            <div className="CartPage-container">
                <CartComponent/>
            </div>
        </div>
    );
}

export default CartPage;