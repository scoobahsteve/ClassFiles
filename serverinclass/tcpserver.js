const net = require('net');

var server = net.createServer((socket) => {
  socket.pipe(process.stdout);
  socket.write('HTTP/1.1 200');
  socket.write('Content-type: ' + 'text/plain');
  socket.write('super awesome text');
  socket.end();
});

server.listen(3000, function () {
  console.log('server up');
});
