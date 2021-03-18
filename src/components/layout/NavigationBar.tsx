import React from "react";
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";



const NavigationBar : React.FC = () => {
    return (
            <nav className="TopBar-wrapper">
                <h1 id="title" > PANIFRUTTI </h1>
                <SignedOutLinks/>
                <SignedInLinks/>
            </nav>


)
}

export default NavigationBar;