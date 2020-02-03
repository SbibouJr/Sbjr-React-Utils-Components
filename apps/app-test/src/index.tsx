import React from 'react';
import ReactDOM from 'react-dom';

import '@sbjr-react-utils-components/icons/dist/index.css';

import Icon, { Loader, ExampleIcons } from '@sbjr-react-utils-components/icons';

import styled from 'styled-components';

const IconsLibWrapper = styled.div`
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

const App = () => {
  return (
    <div>
      <IconsLibWrapper>
        <Loader />
        <Icon />
        <ExampleIcons />
      </IconsLibWrapper>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('react'));
