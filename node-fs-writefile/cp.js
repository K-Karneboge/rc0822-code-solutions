var fs = require('fs');
const copied = String(process.argv[2]);
const pasted = String(process.argv[3]);

let copiedThing = null;
fs.readFile(copied, (err, data) => {
  if (err) {
    throw err;
  }
  copiedThing = String(data);
  fs.writeFile(pasted, copiedThing, err => {
    if (err) { throw err; }
  });
});
