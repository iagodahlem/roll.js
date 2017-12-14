# roll.js

> Simple scroll to top function. No dependencies.

## Install

You can get it on [npm](https://www.npmjs.com/package/roll.js).

```sh
npm install roll.js
```

Or using yarn.

```sh
yarn add roll.js
```

## Setup

You can import it using ES6 Modules.

```js
import roll from 'roll.js'
```

Or using CommonJS.

```js
const roll = require('roll.js')
```

If you are not using a bundler, just include the script located in the `dist` folder.

```html
<script src="dist/roll.min.js"></script>
```

## Usage

Now, all you need to do is call the `roll` function into your desired event.

```js
const button = document.querySelector('button')

button.addEventListener('click', () => {
  roll()
})
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://iagodahlem.mit-license.org/) © Iago Dahlem
