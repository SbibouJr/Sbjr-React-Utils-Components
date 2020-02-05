import styled from 'styled-components';

export const App = styled.div`
  background-color: black;
`;

export const Section = styled.section`
  background-color: grey;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const IconsLibWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  div {
    background-color: aliceblue;
    width: 250px;
  }
`;
