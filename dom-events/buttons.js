
function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
var clickybutton = document.querySelector('.click-button');

clickybutton.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
var hoverbutton = document.querySelector('.hover-button');

hoverbutton.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log(event);
  console.log(event.target);
}
var doubleClicker = document.querySelector('.double-click-button');
doubleClicker.addEventListener('dblclick', handleDoubleClick);
