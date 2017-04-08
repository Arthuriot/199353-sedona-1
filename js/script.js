'use strict';

var menu = document.querySelector('.menu');
var menuCloseButton = document.querySelector('.menu__close-button');
var menuOpenButton = document.querySelector('.header__menu-icon');

menuOpenButton.addEventListener('click', function (event) {
  event.preventDefault();

  menu.classList.remove('menu__closed');
  menu.classList.add('menu__open');

  menuOpenButton.classList.remove('icon__shown');
  menuOpenButton.classList.add('icon__hidden');
});

menuCloseButton.addEventListener('click', function (event) {
  event.preventDefault();

  menu.classList.remove('menu__open');
  menu.classList.add('menu__closed');

  menuOpenButton.classList.remove('icon__hidden');
  menuOpenButton.classList.add('icon__shown');
});
