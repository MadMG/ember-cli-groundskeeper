# Ember-cli-groundskeeper

Addon for [groundskeeper](https://github.com/Couto/groundskeeper)

## Installation

```sh
$ npm install --save-dev ember-cli-groundskeeper
```
## Usage
Example:

```
var app = new EmberApp({
  groundskeeper: {
    "processFiles": ['app.js'],
    "console": true,
    "debugger": false,
    "namespace": [
      "logger.debug",
      "logger.info"]
  }
});
```

__processFiles__

Is an array with file names which will be processed. The source path must end with any of the array entries. If the array is empty all files of the source tree will be processed.

See [broccoli-groundskeeper](https://github.com/MadMG/broccoli-groundskeeper) or Groundskeeper [usage](https://github.com/Couto/groundskeeper#usage) for further options.

## License

MIT © [Martin Groller](https://github.com/MadMG)
