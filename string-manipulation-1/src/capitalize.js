/* exported capitalize */
function capitalize(word) {
  word = word.toLowerCase();
  word = word.charAt(0).toUpperCase() + word.slice(1);
  return word;
}
// lowercase all letters in a string, then capitalize the first letter, return result.
