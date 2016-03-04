const fs = require('fs');
var readFile = (filename, callback) => {
  var cb = callback || function() {};
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) {
        reject(err);
        return cb(err);
      }

      resolve(data);
      return cb(null, data);
    });
  });
};

filePromise = readFile('one.txt');
filePromise.then((data) => {
  console.log(data.toString());
});

filePromise.then((data) => {
  console.log(data.toString().toUpperCase());
});

filePromise.catch((err) => {
  throw err;
});


readFile('one.txt', (err, data) => {
  if (err) throw err;

  console.log('from callback: ' + data.toString());
});
