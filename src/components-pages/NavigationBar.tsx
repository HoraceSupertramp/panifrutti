import React from "react";
import logo from "../../images/Altre/Kiwi.png"
const NavigationBar : React.FC = () => {
    return (
        <header>
            <div className="title_wrapper">
                <div className="order_list_button"/>
                <img className="logo_header_image" src={logo} alt="logo"/>
                <div className="send_order_button"/>
            </div>
        </header>
    )
}

export default NavigationBar;