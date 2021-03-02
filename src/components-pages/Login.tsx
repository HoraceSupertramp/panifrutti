import React, {useRef} from "react";
import {startUi} from "../../firebase/firebase.config";
import 'firebaseui/dist/firebaseui.css'
import styled from "styled-components";




let uiEl = () => {
    startUi();
    return (
        <div id="firebaseui-auth-container"/>
    )
}

const Login : React.FC = (props : any) => {

        return (
            <LoginComp>
                <LoginContainer>
                    {uiEl()}
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
