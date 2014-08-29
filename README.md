## Introduction


Parse and stringify JSON data using promise to gracefully 
handle success and failures if the data is invalid. See the
examples below for usage instructions. This module use [bluebird](https://github.com/petkaantonov/bluebird)
for [Promise/A+](http://promisesaplus.com) support.

## Installation
npm install [json-parse-promise](https://www.npmjs.org/package/json-parse-promise)

## Usage Instructions

### Parsing JSON data
```javascript
var parser = require('json-parse-promise');
var str = [
	'{"menu":{"id":"file","value":"File","popup":' 
	,'{"menuitem":[{"value":"New","onclick":"CreateNewDoc()"},' 
	,'{"value":"Open","onclick":"OpenDoc()"},{"value":"Close",' 
	,'"onclick":"CloseDoc()"}]}}}'
].join('');

parser.parse(str)
	.then(function(obj) {
		// do something with the data object
	})
	.catch(function(e) {
		// the data is corrupted!
	});
```

### Stringify JSON data
```javascript
var parser = require('json-parse-promise');
var obj = {
  "menu": {
    "id": "file",
    "value": "File",
    "popup": {
      "menuitem": [
        {
          "value": "New",
          "onclick": "CreateNewDoc()"
        },
        {
          "value": "Open",
          "onclick": "OpenDoc()"
        },
        {
          "value": "Close",
          "onclick": "CloseDoc()"
        }
      ]
    }
  }
};

parser.stringify(obj)
	.then(function(obj) {
		// do something with the string
	})
	.catch(function(e) {
		// the data is corrupted!
	});
```
