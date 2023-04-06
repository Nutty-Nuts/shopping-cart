import React from "react";

function NavBar() {
    return (
        <div>
            <a href="/">
                <button>Home</button>
            </a>

            <a href="/shop">
                <button>Shop</button>
            </a>

            <button>Cart</button>
        </div>
    );
}
export default NavBar;
