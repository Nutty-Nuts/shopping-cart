import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart(props) {
    const [list, setList] = useState(props.data);
    function handleCheckCart() {
        console.log(list);
    }

    const renderList = [];

    for (const key in list) {
        renderList.push(<CartItem product={key} amount={list[key]} />);
    }

    return (
        <div>
            <h1>Cart Page</h1>
            <button onClick={handleCheckCart}>Check Cart</button>
            {renderList}
        </div>
    );
}
export default Cart;
