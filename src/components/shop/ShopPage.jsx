import React from "react";
import ShopItem from "./ShopItem";

import styles from "../../styles/ShopPage.module.css";

function ShopPage(props) {
    return (
        <div>
            <h1>Shop Page</h1>
            <div className={styles.shopDisplay}>
                <ShopItem click={props.click} id="plastic" product="Plastic" />
                <ShopItem click={props.click} id="metal" product="Metal" />
                <ShopItem click={props.click} id="wood" product="Wood" />
                <ShopItem click={props.click} id="polymer" product="Polymer" />
            </div>
        </div>
    );
}

export default ShopPage;
