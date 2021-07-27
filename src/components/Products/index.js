import { useSelector, useDispatch } from "react-redux";
import * as constants from "../../store/constants/products";
import styled from "styled-components";

const Product = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const ProductName = styled.div`
  font-size: 30px;
  font-weight: 300;
`;

const ProductButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 40px;
  height: 40px;
  overflow: hidden;
  min-width: 110px;
`;

const ProductButtonsWrapperButton = styled.button`
  background: #4d8cea;
  width: 100%;
  outline: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  height: 100%;
  font-weight: 300;
`;

const ProductButtonsWrapperDiv = styled.div`
  background: #4d8cea;
  min-width: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.items);

  const onAdd = (event) => {
    const { id } = event.target.dataset;

    dispatch({
      type: constants.ADD_PRODUCT,
      payload: { id },
    });
  };

  const onRemove = (event) => {
    const { id } = event.target.dataset;
    const product = products.find((product) => product.id === id);

    if (product.count >= 1) {
      dispatch({
        type: constants.REMOVE_PRODUCT,
        payload: { id },
      });
    }
  };

  return (
    <div className="products">
      <h1>Products</h1>
      {products.map((product) => (
        <Product key={product.name}>
          <ProductName>
            {product.name} - ${product.price}
          </ProductName>
          <ProductButtonsWrapper>
            <ProductButtonsWrapperButton
              data-id={product.id}
              onClick={onRemove}
            >
              -
            </ProductButtonsWrapperButton>
            <ProductButtonsWrapperDiv>
              <span>{product.count || "0"}</span>
            </ProductButtonsWrapperDiv>
            <ProductButtonsWrapperButton data-id={product.id} onClick={onAdd}>
              +
            </ProductButtonsWrapperButton>
          </ProductButtonsWrapper>
        </Product>
      ))}
    </div>
  );
}
