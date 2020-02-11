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

export const Board = styled.div`
  padding: 0 0 20px 0;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  max-width: 900px;
  margin: 20px auto;
  border: solid 1px white;
  border-radius: 6px;
`;

export const BoardLeft = styled.div`
  textarea {
    height: 300px;
    width: 250px;
  }
`;
