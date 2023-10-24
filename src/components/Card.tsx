interface ItemInfo {
    title: string;
    price: number;
    image: string;
}
export default function Card({ title, price, image }: ItemInfo) {
    return (
        <div>
            <img src={image} alt="" />
            <h4>{title}</h4>
            <h5>{price}</h5>
        </div>
    );
}
