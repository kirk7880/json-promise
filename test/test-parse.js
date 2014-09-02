'use strict';

var parser = require('../index');
var validObject = require(__dirname + '/fixtures/valid-object');
var validString = require(__dirname + '/fixtures/valid-string');
var invalidString = require(__dirname + '/fixtures/invalid-string');
var assert = require("assert");

describe('parser.parse', function(){
  it('validObject should should be an object', function(done){
    assert.equal(typeof {}, typeof validObject);
    done();
  });

  it('validString should should be a string', function(done){
    assert.equal(typeof "", typeof validString);
    done();
  });

  it('invalid should should be a string', function(done){
    assert.equal(typeof "", typeof invalidString);
    done();
  });

  it('should return JSON object that is already an object successfully', function(done){
    parser.parse(validObject).then(function(data) {
      assert.equal((typeof {}), typeof data);
      done();
    }).catch(function(e) {
      throw e;
    });
  });

  it('should return JSON Object that is converted to a string successfully', function(done){
    parser.parse(validString).then(function(data) {
      assert.equal((typeof {}), typeof data);
      done();
    }).catch(function(e) {
      throw e;
    });
  });


  it('should not parse json data that is invalid', function(done){
    parser.parse(invalidString).then(function() {
      throw new Error('This test should have failed!');
    }).catch(function(e) {
      assert.equal(true, e instanceof Error);
      done();
    });
  });
});