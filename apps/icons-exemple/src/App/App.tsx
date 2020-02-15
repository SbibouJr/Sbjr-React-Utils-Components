import React from 'react';
import { Icon, Loader, ExampleIcons } from '@sbjr-react-utils-components/icons';
import '@sbjr-react-utils-components/icons/dist/index.css';

import { GlobalStyle, IconsLibWrapper } from './App.styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <h1>Icons exemple</h1>
      <div>
        <p>Loader</p>
        <Loader />
      </div>
      <div>
        <p>Icon:</p>
        <Icon />
      </div>
      <hr />
      <h1>Full list</h1>
      <IconsLibWrapper>
        <ExampleIcons />
      </IconsLibWrapper>
    </>
  );
};

export default App;
