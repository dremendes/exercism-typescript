export const isLeap = (year: number) =>
  ((year % 4) !== 0) ? false :
  (year % 100 === 0) ? (year % 400 === 0) ? 
  true : false : true;
