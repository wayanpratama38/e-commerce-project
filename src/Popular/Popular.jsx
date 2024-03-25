import React from "react";
import "./Popular.css"
import data_item from "../assets/data"
import Items from "../Items/Items"

function Popular(){
    return(
        <div className="popular">
            <h1>POPULAR ITEM NOW</h1>
            <hr />
            <div className="product">
                {data_item.map((items,i)=>{
                    return <Items key={i} id={items.id} image={items.image} name={items.name} new_price = {items.new_price} old_price = {items.old_price}/>
                })}
            </div>
        </div>
    )
}

export default Popular;