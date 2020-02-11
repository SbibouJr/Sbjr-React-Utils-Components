<div align="center">

# Sbjr-React-Utils-Components - Markdown - V4.0.0

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

  - [Component](#component)
  - [function](#function)

- [Docs](#docs)

  - [Markdown Props](#markdown-props-imarkdownprops)
  - [parseMarkdowntoHtml](#parsemarkdowntohtml-function-parsemarkdowntohtmlcontent-config)
  - [Configuration](#configuration)

- [Exemple](#exemple)

---

## Description

This module is a A Markdown Renderer for React.
this module use [markdown-it](https://www.npmjs.com/package/markdown-it) and the [markdown-it-prism](https://www.npmjs.com/package/markdown-it-prism) plugin to use [prism](https://prismjs.com), the syntax highlighting library.

## Precondition

This module is a [React](https://github.com/facebook/react) component.

It depends on it module, so you must have them installed.

### NPM

```bash
npm i -S react
```

### CDN

```jsx
<script crossorigin src="https://unpkg.com/react/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
```

## Install

### NPM

```bash
npm i -S @sbjr-react-utils-components/markdown
```

### CDN

```js
<script
  type="text/javascript"
  src="https://unpkg.com/@sbjr-react-utils-components/markdown@latest"
></script>
```

## Usage

### Component

Here is a basic example of how to use the Markown Component:

```jsx
import React from 'react';
import { render } from 'react-dom';
import { Markdown } from '@sbjr-react-utils-components/markdown';

const textInMarkdown =
  '### Markdown Renderer \nContent right in **Markdown** !';

render(
  <Markdown>{textInMarkdown}</Markdown>,
  document.getElementById('react-container'),
);
```

With cdn:

```jsx
const textInMarkdown =
  '### Markdown Renderer \nContent right in **Markdown** !';

ReactDOM.render(
  <SbjrRUCMarkdown.Markdown>{textInMarkdown}</SbjrRUCMarkdown.Markdown>,
  document.getElementById('react-container'),
);
```

### Function

Here is a basic example of how to use the Markown function parser.

Example:

```js
import React from 'react';
import { render } from 'react-dom';
import { parseMarkdownToHtml } from '@sbjr-react-utils-components/markdown';

render(
  <div>{parseMarkdownToHtml('Hello **world**')}</div>,
  document.getElementById('react-container'),
);
```

## Docs

This package as 1 component:

- `Markdown`

1 function:

- `parseMarkdownToHtml`

a default configuration object:

- `MARKDOWN_DEFAULT_CONFIG`

And 2 typescript interface:

- `IMarkdownProps`.
- `IMarkdownConfig`

```js
import {
  Markdown,
  parseMarkdownToHtml,
  MARKDOWN_DEFAULT_CONFIG,
  IMarkdownProps,
  IMarkdownConfig,
} from '@sbjr-react-utils-components/markdown';
```

Or

```js
const {
  DashbMarkdownoard,
  parseMarkdownToHtml,
  MARKDOWN_DEFAULT_CONFIG,
  IMarkdownProps,
  IMarkdownConfig,
} = window.SbjrRUCMarkdown;
```

### Markdown Props `IMarkdownProps`

| Props Name | Description              | Type              | required |
| ---------- | ------------------------ | ----------------- | :------: |
| children   | Markdown String to parse | `string`          |  **x**   |
| config     | Configuration object     | `IMarkdownConfig` |          |

### parseMarkdownToHtml function `parseMarkdownToHtml(content, config)`

| Props Name | Description              | Type              | required |
| ---------- | ------------------------ | ----------------- | :------: |
| content    | Markdown String to parse | `string`          |  **x**   |
| config     | Configuration object     | `IMarkdownConfig` |          |

### Config

This component uses the MarkdownIt lib, you can modify the markdown configuration.

#### IMarkdownConfig

| Props Name  | Description                                                                             | Type                | required |
| ----------- | --------------------------------------------------------------------------------------- | ------------------- | :------: |
| html        | Enable HTML tags in source                                                              | `boolean`           |          |
| xhtmlOut    | Use '/' to close single tags (<br />).                                                  | `boolean`           |          |
| breaks      | Convert '\n' in paragraphs into <br>                                                    | `boolean`           |          |
| langPrefix  | CSS language prefix for fenced blocks. Can be useful for external highlighters.         | `string`            |          |
| linkify     | Autoconvert URL-like text to links                                                      | `boolean`           |          |
| typographer | Enable some language-neutral replacement + quotes beautification                        | `boolean`           |          |
| quotes      | Double + single quotes replacement pairs, when typographer enabled, and smartquotes on. | `string`            |          |
| highlight   | Highlighter function. Should return escaped HTML                                        | `(str, lang) => ''` |          |

Example:

```js
import React from 'react';
import { render } from 'react-dom';
import Markdown from '@sbjr-react-utils-components/markdown';

// full options list (defaults)
const config = {
  html: false,
  xhtmlOut: false,
  // This is only for full CommonMark compatibility.
  breaks: true,
  langPrefix: 'language-',
  linkify: false,
  typographer: false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on.Could be either a String or an Array.
  // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
  // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML
  // or '' if the source string is not changed and should be escaped externally.
  // If result starts with <pre... internal wrapper is skipped.
  highlight: (/* str, lang */) => '',
};

render(
  <Markdown config={config}>Hello **world**</Markdown>,
  document.getElementById('react-container'),
);
```

To learn more about the options available -> [github markdown-it](https://github.com/markdown-it/markdown-it)

## Exemple

You can see an example [here](../../apps/markdown-exemple)

<div align="center">

**Have fun**

</div>
