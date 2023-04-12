import React from "react";
import ShopItem from "./ShopItem";

function Shop(props) {
    return (
        <div>
            <h1>Shop Page</h1>
            <ShopItem onSubmit={props.submit} product="Plastics" />
            <ShopItem onSubmit={props.submit} product="Metals" />
        </div>
    );
}
export default Shop;
