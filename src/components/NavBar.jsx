import React from "react";

function NavBar(props) {
    return (
        <div>
            <a href="/">
                <button>Home</button>
            </a>

            <a href="/shop">
                <button>Shop</button>
            </a>

            <button>{props.cart}</button>
        </div>
    );
}
export default NavBar;
