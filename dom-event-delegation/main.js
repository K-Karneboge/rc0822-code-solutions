
var taskList = document.querySelector('.task-list');
console.log(document.querySelector('.task-list'));
function handleClick(event) {
  if (event.target.matches('button')) {
    console.log('button found, removing the following: ');
    console.log('closest task list item is:', event.target.closest('.task-list-item'));
    event.target.closest('.task-list-item').remove();
  }
}
taskList.addEventListener('click', handleClick);
