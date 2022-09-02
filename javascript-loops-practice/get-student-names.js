/* exported getStudentNames */
function getStudentNames(classlist) {
  var studentNames = [];
  for (var i = 0; i < classlist.length; i++) {
    studentNames.push(classlist[i].name);
  }
  return studentNames;
}
