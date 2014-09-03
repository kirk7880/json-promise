/* jshint unused:false */
(function(root) {
  'use strict';

  var jsonPromise = {};
  var previous = root.jsonPromise || null;

  var isNode = (typeof require !== 'undefined' && typeof module !== 'undefined' && module.exports);
  var isAMD = (typeof define !== 'undefined' && define.amd);

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
    if (isNode) {
      module.exports = jsonPromise;
      return;
    } 

    exports.jsonPromise = jsonPromise;
  } else if (isAMD) {
    define(function() {
      return jsonPromise;
    });
  } else {
    root.jsonPromise = jsonPromise;
  }

  jsonPromise.noConflict = function() {
    root.jsonPromise = previous;
    return jsonPromise;
  };
})(this);