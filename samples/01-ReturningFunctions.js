const createMultiplier = (y) => (x) => x * y;

// const double = createMultiplier(2)(3);
// console.log(double);

const double = createMultiplier(2);
console.log(double(3));
