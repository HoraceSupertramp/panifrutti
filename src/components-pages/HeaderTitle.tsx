import React from "react";
import logo from "../../images/Altre/Kiwi.png"

const HeaderTitle : React.FC = () => {
    return (
            <header>
                <div className="title_wrapper">
                    <h1 className="title">PANI</h1>
                    <img className="logo_header_image" src={logo} alt="logo"/>
                    <h1 className="title">FRUTTI</h1>
                </div>
            </header>
    )
}

export default HeaderTitle;