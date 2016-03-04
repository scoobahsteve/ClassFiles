const expect = require('chai').expect;
const jsonParser = require(__dirname + '/../lib/parser');
const fs = require('fs');

describe('parser', () => {
  it ('should succesfully parse some json', (done) => {
    var req = fs.createReadStream(__dirname + '/valid_json_test.json');
    jsonParser(req, null, function() {
      expect(req.body.test).to.eql('this is a test');
      done();
    });
  });
});
