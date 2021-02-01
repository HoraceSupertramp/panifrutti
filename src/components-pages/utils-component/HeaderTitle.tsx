import React from "react";
import logo from "../../images/Altre/Kiwi.png";
import banco from "../../images/Altre/banco.jpg"
import styled from "styled-components";

const HeaderTitle : React.FC = () => {
    return (
            <header className="my_header">
                <div className="fixed_bars" id="title_wrapper">
                    <h1 className="title">PANI</h1>
                    <img className="logo_image" src={logo} alt="logo"/>
                    <h1 className="title">FRUTTI</h1>
                </div>
                <Img className="header_img_wrapper" />
            </header>
    )
}

const Img = styled.div`
  height:30vh;  
  background-image: url(${banco});
  background-size: cover;
`;

export default HeaderTitle;

