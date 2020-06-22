const divide = (x, y) => {
  // Violates single responsibility principle
  // if (y === 0) {
  //   console.log('Error: divided by zero.');
  //   return null;
  // }

  return x / y;
};

const secondArgumentIsntZero = (func) => (...args) => {
  if (args[1] === 0) {
    console.log('Error: divided by zero.');
    return null;
  }

  return func(...args);
};

const divideSafe = secondArgumentIsntZero(divide);

console.log(divideSafe(7, 0));
console.log(divideSafe(7, 4));
