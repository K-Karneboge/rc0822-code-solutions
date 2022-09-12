
function toggle(event) {
  if (event.target.className === 'lightOn') {
    event.target.closest('.container').className = 'containerOff container';
    event.target.className = 'lightOff';
  } else if (event.target.className === 'lightOff') {
    event.target.className = 'lightOn';
    event.target.closest('.container').className = 'containerOn container';
  }
}
addEventListener('click', toggle);
