'use strict';
(function () {
  // var modal = document.querySelector('.modal');
  var modalSuccess = document.querySelector('.modal--success');
  var modalAlert = document.querySelector('.modal--alert');
  var modalSuccessOverlay = document.querySelector('#modal-success');
  var modalAlertOverlay = document.querySelector('#modal-alert');
  var alertCloseButton = document.querySelector('.btn--alert');
  var successCloseButton = document.querySelector('.btn--success');
  // var openButton = document.querySelector('btn--form');
  var ESCAPE_KEY_CODE = 27;
  var ENTER_KEY_CODE = 13;

  var closeModalAlert = function (event) {
    event.preventDefault();
    modalSuccess.classList.add('modal-closed');
    modalSuccessOverlay.classList.add('modal-closed');
  };

  var closeModalSuccess = function (event) {
    event.preventDefault();
    modalAlert.classList.add('modal-closed');
    modalAlertOverlay.classList.add('modal-closed');
  };

  var closeModalSuccessOnKey = function (event) {
    if ((event.keyCode === ESCAPE_KEY_CODE) || (event.keyCode === ENTER_KEY_CODE)) {
      closeModalSuccess(event);
    }
  };

  var closeModalAlertOnKey = function (event) {
    if ((event.keyCode === ESCAPE_KEY_CODE) || (event.keyCode === ENTER_KEY_CODE)) {
      closeModalAlert(event);
    }
  };

  successCloseButton.addEventListener('click', function () {
    modalSuccess.classList.toggle('modal-closed');
    modalSuccessOverlay.classList.toggle('modal-closed');
  });

  alertCloseButton.addEventListener('click', function () {
    modalAlert.classList.toggle('modal-closed');
    modalAlertOverlay.classList.toggle('modal-closed');
  });

  document.addEventListener('keydown', closeModalSuccessOnKey);
  document.addEventListener('keydown', closeModalAlertOnKey);

  // openButton.addEventListener('click', function() {
  //   modal.classList.toggle('modal-closed');
  //   modalOverlay.classList.toggle('modal-closed');
  // });
})();
