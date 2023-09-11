import styled, { createGlobalStyle } from "styled-components";
// color1:#32c988,
// color2:#172548

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #14141c;
    font-family:Arial, Helvetica, sans-serif;
      
  h1,h2,h3,h4{
    color: white;
  }
  p{
    color: #32c988;
  }
  }

`;

export const StyledButtons = styled.button`
  border: 0px;
  padding: 5px 10px;
  font-size: 12px;
  color: #000;
  background-color: #72a988;
  border-radius: 2px;

  &:hover {
    background-color: #72c988;
  }
`;
