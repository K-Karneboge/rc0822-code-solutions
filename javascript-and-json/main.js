var library = [
  {
    isbn: '1',
    title: 'importance of being earnest',
    author: 'oscar wilde'
  },
  {
    isbn: '2',
    title: 'frankenstein',
    author: 'mary shelly'
  },
  {
    isbn: '3',
    title: 'flowers for algernon',
    Author: 'daniel keyes'
  }

];
console.log(library);
console.log(typeof (library));
var libraryString = JSON.stringify(library);

console.log(libraryString);
// student manual string
var studentString1 = '{ "id": "12345", "name": "larry niven" }';
// checking type of object
console.log('this is studentString1: ', studentString1);

console.log('and it is a ', typeof ('{ "id": "12345", "name": "larry niven" }'));
// making student object from string
var student1 = JSON.parse('{ "id": "12345", "name": "larry niven" }');
console.log('this is studentString1 post parse: ', student1, ' and it is a ', typeof (student1));

// testing purposes, reverse larry.
var student2 = {
  id: '54321',
  name: 'nevin yrral'
};

console.log('student 2 arrary: ', student2);

var studentString2 = JSON.stringify(student2);
console.log(studentString2);
