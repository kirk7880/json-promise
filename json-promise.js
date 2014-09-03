(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    if (isNode) {
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
},{"bluebird":undefined}]},{},[1]);
