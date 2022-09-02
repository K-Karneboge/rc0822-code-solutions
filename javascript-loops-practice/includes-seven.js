/* exported includesSeven */
function includesSeven(array) {
  for (var i = 0, n = array.length; i < n; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
