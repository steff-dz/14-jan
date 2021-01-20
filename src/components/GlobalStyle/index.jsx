import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

html {

    font-family: 'Roboto Condensed', sans-serif;
    font-size: 62.5%;
}

body {
    background-color: #0f0e17;
    color: #fffffe;
}
`;

export default GlobalStyle;
