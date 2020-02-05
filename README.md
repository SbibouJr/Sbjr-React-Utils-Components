# @Sbjr-React-Utils-Components

## Todo

### Installation

La commande suivante va supprimer et reinstaller les node modules global,
ainsi que dans les different projets (`packages` et `apps`) si ces derniers on un script `clean` dans leur `package.json`

```sh
npm run clean-all
```

### Run develop

Pour lancer l'application de developement/test, vous pouvez utiliser cette commande:

```sh
npm run start-app
```

### Build

Pour tester le build de vos package, vous pouvez utiliser la commande:

```sh
npm run bootsrtap
npm run build
```

# Nouveau package

Nous devons:

- Ajouter un nouveau projet dans le dossier `/packages/<nom-du-package>`.
- Ajouter un package.json ([voir exemple](#packagejson))
- Ajouter un webpack.config.js ([voir exemple](#webpackconfigjs))
- Ajouter un .eslint.js ([voir exemple](#eslintjs))

# Templates

## package.json

```json
{
  "name": "@sbjr-react-utils-components/<nom-du-package>",
  "version": "1.0.0",
  "description": "New package",
  "main": "./dist/bundle.js",
  "unpkg": "./dist/bundle.js",
  "scripts": {
    "build": "webpack --mode=production",
    "publish-package": "npm run clean && npm run build && npm publish --access=public",
    "clean": "rm -rf ./dist ./node_modules package-lock.json && npm i"
  },
  "author": "Billy Ros <billyros@gmail.com>",
  "license": "ISC",
  "files": ["dist"],
  "devDependencies": {},
  "dependencies": {},
  "peerDependencies": {
    "react": "^16.8.6"
  }
}
```

## webpack.config.js

```js
const path = require('path');

const config = require('../../webpack.config');

const pack = require('./package.json');

module.exports = {
  ...config,
  entry: `${__dirname}/src`,
  externals: {
    react: 'commonjs react',
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
```

## .eslint.js

```js
const rules = require('../../.eslintrc.js');

module.exports = rules;
```


### TODO

- [ ] Libérer le repo @sbjr-react-utils-components et créer un repo @old-sbjr-react-utils-components
- [ ] Mettre a jours les packages.json des packages (repo, issues, homepage)
- [ ] Changer les versions et déployer les nouveau packages
- [ ] Mettre a jours les readme.md des packages
- [ ] Mettre a jour le readme global du monorepo