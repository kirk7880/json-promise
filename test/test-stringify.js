'use strict';

var parser = require('../index');
var validObject = require(__dirname + '/fixtures/valid-object');
var validString = require(__dirname + '/fixtures/valid-string');
var invalid = require(__dirname + '/fixtures/invalid-string');
var assert = require("assert");

describe('parser.stringify', function(){
  it('validObject should should be an object', function(done){
    assert.equal(typeof {}, typeof validObject);
    done();
  });

  it('validString should should be a string', function(done){
    assert.equal(typeof "", typeof validString);
    done();
  });

  it('invalid should should be a string', function(done){
    assert.equal(typeof "", typeof invalid);
    done();
  });

  it('should return JSON string from a JSON object', function(done){
    parser.stringify(validObject).then(function(data) {
      assert.equal((typeof ''), typeof data);
      done();
    }).catch(function(e) {
      throw e;
    });
  });

  it('should return JSON string that is already a JSON string', function(done){
    parser.stringify(validString).then(function(data) {
      assert.equal((typeof ''), typeof data);
      done();
    }).catch(function(e) {
      throw e;
    });
  });


  it('should not stringify the JSON object that is invalid', function(done){
    parser.stringify(invalid).then(function(data) {
      throw new Error('This test should have failed!');
    }).catch(function(e) {
      assert.equal(true, e instanceof Error);
      done();
    });
  });
});