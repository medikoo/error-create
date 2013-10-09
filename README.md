# error-create
## Utility for creating custom JavaScript errors
### Usage

```javascript
var MyCustomError = require('error-create')('MyCustomError');

try {
  throw new MyCustomError("My message", 'MY_CODE', { foo: 'bar' });
} catch (e) {
  console.log(e instanceof Error);         // true
  console.log(e instanceof MyCustomError); // true
  console.log(String(e));                  // 'MyCustomError: My message'
  console.log(e.code);                     // 'MY_CODE'
  console.log(e.foo);                      // 'bar'
}
```

### Installation
#### NPM

In your project path:

	$ npm install error-create

##### Browser

You can easily bundle _error-create_ for browser with [modules-webmake](https://github.com/medikoo/modules-webmake)

## Tests [![Build Status](https://travis-ci.org/medikoo/error-create.png)](https://travis-ci.org/medikoo/error-create)

	$ npm test
