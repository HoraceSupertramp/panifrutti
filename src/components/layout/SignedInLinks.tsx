import React, {useCallback} from 'react';
import {selectView} from "../../store/actions/utils-actions";
import {useDispatch} from "react-redux";

const SignedInLinks : React.FC = () => {

    let dispatch = useDispatch();

    let handle = useCallback((str : string) => (e : any)=>{
        e.preventDefault();
        dispatch(selectView(str));
    },[])

    return (
            <ul className="TopBarLinks-wrapper">
                <li onClick={handle("profile")} className="ProfileLink-item">Profile</li>
                <li onClick={handle("loguot")} className="ProfileLink-item">Logout</li>
                <li onClick={handle("cart")} className="ProfileLink-item">Cart</li>
            </ul>
    );
}


export default SignedInLinks;