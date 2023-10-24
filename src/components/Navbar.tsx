import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <div>Shopping Cart</div>
        </div>
    );
}
