import React from 'react';
import {NavLink} from "react-router-dom";

const SignedInLinks : React.FC = () => {
    return (
            <ul className="TopBarLinks-wrapper">
                <li className="ListMenu-item"><NavLink to="/profile" className="TopBarLinks-wrapper">Profile</NavLink></li>
                <li className="ListMenu-item"><NavLink to="/" className="TopBarLinks-wrapper" >Logout</NavLink></li>
                <li className="ListMenu-item"><NavLink to="/login" className="TopBarLinks-wrapper" >Login</NavLink></li>
            </ul>
    );
}


export default SignedInLinks;