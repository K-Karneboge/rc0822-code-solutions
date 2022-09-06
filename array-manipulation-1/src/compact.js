/* exported compact */
function compact(array) {
  var compacted = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false && array[i] !== null && array[i] !== 0 && array[i] !== undefined && Number.isNaN(array[i]) === false && array[i] !== '') {
      compacted.push(array[i]);
    }

  }
  return compacted;
}
