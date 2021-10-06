import { kitCardArray } from '../utils/constants.js';
import Section from '../components/Section.js';
import KitCard from '../components/KitCard.js';

const hamburgerButton = document.querySelector('.nav__mobile-button');
const navContainer = document.querySelector('.nav__container');

const navItems = [...document.querySelectorAll('.nav__item')];
const kitsCardImages = [...document.querySelectorAll('.kits__card-image')];

const toggleNav = () => {
  if (!navContainer.classList.contains('nav_opened')) {
    navContainer.classList.add('nav_opened');
  } else {
    navContainer.classList.remove('nav_opened');
  }
  //   navContainer.classList.toggle('nav_opened');
};

const closeNav = () => {
  navContainer.classList.remove('nav_opened');
};

hamburgerButton.addEventListener('click', toggleNav);
navItems.forEach((navItem) => {
  navItem.addEventListener('click', closeNav);
});

const addAnimation = (evt) => {
  evt.target.classList.add('playful');
};

const removeAnimation = (evt) => {
  evt.target.classList.remove('playful');
};

kitsCardImages.forEach((image) =>
  image.addEventListener('mouseover', addAnimation)
);

kitsCardImages.forEach((image) =>
  image.addEventListener('mouseout', removeAnimation)
);

const kitsCard = new Section(
  {
    data: kitCardArray,
    renderer: (data) => {
      const cardInstance = new KitCard(data, '#kit-card-template');
      const cardElement = cardInstance.generateCard();
      kitsCard.setItem(cardElement);
    },
  },
  '.kits__card-container'
);

kitsCard.renderer();
