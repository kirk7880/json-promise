'use strict';

var Promise = require('bluebird');

exports.parse = function(data) {
  return new Promise(function parse(resolve, reject) {
    if (typeof data === (typeof {})) {
      return resolve(data);
    }
    
    // if error, reject is called!
    resolve(JSON.parse(data))
  });
};

exports.stringify = function(data) {
  return new Promise(function stringify(resolve, reject) {
    if (typeof data === (typeof '')) {
      return resolve(data);
    } 

    // if error, reject is called!
    resolve(JSON.stringify(data));
  });
};