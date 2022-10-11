// <i class="fa-solid fa-circle"></i> The Solid Circle
// <i class="fa-regular fa-circle"></i> The Empty Circle
// Make an array with the names of all files within images,
// Fill the image wheel with images with src of the image file name array.
// Eventually figure out how to automatically fill the carousel; run a function to make it all automated, the number of dots though might get out of hand.

// Stepmaster carouselStep
var carouselStep = 0;
var carouselTimer = setInterval(rotate, 3000);
// preloading images.
var bulbasaur = new Image();
bulbasaur.src = 'images/001.png';
var charmander = new Image();
charmander.src = 'images/004.png';
var squirtle = new Image();
squirtle.src = 'images/007.png';
var pikachu = new Image();
pikachu.src = 'images/025.png';
var jigglypuff = new Image();
jigglypuff.src = 'images/039.png';

// array for the images
var carousel = [bulbasaur, charmander, squirtle, pikachu, jigglypuff];

// Callback functions to be called for setting icons and images
function renderImage() {
  document.querySelector('.character-img').src = carousel[carouselStep].src;
}

function iconCheck() {
  for (var i = 0; i < document.querySelectorAll('.fa-circle').length; i++) {
    document.querySelectorAll('.fa-circle')[i].className = 'fa-regular fa-circle';
  }
  document.querySelectorAll('.fa-circle')[carouselStep].className = 'fa-solid fa-circle';
}
// functions to be placed with listeners and the intervals
function rotate() {
  if (carouselStep < carousel.length - 1) {
    carouselStep++;
  } else if (carouselStep === carousel.length - 1) {
    carouselStep = 0;
  }
  renderImage();
  iconCheck();
  clearInterval(carouselTimer);
  carouselTimer = setInterval(rotate, 3000);
}
function retro() {
  if (carouselStep > 0) {
    carouselStep--;
  } else if (carouselStep === 0) {
    carouselStep = carousel.length - 1;
  }
  renderImage();
  iconCheck();
  clearInterval(carouselTimer);
  carouselTimer = setInterval(rotate, 3000);
}
// Icon functions
function setCarouselStep(e) {
  for (var i = 0; i < document.querySelectorAll('.fa-circle').length; i++) {
    if (e.target === document.querySelectorAll('.fa-circle')[i]) {
      carouselStep = i;
    }
  }
  renderImage();
  iconCheck();
  clearInterval(carouselTimer);
  carouselTimer = setInterval(rotate, 3000);
}
// Set a listener to all dots for manual step setting on click.
for (var i = 0; i < document.querySelectorAll('.fa-circle').length; i++) {
  document.querySelectorAll('.fa-circle')[i].addEventListener('click', setCarouselStep);
}
// Listeners on the chevrons for triggering forward and backwards steps.
document.querySelector('.fa-chevron-right').addEventListener('click', rotate);
document.querySelector('.fa-chevron-left').addEventListener('click', retro);

// previous iteration of the code, would get stuck if manual intervention was used before the first interval.
// var previousImage = null;
// var currentImage = null;
// function rotate(e) {
//   console.log('rotate triggered');
//   if (previousImage !== null) {
//     previousImage.className = 'hidden';
//   }
//   if (i < carousel.length) {
//     currentImage = carousel[i];
//     currentImage.className = 'character-img';
//     i++;
//   } else if (i === carousel.length) {
//     i = 0;
//     currentImage = carousel[i];
//     currentImage.className = 'character-img';
//   }
//   previousImage = currentImage;
// }
// function retro(e) {
//   console.log('retro triggered');
//   previousImage = currentImage;
//   if (previousImage !== null) {
//     previousImage.className = 'hidden';
//     if (i === 0) {
//       i = carousel.length - 1;
//     } else {
//       i--;
//     }
//     currentImage = carousel[i];
//     currentImage.className = 'character-img';
//   }
// }
