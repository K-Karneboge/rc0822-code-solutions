/* exported filterOutStrings */
function filterOutStrings(array) {
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}
