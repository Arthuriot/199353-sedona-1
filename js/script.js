'use strict';

var menu = document.querySelector('.menu');
var menuCloseButton = document.querySelector('.menu__close-button');
var menuOpenButton = document.querySelector('.header__menu-icon');

menuOpenButton.addEventListener('click', function () {
  menu.classList.add('.menu-open');
  console.log("Ха-ха");
});

menuCloseButton.addEventListener('click', function () {
  menu.classList.add('.menu-closed');
  console.log("Хи-хи");
});

// if (menu.classList.contains('.menu--closed') {
//   menuCloseButton.style.display = 'none';
// })
