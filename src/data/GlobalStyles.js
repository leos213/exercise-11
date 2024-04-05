import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  body {
    
    height: 100vh;
    display: flex;
    justify-content: center;

    
    background-color: grey;
    font-family: 'Arial', sans-serif;
  }
`;

export default GlobalStyle;
