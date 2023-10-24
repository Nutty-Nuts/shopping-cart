import { useEffect, useState } from "react";
import Cards from "../components/Cards";

export default function Shop() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            });
    }, []);

    return (
        <div>
            <h1>Welcome to the Shop Page!</h1>
            <Cards items={items} />
        </div>
    );
}
