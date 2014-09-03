'use strict';

var chai = require('chai');
var expect = chai.expect;
var expect = chai.expect;
var parser;
var jsonParser = jsonParser || null;

var isNode = (typeof exports !== 'undefined' && typeof module !== 'undefined' && module.exports);

if (isNode) {
  var validObject = require(__dirname + '/fixtures/valid-object');
  var validString = require(__dirname + '/fixtures/valid-string');
  var invalidString = require(__dirname + '/fixtures/invalid-string');
  parser = require('../index');
} else {
  parser = jsonParser;
}


describe('parser.parse', function(){
  it('validObject should should be an object', function(done){
    expect(typeof validObject).to.equal(typeof {});
    done();
  });

  it('validString should should be a string', function(done){
    expect(typeof validString).to.equal(typeof "");
    done();
  });

  it('invalid should should be a string', function(done){
    expect(typeof invalidString).to.equal(typeof "");
    done();
  });

  it('should return JSON object that is already an object successfully', function(done){
    parser.parse(validObject).then(function(data) {
      expect(typeof data).to.equal(typeof {});
      done();
    }).catch(function(e) {
      throw e;
    });
  });

  it('should return JSON Object that is converted to a string successfully', function(done){
    parser.parse(validString).then(function(data) {
      expect(typeof data).to.equal(typeof {});
      done();
    }).catch(function(e) {
      throw e;
    });
  });


  it('should not parse json data that is invalid', function(done){
    parser.parse(invalidString).then(function() {
      throw new Error('This test should have failed!');
    }).catch(function(e) {
      expect((e instanceof Error)).to.equal(true);
      done();
    });
  });
});

describe('parser.stringify', function(){
  it('validObject should should be an object', function(done){
    expect(typeof validObject).to.equal(typeof {});
    done();
  });

  it('validString should should be a string', function(done){
    expect(typeof validString).to.equal(typeof "");
    done();
  });

  it('invalid should should be a string', function(done){
    expect(typeof validString).to.equal(typeof "");
    done();
  });

  it('should return JSON string from a JSON object', function(done){
    parser.stringify(validObject).then(function(data) {
      expect(typeof data).to.equal(typeof "");
      done();
    }).catch(function(e) {
      throw e;
    });
  });

  it('should return JSON string that is already a JSON string', function(done){
    parser.stringify(validString).then(function(data) {
      expect(typeof data).to.equal(typeof "");
      done();
    }).catch(function(e) {
      throw e;
    });
  });


  it('should not stringify json data that is invalid', function(done){
    parser.stringify(invalidString).then(function() {
      throw new Error('This test should have failed!');
    }).catch(function(e) {
      expect(e instanceof Error).to.equal(true);
      done();
    });
  });
});