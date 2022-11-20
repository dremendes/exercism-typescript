interface Dictionary {
  [key: string]: string;
}

const resistorValue:Dictionary = {
  'black': '0',
  'brown': '1',
  'red': '2',
  'orange': '3',
  'yellow': '4',
  'green': '5',
  'blue': '6',
  'violet': '7',
  'grey': '8',
  'white': '9',
};

const sufix:Dictionary = {
  0 : ' ohms',
  1 : ' kiloohms',
  2 : ' megaohms',
}

const addPrefixToResitorValue = (fullStr: string): string => {
  const division = parseInt(fullStr.split('').filter(char => char === '0').length / 3 as any, 10);
  const remainder = fullStr.split('').filter(char => char === '0').length % 3;

  return fullStr.split('').filter(char => char !== '0').join('') + '0'.repeat(remainder) + sufix[division];
}

export const decodedResistorValue = (resistors: string[]):string => { 
  const ohms = resistorValue[resistors[0]] + resistorValue[resistors[1]] + '0'.repeat(parseInt(resistorValue[resistors[2]]));

  return addPrefixToResitorValue(ohms); 
}
