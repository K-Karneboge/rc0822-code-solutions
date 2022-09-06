/* exported sumAll */
function sumAll(numbers) {
  var count = 0;
  for (var i = 0, n = numbers.length; i < n; i++) {
    count += numbers[i];
  }
  return count;
}
