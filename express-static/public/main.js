const test = document.querySelector('.test');
function toggle(e) {
  test.className = 'test2';
}
test.addEventListener('click', toggle);
