const numbers = [5, 7, 2, 40, 23, 14, 8, 4, 11];

const sum = numbers.reduce((acc, x) => {
  console.log(`Acc is ${acc}`);
  console.log(`X is ${x}`);

  return acc + x;
}, 0); // 0 is Accumulator(acc) staring value.

const product = numbers.reduce((acc, x) => acc * x, 1); // 1 is Accumulator(acc) staring value.

console.log(sum);
console.log(product);
