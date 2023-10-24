import "../styles/Card.css";
interface ItemInfo {
    title: string;
    price: number;
    image: string;
}
export default function Card({ title, price, image }: ItemInfo) {
    return (
        <div className="card">
            <img src={image} alt="" />
            <h4>{title}</h4>
            <h5 className="price">{price}</h5>
        </div>
    );
}
