var fs = require('fs');
const note = String(process.argv[2]);

if (process.argv[2] !== undefined) {
  fs.writeFile('note.txt', note, 'utf8', err => {
    if (err) throw err;
  });
} else { throw Error; }
