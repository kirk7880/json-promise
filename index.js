'use strict';

var Promise = require('bluebird');

exports.parse = function(data) {
  return new Promise(function parse(resolve, reject) {
    if (typeof data === (typeof {})) {
      return resolve(data);
    }
    
    try {
      return resolve(JSON.parse(data))
    } catch (e) {
      return reject(e);
    }
  });
};

exports.stringify = function(data) {
  return new Promise(function stringify(resolve, reject) {
    if (typeof data === (typeof '')) {
      return resolve(data);
    } 

    try {
      return resolve(JSON.stringify(data));
    } catch (e) {
      return reject(e);
    }
  });
};
