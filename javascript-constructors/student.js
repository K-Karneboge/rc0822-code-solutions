/* exported Student */
function Student(first, last, subjectName) {
  this.firstName = first;
  this.lastName = last;
  this.subject = subjectName;
}
Student.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};
Student.prototype.getIntroduction = function () {
  return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
// returns an introduction in this syntax 'Hello, my name is James Gosling and I am studying language design.'
};
