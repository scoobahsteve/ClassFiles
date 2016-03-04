const net = require('net');

const client = net.connect(3000, () => {
  client.write('Get/ HTTP/1.1\nHost: localhost: 3000\nUser - Agent: curl/7.46.0\nAccept: */*\n');
});

client.on('data', (data) => {
  console.log(data);
  client.end();
});
