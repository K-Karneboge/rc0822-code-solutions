/* exported reverseWord */
function reverseWord(word) {
  var wordChars = Object.assign([], word);
  wordChars.reverse();
  word = wordChars.join('');
  return word;
}
