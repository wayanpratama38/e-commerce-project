import React , {useState} from "react";
import big_logo from "../assets/logo_big.png"
import instagram_icon from "../assets/instagram_icon.png"
import pinterest_icon from "../assets/pintester_icon.png"
import whatsapp_icon from "../assets/whatsapp_icon.png"
import "../styles/Footer.css"


function Footer(){ 
    

    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={big_logo} alt="" />
                <p>SHOPIFY</p>
            </div>
            <ul className="footer-content">
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-logo-container">
                <div className="social-logo">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="social-logo">
                    <img src={pinterest_icon} alt="" />
                </div>
                <div className="social-logo">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <hr />
            <p>Copyright - 2024  </p>
        </div>
    )
}

export default Footer;