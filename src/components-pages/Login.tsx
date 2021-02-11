import React from "react";
import styled from "styled-components";


const Login : React.FC = () => {
    return (
        <Log className="Login" id="firebaseui-auth-container">
            <Inp type="text" className="buttons" placeholder="Insert username"/>
            <Inp type="text" className="buttons" placeholder="Insert email"/>
            <Inp type="text" className="buttons" placeholder="Insert password"/>
            <Inp type="text" className="buttons" placeholder="Confirm password"/>
        </Log>
    )
}

export default Login;

const Log = styled.div `
  position: absolute;
  top: 12vh;
  background-color: #305823;
  height: 80%;
  width: 80%;
  display: flex;
  align-items:center;
  justify-content:space-around;
`

const Inp = styled.input`
  height: 3%;
  width: 12%
`
