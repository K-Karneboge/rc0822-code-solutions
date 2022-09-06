/* exported isVowel */
function isVowel(character) {
  var maybe = character.toLowerCase();
  return maybe === 'a' || maybe === 'e' || maybe === 'i' || maybe === 'o' || maybe === 'u';
}
