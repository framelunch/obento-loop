# obento-loop
obento-loop keeps executing functions at regular intervals/

## Installation
Yarn:
```bash
yarn add obento-loop
```

npm:
```bash
npm install --save obento-loop
```

## Example
```javascript
var loop = require('obento-loop');

var fc = function() {
  console.log('fc');
}
loop.add(fc);

// output at intervals of 40 milliseconds.
// 'fc'
// 'fc' ....
```




