const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];
const numbersSum = numbers.reduce((currentValue, previousValue) => currentValue + previousValue);
console.log(numbersSum);
const numbersProduct = numbers.reduce((currentValue, previousValue) => currentValue * previousValue);

console.log(account.reduce((currentValue, previousValue) => transaction(currentValue) + transaction(previousValue)));

function transaction(object) {
  if (object.type === 'deposit') {
    return object.amount;
  } else if (object.type === 'withdrawal') {
    return object.amount * -1;
  } else return object;
}

console.log(traits.reduce((currentValue, previousValue) => Object.assign(previousValue, currentValue)));
