var container = document.getElementById('container');
var progressBar = document.getElementById('progress-bar');
var sectionOne = document.getElementById('section-1');
var sectionTwo = document.getElementById('section-2');

setTimeout(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}, 10);

window.addEventListener('scroll', onScroll);

function onScroll(event) {
  var barProgress =
    (window.scrollY / (container.scrollHeight - window.innerHeight)) * 100;

  progressBar.style.width = `${barProgress}%`;

  if (
    window.scrollY >= sectionOne.offsetTop &&
    window.scrollY < sectionTwo.offsetTop
  ) {
    progressBar.style.backgroundColor = 'maroon';
  }
  if (window.scrollY >= sectionTwo.offsetTop) {
    progressBar.style.backgroundColor = '#719FB0';
  }
}

var positionContainer = { w: 1000, h: 650 };

// position initialization for hill image
var positionLayer1 = { x: 0, y: 0, w: 1000, h: 455 };
var positionLayer2 = { x: 0, y: 0, w: 1000, h: 455 };
var positionLayer3 = { x: 0, y: 0, w: 1000, h: 455 };
var positionLayer4 = { x: 0, y: 0, w: 1000, h: 455 };
var positionLayer5 = { x: 0, y: 0, w: 1000, h: 455 };
var positionLayer6 = { x: 0, y: 0, w: 1000, h: 455 };

var layer1 = document.getElementById('layer-1');
var layer2 = document.getElementById('layer-2');
var layer3 = document.getElementById('layer-3');
var layer4 = document.getElementById('layer-4');
var layer5 = document.getElementById('layer-5');
var layer6 = document.getElementById('layer-6');

// position initialization for mountain
var mountainLayer1 = { x: 0, y: 0, w: 1000, h: 900 };
var mountainLayer2 = { x: 0, y: 0, w: 1000, h: 900 };
var mountainLayer3 = { x: 0, y: 0, w: 1000, h: 900 };
var mountainLayer4 = { x: 0, y: 0, w: 1000, h: 900 };
var mountainLayer5 = { x: 0, y: 0, w: 1000, h: 900 };

var mountain1 = document.getElementById('mountain-1');
var mountain2 = document.getElementById('mountain-2');
var mountain3 = document.getElementById('mountain-3');
var mountain4 = document.getElementById('mountain-4');
var mountain5 = document.getElementById('mountain-5');

window.addEventListener('mousemove', onMouseMove);

function onMouseMove(evt) {
  var mouse = {
    x: evt.pageX - container.offsetLeft,
    y: evt.pageY - container.offsetTop,
  };

  // X - axis / left or right of hill image
  positionLayer1.x =
    -mouse.x * 0.005 + (positionContainer.w / 2 - positionLayer1.w / 2);
  layer1.style.left = `${positionLayer1.x}px`;

  positionLayer2.x =
    -mouse.x * 0.008 + (positionContainer.w / 2 - positionLayer2.w / 2);
  layer2.style.left = `${positionLayer2.x}px`;

  positionLayer3.x =
    -mouse.x * 0.011 + (positionContainer.w / 2 - positionLayer3.w / 2);
  layer3.style.left = `${positionLayer3.x}px`;

  positionLayer4.x =
    -mouse.x * 0.014 + (positionContainer.w / 2 - positionLayer4.w / 2);
  layer4.style.left = `${positionLayer4.x}px`;

  positionLayer5.x =
    -mouse.x * 0.037 + (positionContainer.w / 2 - positionLayer5.w / 2);
  layer5.style.left = `${positionLayer5.x}px`;

  positionLayer6.x =
    -mouse.x * 0.06 + (positionContainer.w / 2 - positionLayer6.w / 2);
  layer6.style.left = `${positionLayer6.x}px`;

  // X - axis / left or right of hill image
  mountainLayer1.x =
    -mouse.x * 0.008 + (positionContainer.w / 2 - mountainLayer1.w / 2);
  mountain1.style.left = `${mountainLayer1.x}px`;

  mountainLayer2.x =
    -mouse.x * 0.008 + (positionContainer.w / 2 - mountainLayer2.w / 2);
  mountain2.style.left = `${mountainLayer2.x}px`;

  mountainLayer3.x =
    -mouse.x * 0.011 + (positionContainer.w / 2 - mountainLayer3.w / 2);
  mountain3.style.left = `${mountainLayer3.x}px`;

  mountainLayer4.x =
    -mouse.x * 0.014 + (positionContainer.w / 2 - mountainLayer4.w / 2);
  mountain4.style.left = `${mountainLayer4.x}px`;

  mountainLayer5.x =
    -mouse.x * 0.037 + (positionContainer.w / 2 - mountainLayer5.w / 2);
  mountain5.style.left = `${mountainLayer5.x}px`;
}
