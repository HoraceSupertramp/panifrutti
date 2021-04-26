import React, {useCallback, useEffect, useState} from 'react';
import {authFB} from "../../../firebase/configs/firebase.config";
import {UserCredential} from "@firebase/auth-types";
import {selectView} from "../../store/actions/rootActions";
import {useDispatch} from "react-redux";
import {setUserToken, signupWithEmailAndPassword} from "../../store/actions/firebase-actions/firebaseActionsRdx";
import {categoriesFetch} from "../../store/actions/catalog-actions/catalogActions";

type AccessCredentials = {
    email: string,
    password: string,
    firstName: string,
    lastName: string
}


/**
 * TODO: 7
 *  register process:
 *  ) select the provider
 *  ) check credentials
 *  ) verify email?
 *  ) create user on users' db.auth main data ok, you can use the app
 *  ) create user on db.firestore, need it to store some additional main data (location)
 *  ) populate db.firestore.data with users info
 *
 *
 * @constructor
 */
const SignUp : React.FC = () => {
    const [credentials,setCredentials] = useState<AccessCredentials>({
        email : "",
        password: "",
        firstName: "",
        lastName: "",
    });

    let dispatch = useDispatch();


    let handleChange = useCallback((e)=>{
        e.preventDefault();
        setCredentials(
            {
                ...credentials,
                [e.target.id]: e.target.value
            }
        );
    },[credentials]);

    let handleView = useCallback(()=>{
        dispatch(selectView("categories"));
    },[]);


    authFB.onAuthStateChanged((user) => {
            if (user) {
                console.log("user sign in");
            }
            else {
                console.log("no user");
            }
    });

    let handleSubmit = useCallback( (e) => {
        e.preventDefault();
        dispatch(signupWithEmailAndPassword(credentials))
    },[credentials])

  return (
      <div className="Content-wrapper" id="signup-wrapper">
          <div className="FormWrapper">
              <form className="My-form" id="signup-Form" onSubmit={handleSubmit}>
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
              {/*<div className="MyFormEl-wrapper">
                  <div id="firebaseui-auth-container"/>
              </div>*/}
          </div>
      </div>
  );
}

export default SignUp;