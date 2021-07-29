import Products from "./components/Products";
import Basket from "./components/Basket";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";
import { useSelector } from "react-redux";
import { DarkThemeToggle } from "./components/darkThemeToggle";

export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

const MyApp = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 20px;
  margin: auto;
`;

function App() {
  const darkThemeEnabled = useSelector(
    (state) => state.themeReducer.darkThemeEnabled
  );

  return (
    <ThemeProvider theme={{ theme: darkThemeEnabled ? "dark" : "light" }}>
      <MyApp>
        <Wrapper>
          <DarkThemeToggle />
          <Products />
          <Basket />
        </Wrapper>
      </MyApp>
    </ThemeProvider>
  );
}

export default App;
