import React, {useCallback, useEffect, useState} from 'react';
import {startUi} from "../../../firebase/firebase.config";



type AccessCredentials = {
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

const SignUp : React.FC = (props : any) => {
    const [credentials,setCredentials] = useState<AccessCredentials>({
        email : "",
        password: "",
        firstName: "",
        lastName: "",
    });

    useEffect(()=>{
            startUi();
        }
    )

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

  return (
      <div className="Forms-wrapper" id="LoginWrapper">
          <form className="My-form" id="LoginForm" onSubmit={handleSubmit}>
              <h3 className="TitlePage"> SIGNUP </h3>
              <div className="MyFormEl-wrapper">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" onChange={handleChange} required={true}/>
              </div>
              <div className="MyFormEl-wrapper">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" onChange={handleChange} required={true}/>
              </div>
              <div className="MyFormEl-wrapper">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="firsName" onChange={handleChange} required={true}/>
              </div>
              <div className="MyFormEl-wrapper">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="lastName" onChange={handleChange} required={true}/>
              </div>

              <div className="MyFormEl-wrapper">
                  <button>SIGNUP</button>
              </div>

          </form>
          <div className="MyFormEl-wrapper">
              <div id="firebaseui-auth-container"/>
          </div>
      </div>
  );
}

export default SignUp;