import React from "react";
import logo from "../../images/Altre/Kiwi.png";
import banco from "../../images/Altre/avocado.jpg"
import styled from "styled-components";

const HeaderTitle : React.FC = () => {
    return (
            <header className="my_header">
                <div className="fixed_bars" id="title_wrapper">
                    <h1 className="title">PANIFRUTTI</h1>
                    <img className="logo_image" id="top_logo" src={logo} alt="logo"/>
                </div>
                <Img className="header_img_wrapper" />
            </header>
    )
}

const Img = styled.div`
  position:fixed;
  height:30vh;  
  width: 100%;
  background-image: url(${banco});
  background-size: cover;
  top: 8%;
  box-shadow: 0 3px 14px 0px #305823;
`;

export default HeaderTitle;

