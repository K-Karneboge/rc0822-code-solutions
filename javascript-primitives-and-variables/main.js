var fullName = 'Kevin Karneboge';
var isCool = false;
var totalPets = 2;

console.log('My name is ' + fullName);

if (isCool === true) {
  console.log(fullName + ' is not cool');
} else if (isCool === false) {
  console.log(fullName + ' is not cool');
} else {
  console.log('It is unknown whether ' + fullName + ' is cool or not.');
}

console.log(fullName + ' has ' + totalPets + ' pets.');

console.log('fullName is a/n ' + typeof (fullName));
console.log('isCool is a/n ' + typeof (isCool));
console.log('totalPets is a/n ' + typeof (totalPets));

var unknown = null;
console.log(unknown);
console.log('unknown is a/n ' + typeof (unknown));

var never;
console.log(never);
console.log('never is a/n ' + typeof (never));
