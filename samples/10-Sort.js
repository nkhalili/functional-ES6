const mixedUpNumbers = [10, 3, 5, 1, 2, 9, 8, 4, 6, 7];

const ascending = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const descending = (a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
};

console.log(mixedUpNumbers.slice().sort(ascending));
console.log(mixedUpNumbers.slice().sort(descending));
console.log(mixedUpNumbers);
