/* jshint unused:false */
(function() {
  'use strict';
  var root = this;
  var previous = root.jsonPromise || null;
  var jsonPromise = {};

  var isNode = (typeof require !== 'undefined' && typeof module !== 'undefined' && module.exports);
  var JSONPromise = null;

  if (isNode) {
    JSONPromise = require('bluebird');
  } else {
    JSONPromise = Promise;
  }

  jsonPromise.parse = function(data) {
    return new JSONPromise(function parse(resolve, reject) {
      if (typeof data === (typeof {})) {
        return resolve(data);
      }

      resolve(JSON.parse(data));
    });
  };

  jsonPromise.stringify = function(data) {
    return new JSONPromise(function stringify(resolve, reject) {
      if (typeof data === (typeof '')) {
        return resolve(data);
      } 

      resolve(JSON.stringify(data));
    });
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = jsonPromise;
    }

    exports.jsonPromise = jsonPromise;
  } else {
    root.jsonPromise = jsonPromise;
  }

  jsonPromise.noConflict = function() {
    root.jsonPromise = previous;
    return jsonPromise;
  };
}).call(this);