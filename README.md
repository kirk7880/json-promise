[![Build Status](https://travis-ci.org/kirk7880/json-promise.svg?branch=master)](https://travis-ci.org/kirk7880/json-promise) [![Coverage Status](https://coveralls.io/repos/kirk7880/json-promise/badge.png?branch=master)](https://coveralls.io/r/kirk7880/json-promise?branch=master)

## Introduction

Parse and stringify JSON data using promise to gracefully 
handle success and failures if the data is invalid. See the
examples below for usage instructions. This module use [bluebird](https://github.com/petkaantonov/bluebird)
for [Promise/A+](http://promisesaplus.com) support.

## Installation
npm install [json-promise](https://www.npmjs.org/package/json-promise)

## Usage Instructions

### Parsing JSON data
```javascript
var json = require('json-promise');
var str = [
	'{"menu":{"id":"file","value":"File","popup":' 
	,'{"menuitem":[{"value":"New","onclick":"CreateNewDoc()"},' 
	,'{"value":"Open","onclick":"OpenDoc()"},{"value":"Close",' 
	,'"onclick":"CloseDoc()"}]}}}'
].join('');

json.parse(str)
	.then(function onParse(obj) {
		// do something with the data object
	})
	.catch(function onParseError(e) {
		// the data is corrupted!
	});
```

### Stringify JSON data
```javascript
var json = require('json-promise');
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

json.stringify(obj)
	.then(function onStringify(obj) {
		// do something with the string
	})
	.catch(function onStringifyError(e) {
		// the data is corrupted!
	});
```

### Testing
npm test
