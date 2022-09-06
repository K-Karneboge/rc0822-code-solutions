/* exported initial */
function initial(array) {
  var initials = [];
  for (var i = 0; i < array.length - 1; i++) {
    initials.push(array[i]);
  }
  return initials;
}
