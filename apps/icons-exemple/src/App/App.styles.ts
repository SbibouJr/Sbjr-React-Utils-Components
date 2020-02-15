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

export const IconsLibWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  div {
    background-color: rgb(255, 255, 255, 0.2);
    width: 400px;
    height: 100px;
    margin: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
  }
`;
