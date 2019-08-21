# ElectronJS Reloader

It is a simple method to restart your application.

Features:

- Separate watchers in main and renderer processes.
- No magic, you necessary specify path files.
- You can use hooks before reload.
- Will catch error, if you want.

## Example

First, you should install this package:

```bash
# Yarn
yarn add electron-reloader

# NPM
npm install --save electron-reloader
```

Next, you should create watchers:

```javascript
import { mainReloader, rendererReloader } from 'electron-reloader';
import { app } from 'electron';
import path from 'path';

const mainFile = path.join(app.getAppPath(), 'dist', 'main.js');
const rendererFile = path.join(app.getAppPath(), 'dist', 'renderer.js');

mainReloader(mainFile, undefined, (error, path) => {
  console.log("It is a main's process hook!");
});

rendererReloader(rendererFile, undefined, (error, path) => {
  console.log("It is a renderer's process hook!");
});
```

[Do you want to example application?](example/application)

## Documentation

### mainReloader( paths, ignored, handler, options ) => void

If this is method detects changes, it will restart the application.

| Argument  | Type                   | Requered | Description                                   |
| --------- | ---------------------- | -------- | --------------------------------------------- |
| `paths`   | `string` or `string[]` | `true`   | Paths to files and dirs to recursively watch. |
| `ignored` | `RegExp` or `RegExp[]` | `false`  | RegExp to file or dirs to ignore.             |
| `handler` | `function`             | `false`  | Callback function to create hooks.            |
| `options` | `object`               | `false`  | Additional options to [chokidar].             |

[chokidar]: https://github.com/paulmillr/chokidar/tree/a8f250e16cbef6d87d30639f3fce1299c46a40cd#persistence

### rendererReloader( paths, ignored, handler, options ) => void

If this is method detects changes, it will restart the application's windows.

| Argument  | Type                   | Requered | Description                                   |
| --------- | ---------------------- | -------- | --------------------------------------------- |
| `paths`   | `string` or `string[]` | `true`   | Paths to files and dirs to recursively watch. |
| `ignored` | `RegExp` or `RegExp[]` | `false`  | RegExp to file or dirs to ignore.             |
| `handler` | `function`             | `false`  | Callback function to create hooks.            |
| `options` | `object`               | `false`  | Additional options to [chokidar].             |

[chokidar]: https://github.com/paulmillr/chokidar/tree/a8f250e16cbef6d87d30639f3fce1299c46a40cd#persistence

## License

<img width="256px" alt="MIT License" src="https://raw.githubusercontent.com/valentineus/valentineus.github.io/master/assets/images/7d05cad0-d553-42c7-be1f-7007926ba720.png" />

[MIT](LICENSE.txt).
Copyright (c)
[Valentin Popov](https://valentineus.link/).
