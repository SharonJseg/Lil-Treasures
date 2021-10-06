import { freebieArray, kitCardArray } from '../utils/constants.js';
import Section from '../components/Section.js';
import KitCard from '../components/KitCard.js';
import Freebie from '../components/Freebie.js';

const hamburgerButton = document.querySelector('.nav__mobile-button');
const navContainer = document.querySelector('.nav__container');

const navItems = [...document.querySelectorAll('.nav__item')];

const toggleNav = () => {
  if (!navContainer.classList.contains('nav_opened')) {
    navContainer.classList.add('nav_opened');
  } else {
    navContainer.classList.remove('nav_opened');
  }
};

const closeNav = () => {
  navContainer.classList.remove('nav_opened');
};

hamburgerButton.addEventListener('click', toggleNav);
navItems.forEach((navItem) => {
  navItem.addEventListener('click', closeNav);
});

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

const freebie = new Section(
  {
    data: freebieArray,
    renderer: (data) => {
      const freebieInstance = new Freebie(data, '#freebie-template');
      const freebieElement = freebieInstance.generateFreebie();
      freebie.setItem(freebieElement);
      console.log(freebieElement);
    },
  },
  '.freebie__list'
);

freebie.renderer();
