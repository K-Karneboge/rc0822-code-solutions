// create constants for the inputs.
const x = Number(process.argv[2]);
const y = Number(process.argv[4]);
// require other modules of the  mathmatical operations.

if (process.argv[3] === 'plus') {
  const o = require('./add.js');
  console.log('result: ', o(x, y));
} else if (process.argv[3] === 'minus') {
  const o = require('./subtract');
  console.log('result: ', o(x, y));
} else if (process.argv[3] === 'times') {
  const o = require('./multiply');
  console.log('result: ', o(x, y));
} else if (process.argv[3] === 'over') {
  const o = require('./divide');
  console.log('result: ', o(x, y));
} else { console.log('Invalid Operation'); }
