/* exported countdown */
function countdown(number) {
  var count = [];
  var countnumber = number;
  for (var i = 0; i <= number; i++) {
    count.push(countnumber);
    countnumber -= 1;
  }
  return count;
}
