/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const oldlist = list;
  const newlist = new LinkedList(value);
  newlist.next = oldlist;
  return newlist;
}
