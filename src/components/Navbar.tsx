import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">RANDOM.</div>
            <Link className="nav-links" to="/">
                Home
            </Link>
            <Link className="nav-links" to="/shop">
                Shop
            </Link>
            <div className="nav-links cart">Shopping Cart</div>
        </div>
    );
}
