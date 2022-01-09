(function () {
  let KEYCODE = {
    esc: 27
  };
  let link = document.querySelector('.page-header__contacts-button');
  let popup = document.querySelector('.modal');
  let close = popup.querySelector('.modal__close');
  let form = popup.querySelector('.modal__form');
  let userName = popup.querySelector('#call-name');
  let phone = popup.querySelector('#call-phone');
  let message = popup.querySelector('#call-question');
  let isStorageSupport = true;
  let storage = {};

  let openPopup = function () {
    popup.classList.add('modal--show');
    document.body.classList.add('disable-scroll');
  };

  let closePopup = function () {
    popup.classList.remove('modal--show');
    document.body.classList.remove('disable-scroll');
  };

  try {
    storage.name = localStorage.getItem('name');
    storage.phone = localStorage.getItem('phone');
    storage.message = localStorage.getItem('message');
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener('click', (evt) => {

    evt.preventDefault();
    openPopup();

    if (storage.name) {
      userName.value = storage.name;
      phone.value = storage.phone;
      message.value = storage.message;
      message.focus();
    } else {
      userName.focus();
    }

  });

  close.addEventListener('click', (evt) => {

    evt.preventDefault();
    closePopup();
  });

  form.addEventListener('submit', () => {
    if (isStorageSupport) {
      localStorage.setItem('name', userName.value);
      localStorage.setItem('phone', phone.value);
      localStorage.setItem('message', message.value);
    }
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === KEYCODE.esc) {
      evt.preventDefault();
      if (popup.classList.contains('modal--show')) {
        closePopup();
      }
    }
  });

  popup.addEventListener('click', (evt) => {
    if (evt.target === popup) {
      closePopup();
    }
  });
})();
