(function () {
  const KEYCODE = {
    esc: 27,
  };
  const link = document.querySelector('.page-header__contacts-button');
  const popup = document.querySelector('.modal');
  const close = popup.querySelector('.modal__close');
  const form = popup.querySelector('.modal__form');
  const userName = popup.querySelector('#call-name');
  const phone = popup.querySelector('#call-phone');
  const message = popup.querySelector('#call-question');
  let isStorageSupport = true;
  const storage = {};

  const openPopup = function () {
    if (!popup) {
      return;
    }
    popup.classList.add('modal--show');
    document.body.classList.add('disable-scroll');
  };

  const closePopup = function () {
    if (!popup) {
      return;
    }
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

  if (form) {
    form.addEventListener('submit', () => {
      if (isStorageSupport) {
        localStorage.setItem('name', userName.value);
        localStorage.setItem('phone', phone.value);
        localStorage.setItem('message', message.value);
      }
    });
  }

  if (form) {
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
  }
})();
