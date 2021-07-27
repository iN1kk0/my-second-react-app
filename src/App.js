import Products from "./components/Products";
import Basket from "./components/Basket";
import styled from "styled-components";

const MyApp = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 20px;
  margin: auto;
`;

function App() {
  return (
    <MyApp>
      <Products />
      <Basket />
    </MyApp>
  );
}

export default App;
