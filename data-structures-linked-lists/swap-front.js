/* exported swapFront */

function swapFront(list) {
  if (list.next === null) { return list; }
  const banana = list.data;
  const papaya = list.next.data;
  list.data = papaya;
  list.next.data = banana;
  return list;
}
