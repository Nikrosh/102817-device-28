var modContainer = document.querySelector('.modal-container');
var modContact = document.querySelector('.modal-contact');
var modContactButton = document.querySelector('.button-contact');
var modMap = document.querySelector('.modal-map');
var modMapButton = document.querySelector('.contact-map');
var modContactClose = document.querySelector('.modal-contact-close');
var modMapClose = document.querySelector('.modal-map-close');
var body = document.querySelector('body');
var deliveryButton = document.querySelector('.button-delivery');
var guaranteeButton = document.querySelector('.button-guarantee');
var creditButton = document.querySelector('.button-credit');
var deliverySection = document.querySelector('.service-delivery');
var guaranteeSection = document.querySelector('.service-guarantee');
var creditSection = document.querySelector('.service-credit');
var sliderButtons = document.querySelectorAll('.button-head-slider');
var headSlides = document.querySelectorAll('.head-slide');
var inputName = document.querySelector('#modal-name');
var inputMail = document.querySelector('#modal-mail');
var modalForm = document.querySelector('.modal-contact-form');
var storageName = localStorage.getItem('Name');

var isStorageSupport = true;
var storage = "";

if (body.classList.contains('body-index')) {

try {
storageName = localStorage.getItem("Name");
} catch (err) {
isStorageSupport = false;
}

// Modal-contact

modContactButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modContainer.classList.add('flex-show');
  modContact.classList.add('block-show');

  if (storageName) {
      inputName.value = storageName;
      inputMail.foceus();
  } else {
      inputName.focus();
  }

});

modContactClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modContainer.classList.remove('flex-show');
  modContact.classList.remove('block-show');
  modContact.classList.remove('modal-error');
});

modalForm.addEventListener('submit', function (evt) {
  if (!inputName.value || !inputMail.value) {
    evt.preventDefault();
    modContact.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setitem('Name', inputName.value);
    }
};
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modContact.classList.contains("block-show") || modMap.classList.contains('block-show')) {
      evt.preventDefault();
      modContainer.classList.remove('flex-show');
      modContact.classList.remove('block-show');
      modMap.classList.remove('block-show');
      modContact.classList.remove('modal-error');
    }
  }
});

// Modal-map

modMapButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modContainer.classList.add('flex-show');
  modMap.classList.add('block-show');
});

modMapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modContainer.classList.remove('flex-show');
  modMap.classList.remove('block-show');
});

// Services

deliveryButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  deliverySection.classList.add('block-show');
  deliveryButton.classList.add('services-button-checked');
  guaranteeSection.classList.remove('block-show');
  guaranteeButton.classList.remove('services-button-checked');
  creditSection.classList.remove('block-show');
  creditButton.classList.remove('services-button-checked');
});

guaranteeButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  deliverySection.classList.remove('block-show');
  deliveryButton.classList.remove('services-button-checked');
  guaranteeSection.classList.add('block-show');
  guaranteeButton.classList.add('services-button-checked');
  creditSection.classList.remove('block-show');
  creditButton.classList.remove('services-button-checked');
});

creditButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  deliverySection.classList.remove('block-show');
  deliveryButton.classList.remove('services-button-checked');
  guaranteeSection.classList.remove('block-show');
  guaranteeButton.classList.remove('services-button-checked');
  creditSection.classList.add('block-show');
  creditButton.classList.add('services-button-checked');
});

// slider

sliderButtons[0].addEventListener('click', function (evt) {
  evt.preventDefault();
  sliderButtons[0].classList.add('button-slider-checked');
  sliderButtons[1].classList.remove('button-slider-checked');
  sliderButtons[2].classList.remove('button-slider-checked');
  headSlides[0].classList.add('slide-flex-show');
  headSlides[1].classList.remove('slide-flex-show');
  headSlides[2].classList.remove('slide-flex-show');
});

sliderButtons[1].addEventListener('click', function (evt) {
  evt.preventDefault();
  sliderButtons[0].classList.remove('button-slider-checked');
  sliderButtons[1].classList.add('button-slider-checked');
  sliderButtons[2].classList.remove('button-slider-checked');
  headSlides[0].classList.remove('slide-flex-show');
  headSlides[1].classList.add('slide-flex-show');
  headSlides[2].classList.remove('slide-flex-show');
});

sliderButtons[2].addEventListener('click', function (evt) {
  evt.preventDefault();
  sliderButtons[0].classList.remove('button-slider-checked');
  sliderButtons[1].classList.remove('button-slider-checked');
  sliderButtons[2].classList.add('button-slider-checked');
  headSlides[0].classList.remove('slide-flex-show');
  headSlides[1].classList.remove('slide-flex-show');
  headSlides[2].classList.add('slide-flex-show');
});

};
