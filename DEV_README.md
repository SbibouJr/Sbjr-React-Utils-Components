# Sbjr-React-Utils-Components

**Sbjr-React-Utils-Components Monorepo**

![React image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMlUbPKRkWDuPrGLln27cr6_EK6ipM3Rw_vxNIxDaOVJA2e4O&s)

## Sommaire

---

- [Installation](#installation)
- [Création](#cr%C3%A9ation)
- [Ajout d'un package](#ajout-dun-package)
- [Todo](#todo)

---

### Installation

La commande suivante va supprimer et reinstaller les node modules global,
ainsi que dans les different projets (`packages` et `apps`) si ces derniers on un script `clean` dans leur `package.json`

```sh
npm run clean-all
```

#### Run develop

Pour lancer l'application de developement/test, vous pouvez utiliser cette commande:

```sh
APP=app-test npm run start
```

#### Build

Pour tester le build de vos package, vous pouvez utiliser la commande:

```sh
npm run bootsrtap
npm run build
```

### Nouveau package

#### Création

Nous devons creer:

- Ajouter un nouveau projet dans le dossier `/packages/<nom-du-package>`.
- Ajouter un package.json ([voir exemple](#packagejson))
- Ajouter un webpack.config.js ([voir exemple](#webpackconfigjs))
- Ajouter un .eslint.js ([voir exemple](#eslintjs))

##### package.json

```json
{
  "name": "@sbjr-react-utils-components/<package>",
  "version": "2.0.0",
  "description": "React <package> Component.",
  "main": "./dist/index.js",
  "unpkg": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "files": ["dist"],
  "scripts": {
    "build": "webpack --mode=development",
    "publish-package": "npm run clean && npm i && npm run build && npm publish --access=public",
    "clean": "rm -rf ./dist ./node_modules package-lock.json"
  },
  "devDependencies": {},
  "dependencies": {},
  "peerDependencies": {
    "react": ">^16.0.0",
    "styled-components": ">^5.0.0"
  },
  "author": "Billy Ros <billyros@gmail.com>",
  "license": "ISC",
  "homepage": "https://github.com/SbibouJr/Sbjr-React-Utils-Components/packages/<package>#readme",
  "repository": {
    "type": "git",
    "url": "https://github.com/SbibouJr/Sbjr-React-Utils-Components"
  },
  "bugs": {
    "url": "https://github.com/SbibouJr/Sbjr-React-Utils-Components/issues"
  },
  "keywords": ["React", "Utils", "Component", "<Package>", "Javascript"]
}
```

##### webpack.config.js

```js
const path = require('path');

const config = require('../../webpack.config');

module.exports = {
  ...config,
  entry: `${__dirname}/src`,
  externals: {
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
      root: 'styled',
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
  },
  output: {
    libraryTarget: 'umd',
    library: {
      root: 'SbjrRUC<Package>',
      commonjs: '@sbjr-react-utils-components/<package>',
      amd: '@sbjr-react-utils-components/<package>',
    },
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
};
```

##### tsconfig.json

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "declaration": true,
    "outDir": "./dist"
  },
  "include": ["./src"],
  "exclude": ["node_modules"]
}
```

##### .eslint.js

```js
const rules = require('../../.eslintrc.js');

module.exports = rules;
```

### Ajout d'un package

Vous pouvez ajouter un package à une app ou a un autre package avec cette commande:

```sh
PACKAGE=@sbjr-react-utils-components/dashboard TO=app-test npm run add-package
```

#### TODO

- [x] Libérer le repo @sbjr-react-utils-components et créer un repo @old-sbjr-react-utils-components
- [x] Mettre a jours les packages.json des packages (repo, issues, homepage)
- [x] Mettre a jour le readme global du monorepo
- [ ] Mettre a jours les readme des packages
- [ ] Changer les versions et déployer les nouveau packages
