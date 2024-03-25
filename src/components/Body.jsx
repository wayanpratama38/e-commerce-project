import React from "react";
import Popular from "../Popular/Popular"
import Offer from "../Offer/Offer"
import NewCollections from "../NewCollections/NewCollections";
import Subscribe from "../Subscribe/Subscribe";
import Hero from "../Hero/Hero";
function Body(){
    return(
        <>
        <Hero />
        <Popular />
        <Offer />
        <NewCollections />
        <Subscribe />
        </>
    )
}

export default Body;