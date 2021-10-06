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
