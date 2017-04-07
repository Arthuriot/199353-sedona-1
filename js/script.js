'use strict';

var menu = document.querySelector('.menu');
var menuCloseButton = document.querySelector('.menu__close-button');
var menuOpenButton = document.querySelector('.header__menu-icon');

menuOpenButton.addEventListener('click', function (event) {
  event.preventDefault();

  menu.classList.remove('menu-closed');
  menu.classList.add('menu-open');

  menuOpenButton.classList.remove('.header__menu-closed');
  menuOpenButton.classList.add('.header__menu-open');
});

menuCloseButton.addEventListener('click', function (event) {
  event.preventDefault();

  menu.classList.remove('menu-open');
  menu.classList.add('menu-closed');

  menuOpenButton.classList.remove('.header__menu-open');
  menuOpenButton.classList.add('.header__menu-closed');
});
