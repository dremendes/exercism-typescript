export const isPangram = (phrase: string) => 
    'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .filter(char => !phrase.toLowerCase().includes(char))
    .join()
    .length === 0;
