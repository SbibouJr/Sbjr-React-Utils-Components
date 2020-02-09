import React, { useState } from 'react';

import {
  Dashboard,
  IDashboardProps,
} from '@sbjr-react-utils-components/dashboard';

import { GlobalStyle, Button } from './App.styles';

const App = () => {
  const [cardsCounter, setCardsCounter] = useState(1);
  const [cardsList, setCardsList] = useState([
    {
      title: `Card ${cardsCounter}`,
    },
  ]);

  function addCard() {
    const newCardsList = [...cardsList];
    const newCardsCounter = cardsCounter + 1;
    newCardsList.push({
      title: `Card ${newCardsCounter}`,
    });
    setCardsList(newCardsList);
    setCardsCounter(newCardsCounter);
  }

  function removeCard(card) {
    const newCardsList = [...cardsList];
    const index = cardsList.findIndex(elt => elt.title === card.title);
    newCardsList.splice(index, 1);
    setCardsList(newCardsList);
  }
  const dashboardProps: IDashboardProps = {
    cards: cardsList,
    onClick: card => removeCard(card),
  };

  return (
    <>
      <GlobalStyle />
      <h1>Dashboard Exemple</h1>
      <Button type="button" onClick={addCard}>
        Add card ?
      </Button>
      <Dashboard {...dashboardProps} />
    </>
  );
};

export default App;
