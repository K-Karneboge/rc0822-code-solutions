/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const oldlist = list;
  const newNode = new LinkedList(value);
  newNode.next = oldlist.next;
  oldlist.next = newNode;
}
