import React, {useCallback} from 'react';
import {NavLink} from "react-router-dom";
import "../../appCSS.css";
import {selectView} from "../../store/actions/views-actions";
import {useDispatch} from "react-redux";

const SignedOutLinks : React.FC = () => {

    let dispatch = useDispatch();

    let handle = useCallback((str : string) => (e : any)=>{
        e.preventDefault();
        dispatch(selectView(str));
    },[])


    return (
            <ul className="SignOutLinks-wrapper">
                <li onClick={handle("categories")} className="ListMenu-item">Categories</li>
                <li onClick={handle("about")} className="ListMenu-item">About</li>
                <li onClick={handle("login")} className="ListMenu-item">LogIn</li>
                <li onClick={handle("signup")} className="ListMenu-item">Signup</li>
            </ul>
    );
}


export default SignedOutLinks;

