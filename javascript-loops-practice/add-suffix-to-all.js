/* exported addSuffixToAll */
function addSuffixToAll(array, string) {
  var suffixed = [];
  for (var i = 0; i < array.length; i++) {
    suffixed.push(array[i] + string);
  }
  return suffixed;
}
