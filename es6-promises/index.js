const takeAChance = require('./take-a-chance');

const taken = takeAChance('Kevin');

taken.then(success => {
  console.log(success);
});
taken.catch(error => {
  console.log(error.message);
});
