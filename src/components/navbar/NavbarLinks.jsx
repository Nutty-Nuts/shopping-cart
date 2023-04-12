import React from "react";
import { Link } from "react-router-dom";

function NavbarLinks(props) {
    return (
        <Link to={props.route}>
            <button>{props.title}</button>
        </Link>
    );
}
export default NavbarLinks;
