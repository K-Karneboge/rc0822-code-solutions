/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() !== undefined) {
    const lift = stack.pop();
    const look = stack.peek();
    stack.push(lift);
    return look;
  }
}
