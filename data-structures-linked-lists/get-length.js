/* exported getLength */

function getLength(list) {
  let count = 1;
  let current = list;
  while (current.next !== null) {
    count++;
    current = current.next;
  } return count;
}
