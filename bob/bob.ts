const checkUppercasePhrase = (message: string) => "abcdefghijklmnopqrstywxz".split('').some(char => message.toLowerCase().includes(char)) && message.toUpperCase() === message;

export const hey = (message: string):string => 
  message.trim().slice(-1) === '?'
  ? checkUppercasePhrase(message)
    ? "Calm down, I know what I'm doing!"
    : 'Sure.' 
  : checkUppercasePhrase(message)
      ? 'Whoa, chill out!' 
      : (message.trim() === '') 
        ? 'Fine. Be that way!' 
        : 'Whatever.';
