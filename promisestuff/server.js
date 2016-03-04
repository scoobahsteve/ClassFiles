const http = require('http');
const jsonParser = require(__dirname + '/lib/json_callback');

http.createServer((req, res) => {
  if (req.url === '/lib/json_promise') {
    jsonPromise(req);
      if(data.hello) console.log('wow such hello, so world');
      .then(function() {
        return {
          statusCode: 200,
          msg: JSON.stringify(data);
        }
      })
      .catch(function(err) {
        return {
          statusCode: 500,
          msg: 'invalid json'
        }

      .then(function(data) {

      });
  }

  jsonParser(req, (err, data) => {
    var statusCode = (err) ? 500: 200;
    var msg = JSON.stingify((err) ? {msg: 'invalid json'}: data);
    res.writeHead(statusCode, {'Content-type': 'application/json'});
    res.write(msg);
    res.end();
    debugger;
  });
}).listen(3000, () => console.log('server up'));
