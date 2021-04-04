import React, {useCallback} from 'react';
import {selectView} from "../../store/actions/views-actions";
import {useDispatch} from "react-redux";

const SignedInLinks : React.FC = () => {

    let dispatch = useDispatch();

    let handle = useCallback((str : string) => (e : any)=>{
        e.preventDefault();
        dispatch(selectView(str));
    },[])

    return (
            <ul className="TopBarLinks-wrapper">
                <li onClick={handle("profile")} className="ListMenu-item">Profile</li>
                <li onClick={handle("loguot")} className="ListMenu-item">Logout</li>
            </ul>
    );
}


export default SignedInLinks;