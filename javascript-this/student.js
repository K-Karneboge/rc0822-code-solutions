/* exported student */
var student = {
  firstName: 'Kevin',
  lastName: 'Karneboge',
  subject: 'JS',
  getFullName: function () { return this.firstName + ' ' + this.lastName; },
  getIntroduction: function () { return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.'; }
};
