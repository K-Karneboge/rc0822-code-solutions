/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  } else {
    var words = string.split(' ');
    return words;
  }
}
