/* exported maxValue */

function maxValue(stack) {
  const shallow = stack;
  const mathable = [];
  while (shallow.peek() !== undefined) {
    mathable.push(shallow.pop());
  }
  const max = mathable.reduce((a, b) => Math.max(a, b), -Infinity);
  return max;
}
