import "../styles/Header.css"
import logo from "../assets/logo.png"
import cart_logo from "../assets/cart_icon.png"
import React, {useState} from "react"
import {Link} from "react-router-dom"


function Header(){

    const [menu,setMenu] = useState("shop")

    return(
        <>
        <div className="navbar">
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to="/"  style={{textDecoration:"none"}}>Shop</Link>{menu==="shop"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link to="/men" style={{textDecoration:"none"}}>Men</Link>{menu==="men"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link to="/women" style={{textDecoration:"none"}}>Women</Link>{menu==="women"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("kid")}}><Link to="/kid" style={{textDecoration:"none"}}>Kids</Link>{menu==="kid"?<hr />:<></>}</li>
            </ul>
            <div className="nav-logo">
                <Link to="/" style={{textDecoration:"none"}}>
                    <img src={logo} alt="" />
                    <p>SHOPIFY</p>
                </Link>
                
            </div>
            <div className="nav-login-cart">
                <Link to="/login" style={{textDecoration:"none"}}><button>Login</button></Link>
                <Link to="/cart" style={{textDecoration:"none"}}><img src={cart_logo} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
        
        </>
    )
}

export default Header;