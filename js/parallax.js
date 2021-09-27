var onion = document.getElementById('onion');
var container = document.getElementById('container');

var layerOne = document.getElementById('layerOne');
var layerTwo = document.getElementById('layerTwo');
var layerThree = document.getElementById('layerThree');
{
}
var containerPos = { w: 512, h: 512 };
var onionPos = { x: 0, y: 0, w: 50, h: 50 };
var layerOnePos = { x: 0, y: 0, w: 1000, h: 512 };
var layerTwoPos = { x: 0, y: 0, w: 1000, h: 512 };
var layerThreePos = { x: 0, y: 0, w: 1000, h: 512 };

window.addEventListener('mousemove', onMouseMove);

function onMouseMove(evt) {
  var mouse = {
    x: evt.pageX - container.offsetLeft,
    y: evt.pageY - container.offsetTop,
  };
  // console.log(`x: ${mouse.x}, y: ${mouse.y}`);

  onionPos.x = mouse.x - onionPos.w / 2;
  onionPos.y = mouse.y - onionPos.h / 2;

  onion.style.left = `${onionPos.x}px`;
  onion.style.top = `${onionPos.y}px`;

  // X - axis / left or right of image
  layerOnePos.x = -mouse.x * 0.08 + (containerPos.w / 2 - layerOnePos.w / 2);
  layerOne.style.left = `${layerOnePos.x}px`;

  layerTwoPos.x = -mouse.x * 0.03 + (containerPos.w / 2 - layerTwoPos.w / 2);
  layerTwo.style.left = `${layerTwoPos.x}px`;

  layerThreePos.x =
    -mouse.x * 0.006 + (containerPos.w / 2 - layerThreePos.w / 2);
  layerThree.style.left = `${layerThreePos.x}px`;

  // Y-axis / top or down of image
  layerOnePos.y = -mouse.y * 0.02 + (containerPos.h / 2 - layerOnePos.h / 2);
  layerOne.style.top = `${layerOnePos.y}px`;

  // layerTwoPos.y = -mouse.y * 0.005 + (containerPos.h/ 2 - layerTwoPos.h / 2);
  // layerTwo.style.top = `${layerTwoPos.y}px`;

  // layerThreePos.y =
  //   -mouse.y * 0.001 + (containerPos.h / 2 - layerThreePos.h / 2);
  // layerThree.style.top = `${layerThreePos.y}px`;
}
