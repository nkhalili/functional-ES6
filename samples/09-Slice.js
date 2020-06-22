const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// selects items from index 3 to 5, .slice is immutable
console.log(numbers.slice(3, 5));

// using .slice without indexes, will return all the array
console.log(numbers.slice().reverse());
console.log(numbers);
