<div align="center">

# Sbjr-React-Utils-Components - Icons - V3.0.1

</div>

<div align="center">

![React image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMlUbPKRkWDuPrGLln27cr6_EK6ipM3Rw_vxNIxDaOVJA2e4O&s)

</div>

<div align="center">

![Styled-Components image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpayYM9FP_pcFaprfSXRI7eLeCNEfmtGppYKPHxnOmzny9y0eY&s)

</div>

## Sommaire

---

- [Description](#description)
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

  - [Icon Props](#icon-props-iiconprops)

- [Examples](#examples)

  - [Example for Icon](#example-for-icon)
  - [Example for Loader](#example-for-loader)
  - [Exemple for ExampleIcons](#example-for-exampleicons)
  - [Other examples](#other-examples)

---

## Description

This is a a Icons React Component based on [Font-Awesome](https://fontawesome.com/).

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

## Installation

### NPM

```bash
npm i -S @sbjr-react-utils-components/icons
```

### CDN

```html
<script
  type="text/javascript"
  src="https://unpkg.com/@sbjr-react-utils-components/icons@latest"
></script>
```

## Usage

### NPM

```js
import React from 'react';
import { render } from 'react-dom';
import { Icon, CLASS_ICON } from '@sbjr-react-utils-components/icons';

render(
  <Icon classIcon={CLASS_ICON.BOX_OPEN} />,
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
> You can see an example [here](../../apps/icons-exemple/package.json).

### CDN:

```js
ReactDOM.render(
  <SbjrRUCIcon.Icon classIcon={SbjrRUCIcon.CLASS_ICON.BOX_OPEN} />,
  document.getElementById('react-container'),
);
```

To access the icons, you must load the css file.

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@sbjr-react-utils-components/icons@latest/dist/index.css"
/>
```

## Docs

This package as 3 components:

- `<Icon />`
- `<Loader />`
- `<ExampleIcons />`

1 configuration file that contains all the icons:

- `CLASS_ICON`

And 1 typescript interface:

- `IIconProps`.

You can access it by:

`import { Icon, Loader, ExampleIcons, CLASS_ICON, IIconProps } from '@sbjr-react-utils-components/icons';`

Or

`const { Icon, Loader, ExampleIcons, CLASS_ICON, IIconProps } = window.SbjrRUCIcons;`

### Icon Props `IIconProps`

| Props Name | Description                                              | Type                      | required | default value    |
| ---------- | -------------------------------------------------------- | ------------------------- | :------: | ---------------- |
| classIcon  | The icon to display (available in the CLASS_ICON object) | `string` in `CLASS_ICON`  |          | CLASS_ICON.TIMES |
| className  | Class html of the Component                              | `string`                  |          |                  |
| disabled   | If the card is activated/deactivated                     | `boolean`                 |          | false            |
| onClick    | Function called when clicking on the icon.               | `(e: MouseEvent) => void` |          | null             |

## Examples

### Example for Icon

```js
import React, { useState } from 'react';
import { render } from 'react-dom';
import { Icon, CLASS_ICON } from '@sbjr-react-utils-components/icons';

const CustomComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Icon
      classIcon={isOpen ? CLASS_ICON.BOX_OPEN : CLASS_ICON.BOX}
      className="my-icon"
      disabled={isOpen}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    />
  );
};

render(<CustomComponent />, document.getElementById('react-container'));
```

### Example for Loader

```js
import React from 'react';
import { render } from 'react-dom';
import { Loader } from '@sbjr-react-utils-components/icons';

render(
  <div>
    <Loader />
  </div>,
  document.getElementById('react-container'),
);
```

### Exemple for ExampleIcons

```js
import React from 'react';
import { render } from 'react-dom';
import { ExampleIcons } from '@sbjr-react-utils-components/icons';

render(
  <div>
    <ExampleIcons />
  </div>,
  document.getElementById('react-container'),
);
```

### Other examples

Another examples can be found [here](../../apps/icons-exemple) and [here](../../apps/icons-exemple-cdn).

<div align="center">

**Have fun**

</div>
