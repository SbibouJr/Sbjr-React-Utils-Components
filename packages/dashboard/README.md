# Sbjr-React-Utils-Components - Dashboard

**React Dashboard Component.**

![React image](https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png)

## Install

This module is a React component, so you must obviously have [react](https://github.com/facebook/react) installed.

### CDN
```js
<script type="text/javascript" src="https://unpkg.com/@sbjr-react-utils-components/dashboard@latest"></script>
```

### Npm
```bash
npm i -S @sbjr-react-utils-components/dashboard
```
## Usage

```js
import React from 'react';
import { render } from 'react-dom';
import Dashboard from '@sbjr-react-utils-components/dashboard';

render(
  (
    <div>
      <Dashboard
        cards={[
          {
            title: 'Card Title',
          },
          {
            title: 'Card Title',
            bottomRightComponent: (<p>Hello <strong>World</strong></p>)
          },
          {
            title: 'Card Title',
            disabled: true,
            bottomLeftComponent: (<p>Hello <strong>World</strong></p>)
          },
        ]}
        onClick={(card) => {
          console.log(card);
        }}
      />
    </div>
  ),
  document.getElementById('react-container'),
);
```

**Have fun.**
