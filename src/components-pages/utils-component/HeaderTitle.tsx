import React from "react";
import styled from "styled-components";

const HeaderTitle : React.FC = () => {
    return (
            <header className="my_header">
                <div className="fixed_bars" id="title_wrapper">
                    <h1 className="title">PANIFRUTTI</h1>
                    <img className="logo_image" id="top_logo" src={"/kiwi.ico"} alt="logo"/>
                </div>
                <img className="header_img_wrapper" />
            </header>
    )
}

const Img = styled.div


export default HeaderTitle;

