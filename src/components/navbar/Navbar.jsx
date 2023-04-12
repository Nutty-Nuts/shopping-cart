import React from "react";
import NavbarLinks from "./NavbarLinks";

function Navbar() {
    return (
        <nav>
            <NavbarLinks route="" title="Home" />
            <NavbarLinks route="shop" title="Shop" />
            <NavbarLinks route="cart" title="Cart" />
        </nav>
    );
}
export default Navbar;
