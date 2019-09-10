import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html {
    font-size: 100%;
    touch-action: manipulation;
  }

  body {
    background-color: #fff;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.5;
    overflow-x: hidden;
  }

  a {
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
    }
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  input,
  select,
  textarea,
  button {
    border: none;
    background: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button {
    text-decoration: none;
    user-select: none;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
    }
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style-type: none;
  }

  abbr {
    cursor: help;
  }
`;
