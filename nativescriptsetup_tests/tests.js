var should = require('chai').should(),
    envInfo = require('../nativescriptsetup/index'),
    getWinPath = envInfo.getWindowsPath;

describe('command: getWindowsPath', function() {
  it('check if windows path is not undefined', function() {
	getWinPath().should.not.be.undefined
  });
  
  it('path shouldn\'t be an empty string', function() {
	getWinPath().should.exist;
  });
  
  it('path length should be greater than 0', function() {
	var length = getWinPath().length;
	length.should.be.above(0);
  });
});

describe('command: getWindowsPath', function() {
  it('check if windows path is not undefined', function() {
	getWinPath().should.not.be.undefined
  });
  
  it('path shouldn\'t be an empty string', function() {
	getWinPath().should.exist;
  });
  
  it('path length should be greater than 0', function() {
	var length = getWinPath().length;
	length.should.be.above(0);
  });
});