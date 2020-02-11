<div align="center">

# Sbjr-React-Utils-Components - Dashboard - V3.0.0

</div>

<div align="center">

![React image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMlUbPKRkWDuPrGLln27cr6_EK6ipM3Rw_vxNIxDaOVJA2e4O&s)

</div>

<div align="center">

![Styled-Components image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpayYM9FP_pcFaprfSXRI7eLeCNEfmtGppYKPHxnOmzny9y0eY&s)

</div>

## Sommaire

---

- [Precondition](#precondition)

  - [NPM](#npm)
  - [CDN](#cdn)

- [Installation](#installation)

  - [NPM](#npm-1)
  - [CDN](#cdn-1)

- [Usage](#usage)
- [Docs](#docs)

  - [Dashboard Props](#dashboard-props-idashboardprops)
  - [Dashboard Card](#dashboard-card-idashboardcard)

- [Exemples](#exemples)

  - [NPM](#npm-2)
  - [CDN](#cdn-2)

---

## Precondition

This module is a [React](https://github.com/facebook/react) component and uses [Styled-Components](https://github.com/styled-components/styled-components).

It depends on its two modules, so you must have them installed.

### NPM

```bash
npm i -S react styled-components
```

### CDN

As described in the [styled-components documentation](https://styled-components.com/releases#v5.0.0):

> if you use styled-components from CDN, **in v5 the "react-is" dependency was added (make sure you add this to your project)**.

```jsx
<script crossorigin src="https://unpkg.com/react-is/umd/react-is.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
<script crossorigin src="https://unpkg.com/styled-components/dist/styled-components.min.js" ></script>
```

## Install

### NPM

```bash
npm i -S @sbjr-react-utils-components/dashboard
```

### CDN

```jsx
<script src="https://unpkg.com/@sbjr-react-utils-components/dashboard@latest"></script>
```

## Usage

Here is a basic example of how to use the dashboard:

```jsx
import React from 'react';
import { render } from 'react-dom';
import { Dashboard } from '@sbjr-react-utils-components/dashboard';

const cardsList = [
  {
    title: 'Card 1',
  },
  {
    title: 'Card 1',
  },
];
render(
  <Dashboard cards={cardsList} />,
  document.getElementById('react-container'),
);
```

## Docs

This package as 1 component:

- `<Dashboard />`

And 2 typescript interface:

- `IDashboardCard`.
- `IDashboardProps`

`import { Dashboard, IDashboardCard, IDashboardProps } from '@sbjr-react-utils-components/dashboard';`

Or

`const { Dashboard, IDashboardCard, IDashboardProps } = window.SbjrRUCDashboard;`

### Dashboard Props `IDashboardProps`

| Props Name | Description            | Type                             | required |
| ---------- | ---------------------- | -------------------------------- | :------: |
| cards      | Class of the Component | `IDashboardCard[]`               |          |
| onClick    | Show Component         | `(card: IDashboardCard) => void` |          |

### Dashboard Card `IDashboardCard`

| Props Name           | Description            | Type                                         | required |
| -------------------- | ---------------------- | -------------------------------------------- | :------: |
| title                | Class of the Component | `string`                                     |  **x**   |
| bottomLeftComponent  | Show Component         | `(() => JSX.Element) | JSX.Element | string` |          |
| bottomRightComponent | Title of the component | `(() => JSX.Element) | JSX.Element | string` |          |
| disabled             | Body of the Component  | `boolean`                                    |          |

## Exemples

### NPM

Here is an example of how to use the dashboard:

```jsx
import React from 'react';
import { render } from 'react-dom';
import { Dashboard } from '@sbjr-react-utils-components/dashboard';

const App = () => {
  const [cardsList, setCardsList] = React.useState([
    {
      title: 'Card 1',
    },
    {
      title: 'Card 2',
      disabled: true,
      bottomLeftComponent: (
        <p>
          Is <strong>disabled</strong>
        </p>
      ),
    },
    {
      title: 'Card 3',
      bottomRightComponent: (
        <p>
          Is <strong>enabled</strong>
        </p>
      ),
    },
  ]);

  return (
    <div>
      <h1>Exemple Dashboard</h1>
      <Dashboard cards={cardsList} onClick={card => alert(card.title)} />
    </div>
  );
};

render(<App />, document.getElementById('react-container'));
```

Another example can be found [here](../../apps/dashboard-exemple).

### CDN

Here is an example of how to use the dashboard with CDN:

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width , height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1"
    />
    <title>@Sbjr-react-utils-components/dashboard with CDN</title>
  </head>
  <body>
    <div id="react"></div>

    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script
      crossorigin
      src="https://unpkg.com/react-is/umd/react-is.production.min.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react/umd/react.production.min.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/styled-components/dist/styled-components.min.js"
    ></script>

    <script src="https://unpkg.com/@sbjr-react-utils-components/dashboard@latest"></script>

    <script type="text/babel">
      const GlobalStyle = styled.createGlobalStyle`
        html,
        body {
          background-color: black;
          color: white;
          margin: 0;
          padding: 0;
        }
        h1 {
          text-align: center;
        }
      `;

      const App = () => {
        const [cardsList, setCardsList] = React.useState([
          {
            title: 'Card 1',
          },
          {
            title: 'Card 2',
          },
          {
            title: 'Card 3',
          },
        ]);

        return (
          <>
            <GlobalStyle />
            <h1>Exemple Dashboard</h1>
            <SbjrRUCDashboard.Dashboard
              cards={cardsList}
              onClick={card => alert(card.title)}
            />
          </>
        );
      };

      ReactDOM.render(<App />, document.getElementById('react'));
    </script>
  </body>
</html>
```

Another example can be found [here](../../apps/dashboard-exemple-cdn/src/index.html).

<div align="center">

**Have fun**

</div>
