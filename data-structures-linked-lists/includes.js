/* exported includes */

function includes(list, value) {
// Make a variable for holding the current data to compare to value imput
  let current = list;
  while (current.data !== value && current.next !== null) {
    current = current.next;
  }
  return current.data === value;
}
