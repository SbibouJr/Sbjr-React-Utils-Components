import React, { useState } from 'react';
import { Modal } from '@sbjr-react-utils-components/modal';
import '@sbjr-react-utils-components/icons/dist/index.css';

import { GlobalStyle, Button } from './App.styles';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [counter, setCounter] = useState(0);
  return (
    <>
      <GlobalStyle />
      <h1>Modal exemple</h1>
      <Button onClick={() => setModalIsOpen(true)}>Ouvrir la modale ?</Button>

      <Modal
        title="Titre de la modale"
        body={`Compteur: ${counter}`}
        typeModal="danger"
        show={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        footerElements={[
          <Button key={0} onClick={() => setCounter(counter + 1)}>
            Ajouter
          </Button>,
          <Button key={1} onClick={() => setCounter(0)}>
            Reinitialier
          </Button>,
        ]}
      />
    </>
  );
};

export default App;
