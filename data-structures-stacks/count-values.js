/* exported countValues */

function countValues(stack) {
  const shallow = stack;
  const mathable = [];
  while (shallow.peek() !== undefined) {
    mathable.push(shallow.pop());
  }
  return mathable.length;
}
