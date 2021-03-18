import React from 'react';
import {NavLink} from "react-router-dom";
import "../../appCSS.css";

const SignedOutLinks : React.FC = () => {
    return (
            <ul className="TopBarLinks-wrapper">
                <li className="ListMenu-item"><NavLink to="/categories" className="My-NavLink" >Categories</NavLink></li>
                <li className="ListMenu-item"><NavLink to="/about" className="My-NavLink" >About</NavLink></li>
                <li className="ListMenu-item"><NavLink to="/signup" className="My-NavLink"> Signup</NavLink></li>
            </ul>
    );
}


export default SignedOutLinks;

