import React from "react";

const HeaderTitle : React.FC = () => {
    return (
            <header>
                <div className="title_wrapper">
                    <h1 className="title">PANI</h1>
                    <img className="logo_header_image" src={"../images/Altre/Kiwi.png"} alt="logo"/>
                    <h1 className="title">FRUTTI</h1>
                </div>
            </header>
    )
}

export default HeaderTitle;