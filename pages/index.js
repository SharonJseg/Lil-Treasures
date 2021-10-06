import {
  freebieArray,
  kitCardArray,
  ageCardArray,
  navItemArray,
  hamburgerButton,
  navContainer,
} from '../utils/constants.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import AgeCard from '../components/AgeCard.js';
import KitCard from '../components/KitCard.js';
import Freebie from '../components/Freebie.js';
import NavItem from '../components/NavItem.js';

const toggleNav = () => {
  if (!navContainer.classList.contains('nav_opened')) {
    navContainer.classList.add('nav_opened');
  } else {
    navContainer.classList.remove('nav_opened');
  }
};

hamburgerButton.addEventListener('click', toggleNav);

const navItems = new Section(
  {
    data: navItemArray,
    renderer: (data) => {
      const navItemInstance = new NavItem(data, '#nav-item-template');
      const navItemElement = navItemInstance.generateNavItem();
      navItems.setItem(navItemElement);
    },
  },
  '.nav__container'
);

navItems.renderer();

const popupForm = new PopupWithForm('.popup');

function openFormPopup() {
  popupForm.open();
}
const kitsCard = new Section(
  {
    data: kitCardArray,
    renderer: (data) => {
      const cardInstance = new KitCard(data, '#kit-card-template', {
        handlerOpenForm: openFormPopup,
      });
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
    },
  },
  '.freebie__list'
);

freebie.renderer();

const ageCard = new Section(
  {
    data: ageCardArray,
    renderer: (data) => {
      const cardInstance = new AgeCard(data, '#age-card-template');
      const cardElement = cardInstance.generateCard();
      ageCard.setItem(cardElement);
    },
  },
  '.subscribe__list'
);

ageCard.renderer();
