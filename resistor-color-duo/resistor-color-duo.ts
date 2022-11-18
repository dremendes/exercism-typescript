
interface Dictionary<Type> {
  [key: string]: number;
}

const resistorValue:Dictionary<string> = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9,
};


export function decodedValue(resistors: string[]) {
  return parseInt(`${resistorValue[resistors[0]]}${resistorValue[resistors[1]]}`);
}
