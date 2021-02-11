

import React from "react";


const Register : React.FC = () => {
    return (
        <form className="MyForm" id="regform">
    <input type="text" className="puts" placeholder="Insert username"/>
    <input type="text" className="puts" placeholder="Insert email"/>
    <input type="text" className="puts" placeholder="Insert password"/>
    <input type="text" className="puts" placeholder="Confirm password"/>
    <button className="mybutt" > LOGIN </button>
        </form>
)
}

export default Register;