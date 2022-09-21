var countdown = ['3', '2', '1', '~Earth Beeeelooowww Us~'];
var i = 0;
function touchdown(e) {
  if (i < countdown.length) {
    document.querySelector('h1').textContent = countdown[i];
    i++;
  }
}
setInterval(touchdown, 1000);
