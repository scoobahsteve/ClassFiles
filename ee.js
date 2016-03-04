const EE = require('events').EventEmitter;
const fs = require('fs');

var ee = new EE();
ee.on('greet', function() {
  console.log('hello world');
});

ee.emit('greet');
