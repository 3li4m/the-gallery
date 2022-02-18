import React from "react";
import {FooterLogo} from "./Logo";

const Footer = () =>{
    return (
        <div className="footerContainer">
            <FooterLogo />
            <br/>
            <p>Welcome to the bottom</p>
        </div>
    );
}

export default Footer;