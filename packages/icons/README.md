# Sbjr-React-Utils-Components - Icons

**A React Icons Component based on Font-Awesome**

![React image](https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png)

## Install

This module is a React component, so you must obviously have [react](https://github.com/facebook/react) installed.

**CDN :**
```js
<script type="text/javascript" src="https://unpkg.com/@sbjr-react-utils-components/icons@latest"></script>
```

**npm :**
```bash
npm i -S @sbjr-react-utils-components/icons
```
## Usage

```js
import React from 'react';
import { render } from 'react-dom';
import Icon, { CLASS_ICON } from '@sbjr-react-utils-components/icons';

render(
  (
    <Icon
      classIcon={CLASS_ICON.BOX_OPEN}
    />
  ),
  document.getElementById('react-container'),
);

```

## Examples with all props

```js
import React from 'react';
import { render } from 'react-dom';
import Icon, { CLASS_ICON } from '@sbjr-react-utils-components/icons';

class CustomComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <Icon
        classIcon={this.state.isOpen ? CLASS_ICON.BOX_OPEN : CLASS_ICON.BOX}
        className="my-icon"
        disabled={this.state.isOpen}
        onClick={() => {
          this.setState({
            isOpen: !this.state.isOpen,
          });
        }}
      />
    );
  }
}

render(
  (
    <div>
      <CustomComponent />
    </div>
  ),
  document.getElementById('react-container'),
);
```

## Examples For Loader

```js
import React from 'react';
import { render } from 'react-dom';
import { Loader } from '@sbjr-react-utils-components/icons';

render(
  (
    <div>
      <Loader />
    </div>
  ),
  document.getElementById('react-container'),
);
```

## ExampleIcons Component

```js
import React from 'react';
import { render } from 'react-dom';
import { ExampleIcons } from '@sbjr-react-utils-components/icons';

render(
  (
    <div>
      <ExampleIcons />
    </div>
  ),
  document.getElementById('react-container'),
);
```

**Have fun.**
