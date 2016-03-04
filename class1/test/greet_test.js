var greet = require(__dirname + '/../greet');
var greet2 = require(__dirname + '/../greet2');
var expect = require('chai').expect;

descibe('the greet function', function() {
  it('should greet a name', function() {
    expect(greet('test')).to.eql('hello world');
  });
});

describe('greet 2 electric boogaloo', function() {
  it('should have a greet property that greets someone'), fucntion( {
    expect(greet2.greet('test')).to.eql('hello a second time test');
  });
});
