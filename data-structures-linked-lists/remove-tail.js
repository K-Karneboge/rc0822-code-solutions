/* exported removeTail */

function removeTail(list) {
  if (list.next === null) { return list; }
  let current = list.next;
  let previous = list;
  while (current.next !== null) {
    previous = current;
    current = current.next;
  }
  previous.next = null;
}
