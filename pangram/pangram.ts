const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export const isPangram = (phrase: string) => alphabet.split('').filter(arg => !phrase.toLowerCase().includes(arg)).join().length === 0;
