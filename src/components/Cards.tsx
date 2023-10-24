import { render } from "@testing-library/react";
import Card from "./Card";

export default function Cards({ items }) {
    return <div>{renderItems(items)}</div>;
}

function renderItems(array: Array<object>) {
    const items = array.map(({ id, title, price, image }: any) => {
        return <Card key={id} title={title} price={price} image={image} />;
    });

    return items;
}
