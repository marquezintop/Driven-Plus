import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }

    body, html {
    width: 375px;
    height: 100%;
    background-color: #0E0E13;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    }

    .root {
    width: 100%;
    height: 100%;
    }
`