import React from "react";
import new_collection from "../assets/new_collections"
import Items from "../Items/Items";
import "./Newcollections.css"

function NewCollections(){
    return(
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="product">
                {new_collection.map((item,i)=>{
                    return <Items id ={i} key={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                }
                )}
            </div>
        </div>
    )
}

export default NewCollections;