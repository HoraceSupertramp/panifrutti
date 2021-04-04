import React, {useCallback, useEffect, useState} from "react";
import 'firebaseui/dist/firebaseui.css'
import {startUi} from "../../../firebase/firebase.config";



type AccessCredentials = {
    email: string,
    password: string,
}


const Login : React.FC = (props : any) => {
    const [credentials,setCredentials] = useState<AccessCredentials>({
        email : "",
        password: "",
    });

    let handleChange = useCallback((e)=>{
        e.preventDefault();
        setCredentials(
            {
                ...credentials,
                [e.target.id]: e.target.value
            }
        );
    },[credentials])

    let handleSubmit = useCallback( (e) => {
        e.preventDefault();
        console.log(credentials);
    },[credentials])

    useEffect(()=>startUi());

    return (
        <div className="Content-wrapper" id="login-wrapper">
            <form className="My-form" id="login-Form" onSubmit={handleSubmit}>
                <h3 className="TitlePage"> LOGIN </h3>
                <div className="MyFormEl-wrapper">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange} required={true}/>
                </div>
                <div className="MyFormEl-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange} required={true}/>
                </div>

                <div className="MyFormEl-wrapper">
                    <button>LOGIN</button>
                </div>
            </form>
            <div className="MyFormEl-wrapper">
                <div id="firebaseui-auth-container"/>
            </div>
        </div>
    )
}

export default Login;