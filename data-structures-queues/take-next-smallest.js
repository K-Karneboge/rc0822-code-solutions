/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) { return queue.peek(); }
  let front = queue.dequeue();
  if (queue.peek() === undefined) { return front; }
  let compare = queue.peek();
  while (front > compare) {
    queue.enqueue(front);
    front = queue.dequeue();
    compare = queue.peek();
  }
  return front;
}
