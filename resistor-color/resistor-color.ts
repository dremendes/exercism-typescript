export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

const values = [0,  1,  2,  3,  4,  5,  6,  7,  8,  9,]

export const colorCode = (color: string):Number => values[COLORS.indexOf(color)];
