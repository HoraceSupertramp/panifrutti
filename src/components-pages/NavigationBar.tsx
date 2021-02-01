import React from "react";

const NavigationBar : React.FC = () => {
    return (
        <header>
            <div className="title_wrapper">
                <div className="order_list_button"/>
                <img className="logo_header_image" src={"../images/Altre/Kiwi.png"} alt="logo"/>
                <div className="send_order_button"/>
            </div>
        </header>
    )
}

export default NavigationBar;