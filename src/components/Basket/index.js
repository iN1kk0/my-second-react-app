import { useSelector } from "react-redux";
import styled from "styled-components";

const Button = styled.button`
  background: #dc5b5b;
  outline: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  font-weight: 300;
  border-radius: 2px;
  width: fit-content;
  padding: 15px 30px;
  margin: 20px auto;
`;

export default function Basket() {
  const products = useSelector((store) => store.items);
  const price = products
    .filter((product) => !!product.count)
    .map((product) => product.price * product.count)
    .reduce((a, b) => a + b, 0);

  return price ? <Button>Checkout (${price})</Button> : null;
}