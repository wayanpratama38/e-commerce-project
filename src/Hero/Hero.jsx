import React from "react";
import hand_icon from "../assets/hand_icon.png"
import hero_image from "../assets/hero_image.png"
import "./Hero.css"


function Hero(){

    return(
        <>
        <div className="hero-container">
            <div className="hero-left">
                <h2>New Arrival</h2>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
                
                    <button className="hero-latest-button">Latest Collection</button>
                
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
            
        </div>
        
        
        </>

    )
}


export default Hero;