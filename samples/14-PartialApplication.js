const add = (x, y, z) => x + y + z;

const addPartial = (x, y) => (z) => add(x, y, z);

const add5and6 = addPartial(5, 6);

const sum = add5and6(7);

console.log(sum);
