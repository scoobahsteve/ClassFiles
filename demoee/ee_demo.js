const EE = require('events').EventEmitter;
const fs = require('fs');

var ee = new EE();

ee.on('readdone', (options) => {
  console.log(options.data.toString());
  if (options.data) console.log(options.data.toString());
  if (!options.files.length) return console.log('finished');

  fs.readFile(options.file.pop(), (err, data) => {
    if (err) return console.log(err);
    options.data = data;
    ee.emit('readdone', options);
  });
});

ee.emit('readdone', {files: ['one.txt', 'two.txt', 'three.txt']});
