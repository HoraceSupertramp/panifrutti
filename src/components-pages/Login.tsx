import React from "react";
import {firebaseMyApp,firebaseAuthent, firebaseMyUi} from "../../firebase/firebase.config";
import 'firebaseui/dist/firebaseui.css'
import styled from "styled-components";

firebaseMyUi.ui.start('#firebaseui-auth-container', firebaseMyUi.uiConfig);
console.log(firebaseMyApp)
const Login : React.FC = (props : any) => {

        return (
            <LoginComp>
                <LoginContainer>
                    <div id="firebaseui-auth-container"/>
                </LoginContainer>
            </LoginComp>
        )
}

const LoginComp = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const LoginContainer = styled.div`
  height: 70%;
  width: 60%;
`;

export default Login;
