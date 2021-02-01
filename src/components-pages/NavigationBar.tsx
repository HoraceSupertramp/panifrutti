import React from "react";
import logo from "../images/Altre/Kiwi.png";
import leftBox from "../images/Altre/fruit-box.svg";
import rightBox from "../images/Altre/note.svg";


const NavigationBar : React.FC = () => {
    return (
        <header>
            <div className="fixed_bars" id="navbar_wrapper">
                <img className="logo_image side" id="showcase_button" src={leftBox} alt="catalogo"/>
                <img className="logo_image" src={logo} alt="logo"/>
                <img className="logo_image side" src={rightBox} id="summary_button" alt="lista ordine"/>
            </div>
        </header>
    )
}

export default NavigationBar;