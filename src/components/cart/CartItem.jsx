import React from "react";

export default function CartItem(props) {
    return (
        <div>
            <b>{props.product}</b>
            {props.amount}
        </div>
    );
}
