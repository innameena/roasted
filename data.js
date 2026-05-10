const vegetables = [
  {
    id: 'asparagus',
    name: 'Asparagus',
    emoji: '🌿',
    cuts: [
      { label: 'Thin spears (whole)', temp: 400, timeMin: 10, timeMax: 12, parBoil: null },
      { label: 'Thick spears (whole)', temp: 400, timeMin: 15, timeMax: 18, parBoil: null },
    ]
  },
  {
    id: 'beets',
    name: 'Beets',
    emoji: '🔴',
    image: 'images/beets.png',
    cuts: [
      { label: 'Whole, small (under 2")', temp: 400, timeMin: 45, timeMax: 55, parBoil: null },
      { label: 'Whole, large (over 2")', temp: 400, timeMin: 60, timeMax: 75, parBoil: null },
      { label: '1" cubes', temp: 400, timeMin: 30, timeMax: 35, parBoil: null },
    ]
  },
  {
    id: 'bell-peppers',
    name: 'Bell peppers',
    emoji: '🫑',
    cuts: [
      { label: 'Whole', temp: 450, timeMin: 25, timeMax: 30, parBoil: null },
      { label: 'Halved', temp: 450, timeMin: 20, timeMax: 25, parBoil: null },
      { label: '1" strips', temp: 425, timeMin: 18, timeMax: 22, parBoil: null },
    ]
  },
  {
    id: 'broccoli',
    name: 'Broccoli',
    emoji: '🥦',
    cuts: [
      { label: 'Large florets', temp: 425, timeMin: 20, timeMax: 25, parBoil: null },
      { label: 'Small florets (1")', temp: 425, timeMin: 12, timeMax: 15, parBoil: null },
    ]
  },
  {
    id: 'brussels-sprouts',
    name: 'Brussels sprouts',
    emoji: '🫛',
    cuts: [
      { label: 'Whole', temp: 400, timeMin: 25, timeMax: 30, parBoil: null },
      { label: 'Halved', temp: 400, timeMin: 18, timeMax: 22, parBoil: null },
    ]
  },
  {
    id: 'butternut-squash',
    name: 'Butternut squash',
    emoji: '🎃',
    cuts: [
      { label: 'Halved, seeded', temp: 400, timeMin: 45, timeMax: 55, parBoil: null },
      { label: '1" cubes', temp: 400, timeMin: 25, timeMax: 30, parBoil: null },
    ]
  },
  {
    id: 'cabbage',
    name: 'Cabbage',
    emoji: '🥬',
    cuts: [
      { label: 'Wedges', temp: 400, timeMin: 25, timeMax: 30, parBoil: null },
      { label: 'Thin slices', temp: 400, timeMin: 15, timeMax: 20, parBoil: null },
    ]
  },
  {
    id: 'carrots',
    name: 'Carrots',
    emoji: '🥕',
    cuts: [
      { label: 'Whole, thin (under 1")', temp: 400, timeMin: 25, timeMax: 30, parBoil: null },
      { label: 'Halved lengthwise', temp: 400, timeMin: 25, timeMax: 30, parBoil: null },
      { label: '1" coins', temp: 400, timeMin: 20, timeMax: 25, parBoil: null },
    ]
  },
  {
    id: 'cauliflower',
    name: 'Cauliflower',
    emoji: '⬜',
    image: 'images/cauliflower.png',
    cuts: [
      { label: 'Large florets', temp: 425, timeMin: 22, timeMax: 28, parBoil: null },
      { label: 'Small florets (1")', temp: 425, timeMin: 15, timeMax: 18, parBoil: null },
      { label: '1" steaks', temp: 425, timeMin: 25, timeMax: 30, parBoil: null },
    ]
  },
  {
    id: 'eggplant',
    name: 'Eggplant',
    emoji: '🍆',
    cuts: [
      { label: '1" cubes', temp: 400, timeMin: 20, timeMax: 25, parBoil: null },
      { label: '½" rounds', temp: 400, timeMin: 18, timeMax: 22, parBoil: null },
      { label: 'Halved', temp: 400, timeMin: 30, timeMax: 35, parBoil: null },
    ]
  },
  {
    id: 'garlic',
    name: 'Garlic',
    emoji: '🧄',
    cuts: [
      { label: 'Whole head', temp: 400, timeMin: 40, timeMax: 45, parBoil: null },
      { label: 'Individual cloves', temp: 400, timeMin: 20, timeMax: 25, parBoil: null },
    ]
  },
  {
    id: 'green-beans',
    name: 'Green beans',
    emoji: '🌱',
    cuts: [
      { label: 'Whole', temp: 425, timeMin: 12, timeMax: 15, parBoil: null },
    ]
  },
  {
    id: 'mushrooms',
    name: 'Mushrooms',
    emoji: '🍄',
    cuts: [
      { label: 'Whole, small or medium', temp: 400, timeMin: 15, timeMax: 20, parBoil: null },
      { label: 'Halved', temp: 400, timeMin: 12, timeMax: 15, parBoil: null },
      { label: 'Sliced', temp: 400, timeMin: 10, timeMax: 12, parBoil: null },
    ]
  },
  {
    id: 'onions',
    name: 'Onions',
    emoji: '🧅',
    cuts: [
      { label: 'Whole', temp: 400, timeMin: 50, timeMax: 60, parBoil: null },
      { label: 'Quartered', temp: 400, timeMin: 25, timeMax: 30, parBoil: null },
      { label: '½" rings', temp: 375, timeMin: 20, timeMax: 25, parBoil: null },
    ]
  },
  {
    id: 'parsnips',
    name: 'Parsnips',
    emoji: '🌾',
    cuts: [
      { label: 'Whole', temp: 400, timeMin: 30, timeMax: 40, parBoil: 'Par-boil 5–7 min before roasting. Large parsnips will burn on the outside before cooking through if roasted from raw.' },
      { label: '1–2" pieces', temp: 400, timeMin: 25, timeMax: 30, parBoil: null },
    ]
  },
  {
    id: 'potatoes-russet',
    name: 'Potatoes (russet)',
    emoji: '🥔',
    cuts: [
      { label: 'Whole', temp: 425, timeMin: 50, timeMax: 60, parBoil: null },
      { label: 'Halved', temp: 400, timeMin: 35, timeMax: 45, parBoil: null },
      { label: '1" cubes', temp: 425, timeMin: 25, timeMax: 35, parBoil: null },
      { label: 'Wedges', temp: 425, timeMin: 30, timeMax: 40, parBoil: 'Par-boil 5 min before roasting. Drain, return to pot, and shake to rough up the edges — this is what makes them crispy.' },
    ]
  },
  {
    id: 'potatoes-sweet',
    name: 'Potatoes (sweet)',
    emoji: '🍠',
    cuts: [
      { label: 'Whole', temp: 400, timeMin: 45, timeMax: 55, parBoil: null },
      { label: 'Halved', temp: 400, timeMin: 35, timeMax: 40, parBoil: null },
      { label: '1" cubes', temp: 400, timeMin: 25, timeMax: 30, parBoil: null },
      { label: 'Wedges', temp: 400, timeMin: 30, timeMax: 35, parBoil: null },
    ]
  },
  {
    id: 'tomatoes',
    name: 'Tomatoes',
    emoji: '🍅',
    cuts: [
      { label: 'Cherry, whole', temp: 400, timeMin: 15, timeMax: 20, parBoil: null },
      { label: 'Roma, halved', temp: 400, timeMin: 25, timeMax: 30, parBoil: null },
      { label: 'Large, halved', temp: 375, timeMin: 35, timeMax: 45, parBoil: null },
    ]
  },
  {
    id: 'zucchini',
    name: 'Zucchini',
    emoji: '🥒',
    cuts: [
      { label: 'Halved lengthwise', temp: 400, timeMin: 20, timeMax: 25, parBoil: null },
      { label: '½" coins', temp: 400, timeMin: 15, timeMax: 18, parBoil: null },
      { label: '1" half-moons', temp: 400, timeMin: 18, timeMax: 22, parBoil: null },
    ]
  },
];
