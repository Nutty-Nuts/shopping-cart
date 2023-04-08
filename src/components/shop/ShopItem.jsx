import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/ShopPage.module.css";

function ShopItem(props) {
    const [amount, setAmount] = useState(0);

    const incrementAmount = () => {
        setAmount(amount + 1);
    };

    const decrementAmount = () => {
        if (amount <= 0) {
            // do nothing
        } else {
            setAmount(amount - 1);
        }
    };

    const handleClick = (e) => {
        let id = e.target.id;

        if (id == "increment") {
            incrementAmount();
        } else {
            decrementAmount();
        }
    };

    return (
        <div id={props.id} className={styles.shopItem}>
            <h3>{props.product}</h3>
            <div className={styles.itemAmount}>
                <button
                    onClick={handleClick}
                    id="decrement"
                    className={styles.decrement}
                >
                    -
                </button>
                <p className={styles.amount}>{amount}</p>
                <button
                    onClick={handleClick}
                    id="increment"
                    className={styles.increment}
                >
                    +
                </button>
            </div>
            <br />
            <button onClick={props.click} id="submitCart">
                Add to Cart
            </button>
        </div>
    );
}
export default ShopItem;
