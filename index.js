/* jshint unused:false */

'use strict';

var JSONPromise = require('bluebird');

exports.parse = function(data) {
  return new JSONPromise(function parse(resolve, reject) {
    if (typeof data === (typeof {})) {
      return resolve(data);
    }

    resolve(JSON.parse(data));
  });
};

exports.stringify = function(data) {

  return new JSONPromise(function stringify(resolve, reject) {
    if (typeof data === (typeof '')) {
      return resolve(data);
    } 

    resolve(JSON.stringify(data));
  });
};