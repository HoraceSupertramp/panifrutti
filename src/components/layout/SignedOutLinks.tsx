import React, {useCallback} from 'react';
import "../../appCSS.css";
import {selectView} from "../../store/actions/utils-actions";
import {useDispatch} from "react-redux";

const SignedOutLinks : React.FC = () => {

    let dispatch = useDispatch();

    let selectViewHandler = useCallback((str : string) => (e : any)=>{
        e.preventDefault();
        dispatch(selectView(str));
    },[])


    return (
            <ul className="SignOutLinks-wrapper">
                <li onClick={selectViewHandler("categories")} className="ListMenu-item">Categories</li>
                <li onClick={selectViewHandler("about")} className="ListMenu-item">About</li>
                <li onClick={selectViewHandler("login")} className="ListMenu-item">LogIn</li>
                <li onClick={selectViewHandler("signup")} className="ListMenu-item">Signup</li>
                <li onClick={selectViewHandler("cart")} className="ProfileLink-item">Cart</li>
            </ul>
    );
}


export default SignedOutLinks;

