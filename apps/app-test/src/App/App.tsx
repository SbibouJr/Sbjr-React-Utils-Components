import React, { useState } from 'react';
import { Icon, Loader, ExampleIcons } from '@sbjr-react-utils-components/icons';
import '@sbjr-react-utils-components/icons/dist/index.css';

import Modal from '@sbjr-react-utils-components/modal';

import * as Styled from './App.styles';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <Styled.App>
      <Styled.Section>
        <h1>Exemple Icon</h1>
        <Loader />
        <Icon />
        <Styled.IconsLibWrapper>
          <ExampleIcons />
        </Styled.IconsLibWrapper>
      </Styled.Section>

      {/* Exemple Modal */}
      <Modal show={modalIsOpen} onClose={() => setModalIsOpen(false)} />
    </Styled.App>
  );
};

export default App;
