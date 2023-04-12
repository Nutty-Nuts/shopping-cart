import React, { useState, useEffect } from "react";

export default function ShopItem(props) {
    const [name, setName] = useState(props.product);
    const [amount, setAmount] = useState(0);

    function handleDecrement() {
        if (amount <= 0) setAmount(0);
        else setAmount(amount - 1);
    }

    function handleIncrement() {
        setAmount(amount + 1);
    }

    function handleChange(e) {
        setAmount(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({ [name]: amount });
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h3>{props.product}</h3>
                <div>
                    <button type="button" onClick={handleDecrement}>
                        -
                    </button>
                    <input type="num" value={amount} onChange={handleChange} />
                    <button type="button" onClick={handleIncrement}>
                        +
                    </button>
                </div>
                <button type="submit">Add to Cart</button>
            </form>
        </div>
    );
}
