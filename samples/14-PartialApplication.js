const add = (x, y, z) => x + y + z;

const addPartial = (x) => (y, z) => add(x, y, z);

const add5 = addPartial(5);

const sum = add5(6, 7);

console.log(sum);
