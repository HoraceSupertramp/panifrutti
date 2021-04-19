import React, {useCallback} from 'react';
import {selectView} from "../../store/actions/utils-actions";
import {useDispatch} from "react-redux";
import {authFB} from "../../../firebase/configs/firebase.config";
import {logoutUser, setUserToken} from "../../store/actions/firebase-actions";

const SignedInLinks : React.FC = () => {

    let dispatch = useDispatch();

    let handle = useCallback((str : string) => (e : any)=>{
        e.preventDefault();
        dispatch(selectView(str));
    },[])


    let handleLogout = useCallback(() => {
        dispatch(logoutUser());
        dispatch(selectView(""));
    },[])

    return (
            <ul className="TopBarLinks-wrapper">
                <li onClick={handle("profile")} className="ProfileLink-item">Profile</li>
                <li onClick={handle("loguot")} className="ProfileLink-item">Logout</li>
                <li onClick={handle("cart")} className="ProfileLink-item">Cart</li>
                <li onClick={handleLogout} className="ProfileLink-item">Logout</li>
            </ul>
    );
}


export default SignedInLinks;