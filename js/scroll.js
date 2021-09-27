var progressBar = document.getElementById('progress-bar');
var container = document.getElementById('container');
var sectionOne = document.getElementById('sectionOne');
var sectionTwo = document.getElementById('sectionTwo');
var sectionThree = document.getElementById('sectionThree');
var itemHolder = document.getElementById('item-holder');

window.addEventListener('scroll', onScroll);

console.log(window);
console.log(container);

setTimeout(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}, 10);

// window.scrollTo(0, 0);

function onScroll(event) {
  // console.log(`Window height: ${window.scroll}`);
  // console.log(`Window ScrollY: ${window.scrollY}`);
  // console.log(`container scrollHeight: ${container.scrollHeight}`);

  console.log('section two offsetTop', sectionTwo.offsetTop);

  var barProgress =
    (window.scrollY / (container.scrollHeight - window.innerHeight)) * 100;

  progressBar.style.width = `${barProgress}%`;

  // section two
  // if (
  //   window.scrollY >= sectionTwo.offsetTop &&
  //   window.scrollY < sectionThree.offsetTop
  // ) {
  //   console.log('You have reached Section 2');
  //   itemHolder.style.display = 'flex';
  // } else {
  //   console.log('You are not in section 2');
  //   itemHolder.style.display = 'none';
  // }

  var itemList = document.querySelectorAll('.item');
  console.log(itemList);

  //Initial attempt, before refactor to for-loop

  // if (window.scrollY + 100 >= itemList[0].offsetTop) {
  //   itemList[0].classList.add('fadeIn');
  // }
  // if (window.scrollY + 100 >= itemList[1].offsetTop) {
  //   itemList[1].classList.add('fadeIn');
  // }
  // if (window.scrollY + 100 >= itemList[2].offsetTop) {
  //   itemList[2].classList.add('fadeIn');
  // }
  // if (window.scrollY + 100 >= itemList[3].offsetTop) {
  //   itemList[3].classList.add('fadeIn');
  // }

  for (var i = 0; i < itemList.length; i++) {
    if (window.scrollY + 120 >= itemList[i].offsetTop) {
      itemList[i].classList.add('fadeIn');
    }

    if (window.scrollY >= itemList[i].offsetTop + 20) {
      itemList[i].classList.remove('fadeIn');
      itemList[i].classList.add('fadeOut');
    }
  }
}
