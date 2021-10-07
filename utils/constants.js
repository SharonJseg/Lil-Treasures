export const ageCardArray = [
  {
    title: '3-5 years',
    background: 'age__color-bg_type_pink',
    text: 'A collection of activities and ideas to promote learning and development.',
    image: {
      src: './images/age_3_5.jpg',
      alt: 'Image of a toddler playing',
    },
  },
  {
    title: '6-9 years',
    background: 'age__color-bg_type_orange',
    text: 'Learning Activities for grasping new things.',
    image: {
      src: './images/age_6_9.jpg',
      alt: 'Image of a child doing a scientific experiment',
    },
  },
  {
    title: '10-12 years',
    background: 'age__color-bg_type_turq',
    text: 'Awesome Projects for Tween kids. Practicing skills in order to become better.',
    image: {
      src: './images/age_10_12.jpg',
      alt: 'Image of hands building a robot',
    },
  },
];

export const kitCardArray = [
  {
    type: '_type-science',
    image: {
      src: './images/science_icon.svg',
      alt: 'science icon of a vial',
    },
    title: 'Science Kit',
    description:
      'Kids will learn to focus and to solve a problem. This Kit get them into basics of Astronomy, Math, Physics and Chemistry.',
    list: [
      'Scientific journal to read and fill',
      'Chemical experiments',
      'Water tubes maze',
      'DIY slime ingredients',
      'Robotics task',
      'Draw the planet map',
    ],
  },
  {
    type: '_type-art',
    image: {
      src: './images/art_icon.svg',
      alt: 'Icon of a color pallete',
    },
    title: 'Art Kit',
    description:
      'his Kit introduces them into the wonderful world of arts. They will learn to draw, paint and even sculpt!',
    list: [
      'Color pencils',
      'Origami paper and instructions',
      'New Stickers every month',
      'Playdough!',
    ],
  },
  {
    type: '_type-nature',
    image: {
      src: './images/nature_icon.svg',
      alt: 'icon of a leaf for the nature kit',
    },
    title: 'Nature Kit',
    description:
      'Learn about the natural world, from the tiny bacteria swimming in a puddle to the huge elephant stomping in the jungle!',
    list: [
      'A monthly nature subject to tackle',
      'Different maps of the world',
      'Flower seeds you can plant and grow',
      'Educational games with a nature theme',
    ],
  },
  {
    type: '_type-surprise',
    image: {
      src: './images/surprise_icon.svg',
      alt: 'Icon of a magical boat',
    },
    title: 'Mystery Kit',
    description:
      "Every month your child will get a surprise kit, it could be science, arts or nature. It's mystery! who doesn't like a nice surprise?",
    list: [
      'A random monthly kit!',
      "It could be the science kit this month but shh! it's a secret!",
    ],
  },
];

export const freebieArray = [
  {
    image: {
      src: './images/coloring.jpg',
      alt: 'drawing of a ladybug',
    },
    caption: 'Coloring',
    filepath: 'https://sharonjseg.github.io/Lil-Treasures/freebies/ladybug.pdf',
  },
  {
    image: {
      src: './images/origami.jpg',
      alt: 'drawing of origami instructions',
    },
    caption: 'Origami',
    filepath: 'https://sharonjseg.github.io/Lil-Treasures/freebies/origami.pdf',
  },
  {
    image: {
      src: './images/writing.jpg',
      alt: 'image of a written page',
    },
    caption: 'Writing',
    filepath: 'https://sharonjseg.github.io/Lil-Treasures/freebies/writing.pdf',
  },
  {
    image: {
      src: './images/maze.jpg',
      alt: 'drawing of a maze in the shape of a snail',
    },
    caption: 'Maze',
    filepath: 'https://sharonjseg.github.io/Lil-Treasures/freebies/maze.pdf',
  },
];

export const navItemArray = [
  {
    href: '#subscribe',
    text: 'Subscribe',
    type: '_type_subscribe',
  },
  {
    href: '#kits',
    text: 'Subscription Kits',
    type: '',
  },
  {
    href: '#freebies',
    text: 'Free Downloads',
    type: '',
  },
  {
    href: '#about-us',
    text: 'About Us',
    type: '',
  },
];

export const hamburgerButton = document.querySelector('.nav__mobile-button');
export const navContainer = document.querySelector('.nav__container');
