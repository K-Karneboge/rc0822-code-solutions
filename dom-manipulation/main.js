var timesClicked = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCounter = document.querySelector('.click-count');

$hotButton.addEventListener('click', handleButtonClick);

var temp = ['cold', 'cool', 'tepid', 'warm', 'hot', 'nuclear'];

function handleButtonClick(event) {
  timesClicked++;
  var temperature;
  if (timesClicked < 4) {
    temperature = temp[0];
  } else if (timesClicked < 7) {
    temperature = temp[1];
  } else if (timesClicked < 10) {
    temperature = temp[2];
  } else if (timesClicked < 13) {
    temperature = temp[3];
  } else if (timesClicked < 16) {
    temperature = temp[4];
  } else {
    temperature = temp[5];
  }
  $hotButton.className = 'hot-button ' + temperature;
  $clickCounter.textContent = 'Clicks: ' + timesClicked;
}
