/* exported todos */

var todos = [];

// Checks if there was a previous list.
var previousTodosJSON = localStorage.getItem('javascript-local-storage');

// If there was anything retrieved, then parse and assign to todos.
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}

// turn stores the sessions list to localstorage
window.addEventListener('beforeunload', makeToDos);

function makeToDos(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}
