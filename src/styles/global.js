import { createGlobalStyle } from 'styled-components';

// #264653
// #2A9D8F
// #E9C46A
// #F4A261
// #E76F51

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: -webkit-fill-available;
  }

  body {
    font-size: 14px;
    background: #264653;
    color: #333;
    font-family: sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, textarea, select {
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;