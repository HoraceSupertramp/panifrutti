import React, {useCallback} from 'react';
import CartComponent from "./CartComponent";
import {useDispatch} from "react-redux";
import {closeCartPopup} from "../../store/actions/utils-actions";

const CartPopUp : React.FC = () => {

    const dispatch = useDispatch();


    let closeCartPopupHandler = useCallback(()=>{
       dispatch(closeCartPopup())
    },[])

    return (
        <div className="CartPopUp-container">
            <div className="CartPopUp-back" onClick={closeCartPopupHandler}/>
            <div className="CartPopUp" >
                <div className="ClosePopupsButton" id="close-cart-popup-button" onClick={closeCartPopupHandler}>X</div>
                <div className="CartComponent-wrapper">
                    <CartComponent/>
                </div>

            </div>
        </div>
    );
}

export default CartPopUp;