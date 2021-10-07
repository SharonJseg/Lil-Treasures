import {
  freebieArray,
  kitCardArray,
  ageCardArray,
  navItemArray,
  titlesArray,
  hamburgerButton,
  navContainer,
} from '../utils/constants.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import AgeCard from '../components/AgeCard.js';
import KitCard from '../components/KitCard.js';
import Freebie from '../components/Freebie.js';
import NavItem from '../components/NavItem.js';
import TitleItem from '../components/TitleItem.js';

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

const titleContainer = new Section({
  data: titlesArray,
  renderer: (data) => {
    const titleInstance = new TitleItem(data, '#titles-template');
    const titleElement = titleInstance.generateTitle();
    const selector = titleElement.querySelector('.section').classList.item(1);
    const tagTitle = document.createElement('h2');
    tagTitle.classList.add('section__title');
    const tagSubtitle = document.createElement('p');
    tagSubtitle.classList.add('section__subtitle');
    const textTitle = document.createTextNode(
      titleElement.querySelector('.section__title').textContent
    );
    const textSubtitle = document.createTextNode(
      titleElement.querySelector('.section__subtitle').textContent
    );
    tagTitle.appendChild(textTitle);
    tagSubtitle.appendChild(textSubtitle);
    const element = document.querySelector(`.${selector}`);
    element.prepend(tagSubtitle);
    element.prepend(tagTitle);
  },
});

titleContainer.renderer();
