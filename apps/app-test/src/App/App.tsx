import React, { useState } from 'react';
import Icon, { Loader, ExampleIcons } from '@sbjr-react-utils-components/icons';
import '@sbjr-react-utils-components/icons/dist/index.css';

import Modal from '@sbjr-react-utils-components/modal';
import { Dashboard } from '@sbjr-react-utils-components/dashboard';
import Markdown from '@sbjr-react-utils-components/markdown';

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
        <h1>Exemple Dashboard</h1>
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
        <h1>Exemple Markdown</h1>
        <Markdown>test du composant **Markdown**</Markdown>
      </Styled.Section>

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
