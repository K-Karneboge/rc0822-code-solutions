/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentnumber = 1;
  while (currentnumber <= 10) {
    numbers.push(currentnumber);
    currentnumber++;
  }
  return numbers;
}
console.log(getNumbersToTen());

function getEvenNumbersToTwenty() {
  var numbers = [];
  var currentnumber = 2;
  while (currentnumber <= 20) {
    numbers.push(currentnumber);
    currentnumber += 2;
  }
  return numbers;
}
console.log(getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated = word + repeated;
    count++;
  }
  return repeated;
}

console.log(repeatWord('banana', 5));

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string.charAt(i));
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
function getKeys(object) {
  var keys = [];
  for (object.keys in object) {
    keys.push(object.keys);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  for (var i = 0; i < object.length; i++) {
    values.push(object[i]);
  }
  return values;
}
