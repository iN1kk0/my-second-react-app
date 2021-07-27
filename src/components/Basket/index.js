import { useSelector } from "react-redux";
import "./index.css";

export default function Basket() {
  const products = useSelector((store) => store.items);
  const price = products
    .filter((product) => !!product.count)
    .map((product) => product.price * product.count)
    .reduce((a, b) => a + b, 0);

  return price ? (
    <button className="basket">Checkout (${price})</button>
  ) : null;
}