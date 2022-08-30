
function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log('there are ' + convertMinutesToSeconds(5) + ' seconds');

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

console.log(greet('Bee'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log(getArea(17, 42));

var protaganist = {
  firstName: 'Lelouche',
  lastName: 'Lamperouge'
};

function getFirstName(person) {
  return person.firstName;
}
console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
console.log(getFirstName(protaganist));
