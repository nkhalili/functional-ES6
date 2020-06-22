const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((x) => x % 2 === 0);

console.log(evenNumbers);

const words = ['Antarctica', 'the', 'Canada', 'Ocean'];

const createLengthTest = (length) => (word) => word.length > length;

const longWords = words.filter(createLengthTest(6));

console.log(longWords);
