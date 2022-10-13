var fs = require('fs');
const randomNumber = String(Math.random());
fs.writeFile('text.txt', randomNumber, 'utf8', err => {
  if (err) throw err;
});
