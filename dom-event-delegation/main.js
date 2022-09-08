
var taskList = document.querySelector('.task-list');

function handleClick(event) {
  if (event.target.matches('button')) {
    event.target.closest('.task-list-item').remove();
  }
}
taskList.addEventListener('click', handleClick);
