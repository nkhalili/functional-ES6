const createPrinter = () => {
  const myFavoriteNumber = 42;

  return () => console.log(myFavoriteNumber);
};

const printer = createPrinter();
printer();

console.log(myFavoriteNumber); // undefined ! access must be through closure.
