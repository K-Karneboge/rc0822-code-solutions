/* exported tail */
function tail(array) {
  var result = [];
  for (var i = 1; i < array.length; i++) { result.push(array[i]); }
  return result;
}
