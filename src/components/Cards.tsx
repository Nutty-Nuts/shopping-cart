import { render } from "@testing-library/react";
import Card from "./Card";
import "../styles/Cards.css";

export default function Cards({ items }) {
    return <div className="cards">{renderItems(items)}</div>;
}

function renderItems(array: Array<object>) {
    const items = array.map(({ id, title, price, image }: any) => {
        return <Card key={id} title={title} price={price} image={image} />;
    });

    return items;
}
