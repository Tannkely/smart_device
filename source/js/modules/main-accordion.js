'use strict';

(function () {
  var accordionItems = document.querySelectorAll('.accordion');
  var accordionPanes = document.querySelectorAll('.accordion__pane');

  var hidePane = function (button, pane) {
    button.classList.add('accordion__toggle--inactive');
    pane.classList.add('accordion__pane--hidden');
  };

  var showPane = function (button, pane) {
    button.classList.remove('accordion__toggle--inactive');
    pane.classList.remove('accordion__pane--hidden');
  };

  var toggleAccordion = function (evt) {
    Array.prototype.forEach.call(accordionPanes, function (accordionPane) {
      var button = accordionPane.closest('.accordion').querySelector('.accordion__toggle');
      if (button === evt.target && !button.classList.contains('accordion__toggle--inactive') || button !== evt.target) {
        hidePane(button, accordionPane);
      } else if (button === evt.target) {
        showPane(button, accordionPane);
      }
    });
  };

  Array.prototype.forEach.call(accordionItems, function (accordion) {
    var accordionToggleButton = accordion.querySelector('.accordion__toggle');
    var accordionPane = accordion.querySelector('.accordion__pane');
    hidePane(accordionToggleButton, accordionPane);
    accordionToggleButton.addEventListener('click', toggleAccordion);
  });
})();
