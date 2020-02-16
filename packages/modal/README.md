<div align="center">

# Sbjr-React-Utils-Components - Modal - V2.0.0

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

  - [NPM](#npm-2)
  - [CDN](#cdn-2)

- [Docs](#docs)

  - [Modal Props](#modal-props-imodalprops)
  - [TModalType](#tmodaltype)

- [Examples](#examples)

---

## Precondition

This module is a [React](https://github.com/facebook/react) component and uses [Styled-Components](https://github.com/styled-components/styled-components).

It depends on its two modules, so you must have them installed.

This module depends on another module, [@sbjr-react-utils-components/icons](https://github.com/SbibouJr/Sbjr-React-Utils-Components/tree/master/packages/icons), you must also install it.

### NPM

```bash
npm i -S react styled-components @sbjr-react-utils-components/icons
```

### CDN

As described in the [styled-components documentation](https://styled-components.com/releases#v5.0.0):

> if you use styled-components from CDN, **in v5 the "react-is" dependency was added (make sure you add this to your project)**.

```jsx
<script crossorigin src="https://unpkg.com/react-is/umd/react-is.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
<script crossorigin src="https://unpkg.com/styled-components/dist/styled-components.min.js" ></script>
<script type="text/javascript" src="https://unpkg.com/@sbjr-react-utils-components/icons@latest"></script>
```

## Installation

### NPM

```bash
npm i -S @sbjr-react-utils-components/modal
```

### CDN

```html
<script
  type="text/javascript"
  src="https://unpkg.com/@sbjr-react-utils-components/modal@latest"
></script>
```

## Usage

### NPM

```js
import React, { useState } from 'react';
import { render } from 'react-dom';
import { Modal } from '@sbjr-react-utils-components/modal';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <input
        type="submit"
        onClick={() => setModalIsOpen(true)}
        value="Ouvrir"
      />

      <Modal
        title="Titre de la modale"
        body="Contenu de la modale"
        show={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      />
    </>
  );
};

render(
  <App />} />,
  document.getElementById('react-container'),
);
```

To access the icons, you must load the css file.

```js
import '@sbjr-react-utils-components/icons/dist/index.css';
```

> If you are using webpack, you will probably have to use loaders like:
> [style-loader](https://github.com/webpack-contrib/style-loader),
> [css-loader](https://github.com/webpack-contrib/css-loader)
> or [url-loader](https://github.com/webpack-contrib/url-loader).
>
> You can see an example [here](../../apps/modal-exemple/package.json).

### CDN:

```js
const App = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  return (
    <>
      <input
        type="submit"
        onClick={() => setModalIsOpen(true)}
        value="Ouvrir"
      />

      <SbjrRUCModal.Modal
        title="Titre de la modale"
        body="Contenu de la modale"
        show={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('react-container'));
```

To access the icons, you must load the css file.

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@sbjr-react-utils-components/icons@latest/dist/index.css"
/>
```

## Docs

This package as 1 component:

- `<Modal />`

1 typescript interface:

- `IModalProps`

And typescript 1 type:

- `TModalType`

You can access it by:

`import { Modal, IModalProps, TModalType } from '@sbjr-react-utils-components/modal';`

Or

`const { Modal, IModalProps, TModalType } = window.SbjrRUCModal;`

### Modal Props `IModalProps`

| Props Name     | Description                                  | Type                                                | required | Default Value |
| -------------- | -------------------------------------------- | --------------------------------------------------- | :------: | ------------- |
| className      | Class of the Component                       | `string`                                            |          |               |
| show           | Show Component                               | `boolean`                                           |  **x**   | `false`       |
| typeModal      | Style of the Component                       | `TModalType`                                        |          | `information` |
| title          | Title of the component                       | `(() => JSX.Element) | JSX.Element | string`        |          | 'Modal Title' |
| body           | Body of the Component                        | `(() => JSX.Element) | JSX.Element | string`        |          | 'Modal Body'  |
| footerElements | List of footer elements                      | `Array<(() => JSX.Element) | JSX.Element | string>` |          |               |
| onClose        | Function called when want to close the modal | `() => void`                                        |          |               |

### TModalType

| Value         |
| ------------- |
| `warning`     |
| `danger`      |
| `success`     |
| `information` |

## Examples

Examples can be found [here](../../apps/modal-exemple) and [here](../../apps/modal-exemple-cdn).

<div align="center">

**Have fun**

</div>
