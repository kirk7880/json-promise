'use strict';

var Promise = require('bluebird');

exports.parse = function(data) {
  var _data = data;
  return new Promise(function parse(resolve, reject) {
    if (typeof _data === (typeof {})) {
      return resolve(_data);
    }
    
    try {
      return resolve(JSON.parse(_data))
    } catch (e) {
      return reject(e);
    }
  });
};

exports.stringify = function(data) {
  var _data = data;
  return new Promise(function stringify(resolve, reject) {
    if (typeof _data === (typeof '')) {
      return resolve(_data);
    } 

    try {
      return resolve(JSON.stringify(_data));
    } catch (e) {
      return reject(e);
    }
  });
};