import React from "react";
import ShopItem from "./ShopItem";

import styles from "../../styles/ShopPage.module.css";

function ShopPage() {
    return (
        <div>
            <h1>Shop Page</h1>
            <div className={styles.shopDisplay}>
                <ShopItem product="Plastic" />
                <ShopItem product="Metal" />
                <ShopItem product="Wood" />
                <ShopItem product="Polymer" />
            </div>
        </div>
    );
}

export default ShopPage;
