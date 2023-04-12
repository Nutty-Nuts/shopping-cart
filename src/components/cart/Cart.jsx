import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart(props) {
    const [list, setList] = useState(props.data);
    const renderList = [];

    for (const key in list) {
        renderList.push(<CartItem product={key} amount={list[key]} />);
    }

    return (
        <div>
            <h1>Cart Page</h1>
            {renderList}
        </div>
    );
}
export default Cart;
