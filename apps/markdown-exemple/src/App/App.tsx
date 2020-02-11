import React, { useState } from 'react';

import {
  Markdown,
  parseMarkdownToHtml,
} from '@sbjr-react-utils-components/markdown';

import { GlobalStyle, Button, Board, BoardLeft } from './App.styles';

const App = () => {
  const [textValue, setTextValue] = useState(
    '### Markdown Component \nTry to read **markdown** !',
  );

  return (
    <>
      <GlobalStyle />
      <h1>Markdown Exemple</h1>
      <Button
        type="button"
        onClick={() => {
          // eslint-disable-next-line no-alert
          alert(`${'Html Render:'}${'\n'}${parseMarkdownToHtml(textValue)}`);
        }}
      >
        Html Render
      </Button>
      <Board>
        <BoardLeft>
          <h2>Text</h2>
          <textarea
            onChange={({ target }) => setTextValue(target.value)}
            value={textValue}
          />
        </BoardLeft>
        <div>
          <h2>Render</h2>
          <Markdown>{textValue}</Markdown>
        </div>
      </Board>
    </>
  );
};

export default App;
