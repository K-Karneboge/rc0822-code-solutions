var banana = 52;
var mango = 42;
var coconut = 120;

console.log(Math.max(banana, mango, coconut));

var heroes = ['Constantine', 'Zatanna', 'Deadman', 'Swamp Thing'];

var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log(randomIndex);
var randomHero = heroes[randomIndex];

console.log(randomHero);

var library = [
  {
    title: 'An Artist of the Floating World',
    author: 'Kazuo Ishiguro'
  },
  {
    title: 'The House in the Cerulean Sea',
    author: 'TJ Klune'
  },
  {
    title: 'George',
    author: 'Alex Gino'
  }
];
console.log(library);
var lastBook = library.pop();
console.log(lastBook);
var firstBook = library.shift();
console.log(firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

var fullName = 'Kevin Karneboge';

var firstAndLastName = fullName.split(' ');

console.log(firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log(sayMyName);
