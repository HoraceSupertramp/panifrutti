import React from "react";
import logo from "../../images/Altre/Kiwi.png";



const NavigationBar : React.FC = () => {
    return (
        <header>
            <div className="fixed_bars" id="navbar_wrapper">
                <img className="logo_image side" id="showcase_button" src={"/fruit-box.svg"} alt="catalogo"/>
                <img className="logo_image" src={"/kiwi.ico"} alt="logo"/>
                <img className="logo_image side" src={"/note.svg"} id="summary_button" alt="lista ordine"/>
            </div>
        </header>
    )
}

export default NavigationBar;