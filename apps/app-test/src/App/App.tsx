import React, { useState } from 'react';
import Icon, { Loader, ExampleIcons } from '@sbjr-react-utils-components/icons';
import '@sbjr-react-utils-components/icons/dist/index.css';

import Modal from '@sbjr-react-utils-components/modal';
import Dashboard from '@sbjr-react-utils-components/dashboard';

import * as Styled from './App.styles';

const cards = [
  {
    title: 'ouvrire la modale ?',
  },
];

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <Styled.App>
      <Styled.Section>
        <Dashboard
          cards={cards}
          onClick={card => {
            switch (card.title) {
              case 'ouvrire la modale ?':
                setModalIsOpen(true);
                break;
              default:
            }
          }}
        />
      </Styled.Section>
      <Styled.Section>
        <Styled.IconsLibWrapper>
          <Loader />
          <Icon />
          <ExampleIcons />
        </Styled.IconsLibWrapper>
      </Styled.Section>
      <Modal show={modalIsOpen} onClose={() => setModalIsOpen(false)} />
    </Styled.App>
  );
};

export default App;
