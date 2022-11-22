/* exported take2nd */

function take2nd(queue) {
  const shallow = queue;
  const front = shallow.dequeue();
  if (shallow.peek() === undefined) {
    return front;
  }
  const second = shallow.peek();
  queue.enqueue(front);
  queue.dequeue();
  return second;
}
