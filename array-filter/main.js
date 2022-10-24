const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function isGreaterThan5(num) {
  if (num > 5) {
    return true;
  }
  return false;
}

function startsWithE(string) {
  if (string.indexOf('E') === 0) {
    return true;
  }
  return false;
}
function containsD(string) {
  if (string.indexOf('D') === -1 && string.indexOf('d') === -1) {
    return false;
  }
  return true;
}

console.log('these are even: \n', numbers.filter(isEven));
console.log('these are greater than 5: \n', numbers.filter(isGreaterThan5));
console.log('these start with E: \n', names.filter(startsWithE));
console.log('these contain D or d: \n', names.filter(containsD));
