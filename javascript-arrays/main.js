var colors = ['red', 'white', 'blue'];

console.log('value of colors[0]', colors[0]);
console.log('value of colors[1]', colors[1]);
console.log('value of colors[2]', colors[2]);

console.log('America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');

colors[2] = 'green';

console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');

var students = ['jim', 'james', 'jay', 'jamie'];

students.numberOfStudents = students.length;

console.log(students);

console.log(students.numberOfStudents);

var lastIndex = students.numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log(lastStudent);
