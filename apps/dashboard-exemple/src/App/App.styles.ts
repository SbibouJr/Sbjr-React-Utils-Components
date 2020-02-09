import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: black;
    color: white;
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;
